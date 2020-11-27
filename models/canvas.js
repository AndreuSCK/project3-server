const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const canvasScheme = new Schema({
    // author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // author: String,

    // gridSize: [Number],
    localID: String,
    canvasData: [{ type: Schema.Types.ObjectId, ref: 'Componente' }],

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

const Canvas = mongoose.model('Canvas', canvasScheme);

module.exports = Canvas;

// localID, personalID, x, y, textValue, fuenteDelTexto, textoAlineado, widthState, heightState, backgroundDiv