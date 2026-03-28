import { Request, Response } from "express";
// import database as well

// import external service function here as such -> define the service function.
import  externalapifunction from "../services/externalapifunction.service.js";

const clientpropdataController = async (req: Request, res: Response) => {
  // get user address data here as such
  try {
    const address = { UserAddress: req.body.address };
    // research better way to validate addresses.
    if (!address) {
      throw new Error("Error not valid address");
    }
    console.log("valid address", address);
    // call the function here
    externalapifunction(address); // calls the external API function to get property data 
    // now we need to take that raw data and organize it into data that can be put into a mongodb database. The thing im worried about is accessing the actual data.
    console.log('External API function called'); 
  } catch (error) {
    console.error("There was an error reading your address", error);
  }
};

export default clientpropdataController;
