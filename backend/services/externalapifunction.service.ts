interface clientAddress {
  UserAddress: string;
}

const externalapifunction = async (Address: clientAddress) => {
  // handle cases here create try and catch case as such
  try {
    // research better way to validate addresses.
    if (!Address) {
      throw new Error("Error no address entered");
    }
    console.log("Address entered successfully");
    // build the external function here as such
    const buildingURL = new URLSearchParams({
      address: Address.UserAddress,
    }); 

    const externalapiURL = `https://api.rentcast.io/v1/properties?address=${buildingURL}`; 
    console.log('external call was successful, next up fetching your data');  
    //this fetch is going to be a get request to actually call the data 
    const propertydatafetch = await fetch(externalapiURL); 
  
    console.log('Fetching property data was successful'); 

    const propertyData = await propertydatafetch.json();  

    if (!propertyData){ 
      throw new Error('No property data recieved for given address user entered'); 
    } 
    console.log('Property data was found, retrieving now');  
    return propertyData; 

  } catch (error) {
    console.error("Error calling external function", error);
    return;
  }
};

// initialize another function here to handle data to be organized. 
// const dataAnalysis = async (Address : clientAddress) => { 
//   //TODO: Implement the destructuring 
//   //BLOCKERS //TODO: -> HANDLE THE whitespace that serves as spaces to replace with percent sign on querying and test the endpoint to make sure those calls are correctly made , then continue with the actual analysis and send that analysis 
//   // to another route to call the OPENAI api to analyze the data prompt it smart. 
//   // const propertydataRecieved = //call the external function passed with the address. 
// }

export default externalapifunction ;
