import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const Connection = () => {

    const DB_URL  = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-l8bbh3w-shard-00-00.hmk6cv7.mongodb.net:27017,ac-l8bbh3w-shard-00-01.hmk6cv7.mongodb.net:27017,ac-l8bbh3w-shard-00-02.hmk6cv7.mongodb.net:27017/?ssl=true&replicaSet=atlas-cqgv8v-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URL);
        console.log("Db is connected successfully")
    }
    catch (error) {
        console.log('Error while connecting the data base ' , error.message);
    }
} 


export default Connection;