import { Schema } from 'mongoose';


const parkingSchema = new Schema(
    {
        companyName: String,
        displayName: String,
        numberOfSlots: {
            type: Number,
            required: [true, "Please enter the total number of parking lots"]
        }
    },
    {
        timestamps: true
    }
)

export default parkingSchema;