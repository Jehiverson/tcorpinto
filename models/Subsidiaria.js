const mongoose =  require('mongoose');
const { Schema } = mongoose;
const path = require('path');
const fileSchema = new Schema ({

    name: {type: String},
    status: {type: String },
    timestamp:{ type: Date, default: Date.now } 

});

fileSchema.virtual('uniqueId')
    .get(function(){
        return this.filename.replace(path.extname(this.filename), '')
    });

module.exports = mongoose.model('sbs',fileSchema)