import { Schema, model } from 'mongoose';

export interface TimereportsType {
    email: string,
    time: number,
    hours: number,
    description: string,
    created_at: number,
}

const schema = new Schema <TimereportsType>({
    email: { type:String, required: true },
    time: { type:Number, required: true },
    hours: { type:Number, required: true },
    description: { type:String, requred: true },
    created_at: { type:Number, requred: true }
})

const TimereportsModel = model <TimereportsType> ('timereports', schema)

export default TimereportsModel;
