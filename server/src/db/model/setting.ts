import { Schema, model } from 'mongoose';

export interface SettingType {
    key: string,
    value: string,
}

const schema = new Schema <SettingType>({
    key: { type:String, required: true },
    value: { type:String, required: true },
})

const SettingModel = model <SettingType> ('project', schema)

export default SettingModel;
