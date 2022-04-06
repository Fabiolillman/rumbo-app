import { query } from "./db";
// import Mongoose from "mongoose"

export const getDescriptionsByEmail = async (email: string) => {
    console.log('email-------------', email);
    const sqlQuery = `SELECT DISTINCT description FROM public.transactions WHERE email LIKE $1`;
    return await query(sqlQuery, [ email ]);
    // return Mongoose.model('email').find()
}
