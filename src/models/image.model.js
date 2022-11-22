const { string } = require("joi");
const { default: mongoose } = require("mongoose");
const { toJSON } = require('./plugins');

const imgaeSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
      },
    public_id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

});

imgaeSchema.plugin(toJSON);

/**
 * @typedef Image
 */

const Image = mongoose.model('Image', imgaeSchema);
module.exports = Image;