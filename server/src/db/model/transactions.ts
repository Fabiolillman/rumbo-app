import { Schema, model } from 'mongoose';

export interface TransactionsType {
    email: string,
    time: number,
    amount: number,
    description: string,
    created_at: number,
    status: number,
    source_reference: string,
}

const schema = new Schema <TransactionsType>({
    email: { type:String, required: true },
    time: { type:Number, required: true },
    amount: { type:Number, required: true },
    description: { type:String, requred: true },
    created_at: { type:Number, requred: true },
    status: { type:Number, requred: true },
    source_reference: { type:String, requred: true },
})

const TransactionsModel = model <TransactionsType> ('timereports', schema)

export default TransactionsModel;
