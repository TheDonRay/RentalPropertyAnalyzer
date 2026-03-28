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

    const address = buildingURL.get('address'); 

    const externalapiURL = `https://api.rentcast.io/v1/properties?address=${address}`;
    console.log(externalapiURL); // just to check if we are correcting getting the right URL. 
    return;
  } catch (error) {
    console.error("Error", error);
    return;
  }
};

export default externalapifunction;
