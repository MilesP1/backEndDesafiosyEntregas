const fecha = new Date();
const dia = fecha.getDate().toString().padStart(2, "0");
const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
const año = fecha.getFullYear();

const fechaFormatoDDMMYYYY = `${dia}/${mes}/${año}`;

console.log(fechaFormatoDDMMYYYY); // Salida: 16/02/2024

const path = "mi_path";

const file = require("fs")

file.writeFile(`${path}/fecha.txt`, fechaFormatoDDMMYYYY, (err) => {
    if (err) {
        console.error(err)
        return
    }
    file.readFile(`${path}/fecha.txt`, "utf-8", (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
})

// const fs = require("fs");

// function getDateTime() {
//     const now = new Date();
//     const date = now.toLocaleDateString();
//     const time = now.toLocaleTimeString();
//     return `${date} ${time}`;
//   }

// const filePath = './fecha-hora.txt';
// const dateTime = getDateTime();

// fs.writeFile(filePath, dateTime, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('La fecha y hora se ha escrito correctamente en el archivo.');
//   }
// });

// fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(`La fecha y hora leída del archivo es: ${data}`);
//     }
//   });