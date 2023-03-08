import mongoose, { Schema, model, Model, Document } from "mongoose";

export interface IStudent extends Document{

    firstname:string,
    lastname:string,
    username:string,
    email:string,
    password:string,
    admin: boolean
}

const StudentSchema:Schema = new Schema({
    firstname:{
        type: String
        
    },

    lastname:{
        type: String
    },

    username: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    admin: {
        type: Boolean
    }
})

export const Student = (mongoose.models.Student ||
     model('Student', StudentSchema)) as Model<IStudent>