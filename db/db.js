import {connect} from "mongoose";

export const connectDB = async (url) => {
  try {
    await connect(url)
    console.log('Connected to Database');
  } catch (e) {
    console.log(e);
  }
}