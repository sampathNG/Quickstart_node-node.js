// require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://kumar:passwords@cluster0.rshckri.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const con = mongoose.connection;

con.on("open", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("connected....DB");
});

if (con) {
  console.log("connected succesfull");
} else {
  console.log("not connected");
}
module.exports = con;

// [17:32] Akhil Yadav
// const mogoose = require("mongoose");
// const { DB_CON_STRING } = process.env;
// module.exports = () => { mogoose.connect("mongodb+srv://kumar:passwords@cluster0.rshckri.mongodb.net/?retryWrites=true&w=majority")  mogoose.connect("").then(() => console.log("DB Connection Successfull")).catch((err) => console.log(err.message));};

// module.exports = () => {
//   mogoose
//     .connect(
//       "mongodb+srv://kumar:passwords@cluster0.rshckri.mongodb.net/?retryWrites=true&w=majority"
//     )
//     .then(() => console.log("DB Connection Successfull"))
//     .catch((err) => console.log(err.message));
// };
// module.exports = () => {mogoose.connect("mongodb://localhost/ecommerce")  mogoose    .connect(      ""    )    .then(() => console.log("DB Connection Successfull"))    .catch((err) => console.log(err.message));};
