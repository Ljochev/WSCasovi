const fs = require("fs");


const read = async (fileName) => {
return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) return reject(err);
        const parsedData = JSON.parse(data);
        return resolve(parsedData);
    });
});
}

const write = async (fileName, data) => {
    return new Promise((resolve, reject) => {
        const stringData = JSON.stringify(data)
        fs.writeFile(fileName, stringData, (err) => {
            if (err) return reject(err);
            return resolve();
        });
    });
    }

//     (async () => {
//  await write("cars.json", `
//     "make": "Toyota",
//     "model": "Camry",
//     "year": 2022,
//     "color": "Silver",
//     "mileage": 15000,
//     "price": 25000
//   `)

//     })();


module.exports = {
    read,
    write,
}