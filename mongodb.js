const dotenv = require('dotenv').config();

const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://nithilsheshan:541u8r4dxVOkdGnY@cluster0.gdp4gzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("DB connected");
})
.catch((error) => {
  console.error("DB failed to connect:", error);
});

const LogInSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: false
  }
});

const LogInCollection = mongoose.model("LogInCollection", LogInSchema);

module.exports = LogInCollection;
