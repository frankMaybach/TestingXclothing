const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'xclothing',
    password: 'kokolet121',
    port: 5432,
})
client.connect()

client.query('SELECT * FROM nanufacturer')
    .then(function (results) {
        console.log("succefull");
        console.log(results.rowCount)
        client.end()
    })

    .catch(function (erro) {
        console.log("Not Connected");
        console.log(error);
        client.end();
    });

const getmanufacturerById = (request, response) => {
    const id = parseInt(request.params.id)

    client.query('SELECT * FROM manufacturer WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
// Add or Into into manufacturer
const createNewManufacturer = (request, response) => {
    const { productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size } = request.body
    client.query('INSERT INTO users (productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size) VALUES ($1, $2,$3,$4,$5,$6,$7,$8)', [productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}
// Update or Edit manufacturer table
const updatemanufacturer = (request, response) => {
    const id = parseInt(request.params.id);
    const { productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size } = request.body;

    pool.query(
        'UPDATE manufacturer SET productID = $1, OrderNumber = $2, ProductName = $3', 'ManufactureDate', 'ExpiringDate', 'SupplierID', 'Color', 'Size')
    [productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json({ status: 'success', message: `Manufacturer with id ${id} was modified successfully` });
        };
}


// delete manafacture data
const deleteManufacturer = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM manufacturers WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Manufacturer with id ${id} has been deleted`});
    })
}

// Get or fetch Cloths data
const getCloths = (request, response) => {
    pool.query('SELECT * FROM cloths ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results.rows);
    })
}

// to retrieve single data by ID from Customer
const getSingleCustomerById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM customer WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results.rows);
    })
}

// To insert into Customers
const createNewCustomer = (request, response) => {
    const { CustomerID, FirstName,Lastname, EmailAddress, Country, CustomerAddress, OrderNumber } = request.body;

    pool.query('INSERT INTO customer (CustomerID, FirstName, Lastname, Country, CustomerAddress, OrderNumber) VALUES ($1, $2, $3, $4, $5, $6,$7)', [CustomerID, FirstName, Lastname, Country, CustomerAddress, OrderNumber], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(201).json({ 'status': 'exellent', 'id': results.insertId });
    })
}

// Update Customer data
const updateCustomer = (request, response) => {
    const id = parseInt(request.params.id);
    const { CustomerID, FirstName,Lastname, EmailAddress, Country, CustomerAddress, OrderNumber } = request.body;

    pool.query('UPDATE customer SET customerID = $1, firstNme = $2, lastName =$3, emailAddress = $4, country = $5, customerAddress = $6 WHERE orderNumber = $7', [CustomerID, FirstName, Lastname, Country, CustomerAddress, OrderNumber], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Customer with id ${id} was updated succefully` });
    })
}

// Delete Customer data
const deleteCustomer = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Cloth with id ${id} was deleted successfully`});
    })
}


// Get or fetch Orders data
const getOrders = (request, response) => {
    pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results.rows);
    })
}

// Get or fetch Orders  (single) data by ID
const getSingleOrderById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results.rows);
    })
}

// Add Order data
  const createNewOrders = (request, response) => {
    const {OrderID, CustomerID, OrderNumber, OrderDate, RequiredDate, ShipperID } = request.body;

    pool.query('INSERT INTO orders (OrderID,customerID, OrderNumber, OrderDate, RequiredDate,ShipperId) VALUES ($1, $2, $3, $4, $5, $6)', [OrderID,customerID, OrderNumber, OrderDate, RequiredDate,ShipperId], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(201).json({ 'status': 'success', 'id': results.insertId });
    })
}

// Update Orders data
const updateOrders = (request, response) => {
    const id = parseInt(request.params.id);
    const { order_date, cloth_id, quantity, customer_code } = request.body;

    pool.query('UPDATE orders SET OrderId = $1, CustomerID= $2, OrderNumber = $3, OrderDate = $4, RequiredDate=$5,ShipperId=$6 WHERE id = $6', [OrderID,customerID, OrderNumber, OrderDate, RequiredDate,ShipperId], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Order with id ${id} updated sucessfully` });
    })
}

// Delete Orders data
const deleteOrders = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json({ status: 'success', message: `Order with id ${id} was deleted successfully`});
    })
}










// export to index.js_ Manufacturer
module.exports = {
    
   // getmanufacturer,
   // getSingleManufacturerById,
    createNewManufacturer,
   // updateManufacturer,
    deleteManufacturer,

    //Customer
    getCustomer,
    getSingleCustomerById,
    createNewCustomer,
    updateCustomer,
    deleteCustomer,

    //Orders
    getOrders,
    getSingleOrderById,
    createNewOrder,
    updateOrder,
    deleteOrder,
}