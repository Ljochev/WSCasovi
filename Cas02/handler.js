const {
    read,
    write,
} = require("./io");




const addCar = async (req, res) => {
    try {
const cars = await read("cars.json");
console.log(cars)
cars.push(req.body);
await write("cars.json", cars);
res.status(200).send("New car was created");
    }
    catch(err){
    console.log(err);
    res.status(500).send("Internal server error");
    }
}

const getAllCars = async (req, res) => {
    try {
        const cars = await read("cars.json");
        res.status(200).send(cars);
            }
            catch(err){
            console.log(err);
            res.status(500).send("Internal server error");
            }
}

const updateCar = async (req, res) => {
    try{
        let cars = await read("cars.json");
        //  const found = cars.find((car,i) => Number(req.params.index) === i );
         cars = cars.map((car, i) => {
            if(Number(req.params.index) === i) {
                return {
                    ...car,
                    ...req.body
                }
            }
            return car
         });
          await write("cars.json", cars);
          res.status(200).send("Car updated");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
        }
}

const deleteCar = async (req, res) => {
    try {
        let cars = await read("cars.json");
        cars = cars.filter((car, i) => Number(req.params.index) !== i );
        await write("cars.json", cars);
        res.status(200).send(cars);
            }
            catch(err){
            console.log(err);
            res.status(500).send("Internal server error");
            }
}



module.exports = {
    addCar,
    getAllCars,
    updateCar,
    deleteCar,

}