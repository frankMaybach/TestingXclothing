const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 4000
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)




app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});


const db = require('./queries');
// retrieve,Insert, update and delete from manufacturer data
app.get('/manufacturer', db.getManufacturer);
app.get('/manufacturer/:id', db.getManufacturerById);
app.post('/manufacturer', db.createManufacturer);
app.put('/manufacturer/:id', db.updateManufacturer);
app.delete('/manufacturer/:id', db.deleteManufacturer);


// retrieve, insert, update and delete from Orders data
app.get('/orders', db.getManufacturer);
app.get('/orders/:id', db.getManufacturerById);
app.post('/orders', db.createManufacturer);
app.put('/orders/:id', db.updateManufacturer);
app.delete('/orders/:id', db.deleteManufacturer);

// retrieve, insert, update and delete from customer data
app.get('/customer', db.getManufacturer);
app.get('/customer/:id', db.getManufacturerById);
app.post('/customer', db.createManufacturer);
app.put('/customer/:id', db.updateManufacturer);
app.delete('/customer/:id', db.deleteManufacturer);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  })





