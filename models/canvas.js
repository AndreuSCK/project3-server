const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const canvasScheme = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // author: String,

    name: String,
    gridSize: [Number],
    canvasData: [[String]]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
});

const Canvas = mongoose.model('Canvas', canvasScheme);

module.exports = Canvas;