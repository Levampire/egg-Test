'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
        userName:String,
        passWord:String
    });
    return mongoose.model('User',UserSchema,'user')
}
