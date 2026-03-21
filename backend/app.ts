import express from 'express'; 
const app = express();  

// import routes 
import clientPref from './routes/clientpreference.route.js'; 

//set up some middleware here as such 
app.use(express.json());  


//instantiate the route here as such 
app.use('/api/v1/', clientPref); 

// send a set up response as such 
app.get('/', (req, res) => { 
    res.json({ 
        Server: 'Successfully running'
    }); 
}); 

export default app; 