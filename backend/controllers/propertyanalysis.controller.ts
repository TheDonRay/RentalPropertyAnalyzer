import { Request, Response } from 'express';  
import organizedData from '../services/externalapifunction.service.js'; 
import OpenAi from 'openai'; 


const client = new OpenAi({ 
    apiKey: process.env.OPENAIKEY
});  

interface clientAddress { 
    UserAddress: string
}; 

const PropertyAnalysisController = async (Address : clientAddress, req: Request, res: Response)  => { 
    // set up try and catch case here as such 
    try { 
        // get the data here as such remember that organizedData expects a object to be passed through. 
        const organizedDataFetched = await organizedData(Address);  
        if (!organizedDataFetched) { 
            res.status(404).send("Error fetching organized data payload"); 
        } 
        // if data is valid go ahead and send to the api for analysis and completion  
        const aiPropertyAnalysis = await 
    } catch (error) { 

    }
}

export default PropertyAnalysisController; 