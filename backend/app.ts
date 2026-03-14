import express from 'express'; 
const app = express(); 

//set up some middleware here as such 
app.use(express.json()); 

// send a set up response as such 
app.get('/', (req, res) => { 
    res.json({ 
        Server: 'Successfully running'
    }); 
}); 

export default app; 