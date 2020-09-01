//dependencies
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));

// Sets up the Express app 
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// dbs
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

// Server starts listening 
app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}!`);
});