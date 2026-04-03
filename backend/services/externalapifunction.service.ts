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

    // encode the address here so we dont take any whitespace here from the given address recieved to us by the client side . 
    const encodedAddress = encodeURIComponent(Address.UserAddress); 
    // build the external url here as such

    const externalapiURL = `https://api.rentcast.io/v1/properties?address=${encodedAddress}`; 
    console.log(externalapiURL);   
    
    const getpropertyData = await fetch(externalapiURL, { 
      method: 'GET', 
      headers: { 
        'X-Api-Key': process.env.PROPKEY as string, 
      }
    });  

    if (!getpropertyData){ 
      throw new Error('Error fetching property data'); 
    } 

    const retrievedData = await getpropertyData.json(); 
    
    if (!retrievedData){ 
      throw new Error('Unable to get property data'); 
    } 
    console.log('Property data recieved'); 
    return retrievedData; 

  } catch (error) {
    console.error("Error calling external function", error);
    return;
  }
}; 

const organizedData = async (Address: clientAddress) => { 
  //set up try and catch case here to call the data from the above function 
  try {  
    const getrawdata = await externalapifunction(Address);  
    if (!getrawdata) { 
      throw new Error('Error calling the external function to get property data'); 
    }
    console.log('raw data is'); 
    return getrawdata; 
  } catch (error) { 
      throw new Error('Error calling external function'); 
  }
}


export default organizedData ;
