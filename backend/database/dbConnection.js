// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "MERN_JOB_SEEKING_WEBAPP",
//     })
//     .then(() => {
//       console.log("Connected to database.");
//     })
//     .catch((err) => {
//       console.log(`Some Error occured. ${err}`);
//     });
// };
import mongoose from "mongoose";
export const dbConnection = () =>{

mongoose.connect("mongodb://localhost:27017/MERN_JOB_SEEKING_WEBAPP").then(()=>console.log("connection successfull")).catch((err)=>{console.log(err)})
}
