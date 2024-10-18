import mongoose, { Schema } from 'mongoose';

const geoSchema = new mongoose.Schema({
    userId: {
        type: Schema.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    geoData: {
        type: Schema.Types.Mixed, // Allows geoData to be stored as a dynamic object
        required: true
    }
}, { timestamps: true });

// Create a Mongoose model using the schema
export default mongoose.model('GeoJson', geoSchema);
