// initialize a mongodb connection here // set up DB as well.
import mongoose from 'mongoose';   
const URI = process.env.URI;   

if (URI !== undefined) { 
    console.log('URI is successful'); 
} else { 
    throw new Error('Error URI empty please enter a valid URI'); 
}

const databaseConnection = async () => { 
    try { 
        await mongoose.connect(URI); 
        console.log('Database successfully connected'); 
    } catch (error) { 
        throw new Error('Error connecting to mongoDB Database');
    }
}; 

export default databaseConnection; 