import express from 'express';
import { createGeoJson, deleteGeoJson, getAllGeoJsons, getAllGeoJsonForUser, getGeoJson, updateGeoJson } from '../controllers/geoDataController.js';

const router = express.Router();

//Get All the geo jsons for user
router.get("/:userId/geoJsons", getAllGeoJsonForUser);

//CREATE
router.post("/:userId", createGeoJson);

//UPDATE
router.put("/:geoJsonId", updateGeoJson);

//DELETE
router.delete("/:geoJsonId", deleteGeoJson);

//GET
router.get("/:geoJsonId", getGeoJson);

//GET ALL
router.get("/", getAllGeoJsons);

export default router;