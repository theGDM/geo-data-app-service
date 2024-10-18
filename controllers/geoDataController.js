import GeoJson from "../models/GeoJson.js";

export const getAllGeoJsonForUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const geoJsons = await GeoJson.find({ userId: userId });
        res.status(200).json(geoJsons);
    } catch (err) {
        next(err);
    }
}

export const createGeoJson = async (req, res, next) => {
    const userId = req.params.userId;
    const { geoData } = req.body;

    const newGeoJson = await GeoJson({
        userId: userId,
        geoData: geoData
    });

    try {
        const savedGeoJson = await newGeoJson.save();
        res.status(200).json(savedGeoJson);
    } catch (err) {
        next(err);
    }
}

export const updateGeoJson = async (req, res, next) => {
    let { geoJsonId } = req.params; //geo json id
    try {
        const updatedGeoJson = await GeoJson.findByIdAndUpdate(
            geoJsonId,
            { $set: req.body },
            { new: true }
        ); //it returns the previous booking json data, so we need to send new : true
        res.status(200).json(updatedGeoJson);
    } catch (err) {
        next(err);
    }
}

export const deleteGeoJson = async (req, res, next) => {
    const { geoJsonId } = req.params;
    try {
        await GeoJson.findByIdAndDelete(geoJsonId);
        res.status(200).json("Geo Json has been deleted");
    } catch (err) {
        next(err);
    }
}

export const getGeoJson = async (req, res, next) => {
    let { geoJsonId } = req.params; //geo json id
    try {
        const geoJson = await GeoJson.findById(geoJsonId);
        res.status(200).json(geoJson);
    } catch (err) {
        next(err);
    }
}

export const getAllGeoJsons = async (req, res, next) => {
    try {
        const geoJsons = await GeoJson.find();
        res.status(200).json(geoJsons);
    } catch (err) {
        next(err);
    }
}