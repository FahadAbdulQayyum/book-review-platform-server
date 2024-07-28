import mongoose from "mongoose"

let driverURL: string = process.env.REACT_APP_DB_URL || ''

mongoose.connect(driverURL);

export {mongoose}