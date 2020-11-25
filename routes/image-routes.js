const express = require('express');
const router  = express.Router();

// include the model:
const Image = require('../models/image');
const User = require('../models/user');

router.get('/', (req, res, next) => {
    Image.find()
    .then(imagesFromDB => {
        res.status(200).json(imagesFromDB)
    })
    .catch(err => next(err))
})

router.post('/image/create', async (req, res, next) => {
    console.log('body: ', req)
    console.log(req.session)
    // the fields have the same names as the ones in the model so we can simply pass
    // req.body to the .create() method
    
    Image.create(req.body)
    .then( aNewImage => {
        console.log('Created new image: ', aNewImage);
        return saveImagetoUser(aNewImage)
    }).then( userUpdated => {
        res.status(200).json(userUpdated);
    })
    .catch( err => {
        // console.log(err)
        next(err)
    })
     
})
const saveImagetoUser = async (data) => {
    console.log('Este es el data', data)
   return await User.findOneAndUpdate( 
    
        {'username': data.title},
        {'image' : data.imageUrl}
        )
}



module.exports = router;
