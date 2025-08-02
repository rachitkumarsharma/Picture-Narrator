require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/db/db");

// const dotenv = require("dotenv");
// dotenv.config();
// console.log(process.env.MONGO_URI);

connectDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
