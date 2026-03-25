interface clientAddress { 
    Address: string 
}; 

const externalapifunction = async (Address : clientAddress) => { 
    // handle cases here create try and catch case as such 
    try { 
        if (!Address) { 
            throw new Error('Error no address entered');  
        }
    } catch (error) { 

    }
} 

