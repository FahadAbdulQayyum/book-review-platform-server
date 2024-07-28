import mongoose from "mongoose"


export const connectDB = () => {
    mongoose
        .connect(process.env.DB_URL||'', {
            dbName: "backendapi",
        })
        .then((c) => console.log(`Database Connected with ${c.connection.host}`))
        .catch((e) => console.log(e));

    // mongoose.connect(
    //     process.env.MONGO_URI, { dbName: "backendapi1" },
    //     { useNewUrlParser: true, useUnifiedTopology: true },
    //     () => {
    //         console.log('Connected to MongoDB');
    //     }
    // );
};

// let driverURL: string = process.env.DB_URL || ''

// console.log('********')

// mongoose.connect(driverURL);

// export {mongoose}