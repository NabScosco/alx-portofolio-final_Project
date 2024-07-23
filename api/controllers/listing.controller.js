import Listing from "../models/listing.model.js";

export const createListing = async (req, res) => {
  try {
    const listen = await Listing.create(req.body);
    return res.status(201).json(listen);
  } catch (error) {
    next(error);
  }
};
