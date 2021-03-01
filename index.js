const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)



app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, () => {
    console.log(`App connected to the port> ${port}.`);
});

const db = require('./queries');

// retrieve date from manafacturer table
app.get('/manufacturer', db.getmanufacturer);

app.get('/manufacturer/:id', db.getSinglemanufacturerById)

// Add Data into manafacturer table
app.post('/manufacturer', db.createNewManufacturer);

// update or edit manufacturer table
app.put('/manufacturer/:id', db.updateUser);

// delete data from manufacturer table
app.delete('/manufacturer/:id', db.deleteManufacturer);


// Get or fetch Cloths data
app.get('/customer', db.getCustomer);

// retrieve customer table data by ID
app.get('/customer/:id', db.getSingleCustomerById);      

// Create Customer data
app.post('/customer', db.createNewCustomer);

// Update or Edit customer
app.put('/customer/:id', db.updateCustomer);

// Delete Customer data
app.delete('/customer/:id', db.deleteCustomer);


// Order Table

// Get or fetch Orders data
app.get('/orders', db.getOrders);

// Get or fetch Orders  (single) data by ID
app.get('/orders/:id', db.getSingleOrderById);      

// Add or insert Orders data
app.post('/orders', db.createNewOrder);

// Update or Edit Orders data
app.put('/orders/:id', db.updateOrder);

// Delete Orders data
app.delete('/orders/:id', db.deleteOrder);









