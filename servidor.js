const express = require("express");
const Pizza = require("./modelos/modeloPizza")
const app = express();
const bd = require("./bd");
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Server working" + port);
});

app.get("/getpizzas", (req, res) => {

});

const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port port')