import { connect, connection } from 'mongoose';


const MONGO_URI: any = process.env.DATABASE_URI;

const options: any = {
    useUnifiedTopology: true,

    useNewUrlParser: true
}

export const connectToDatabase = async () => {
    try{
        if (!connection.readyState) {
            console.log('Connecting to Mongo DB')
            connect(MONGO_URI, options)
        }
    }
    catch(err){
        console.error(err);
    }

}