const express = require("express");

const {
    addCar,
    getAllCars,
    updateCar,
    deleteCar,
} = require("./handler");

const app = express();

app.use(express.json());


app.get("/cars", getAllCars);
app.post("/cars", addCar);
app.put("/cars/:index", updateCar)
app.delete("/cars/:index", deleteCar)

app.listen(3000, () => console.log("Server is on port 3000"))