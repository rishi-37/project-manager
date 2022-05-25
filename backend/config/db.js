import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://rishi:33MgqpJdVrqEFNKP@cluster0.mitu7.mongodb.net/?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
export default connectDb;
