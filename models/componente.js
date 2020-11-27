const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componenteSchema = new Schema({
    personalID: Number,
    x: String,
    y: String,
    textValue: String,
    fuenteDelTexto: Number,
    textoAlineado: String,
    widthState: Number,
    heightState: Number,
    backgroundDiv: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

const Componente = mongoose.model('Componente', componenteSchema);

module.exports = Componente;