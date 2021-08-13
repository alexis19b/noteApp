const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB conectado: ${conect.connection.host}`);
  } catch (error) {
    console.error("Error: ${error.message}");
    process.exit();
  }
};

module.exports = connectDB;
