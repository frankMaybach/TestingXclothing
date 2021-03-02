const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'xclothing',
    password: 'kokolet121',
    port: 5432,
})


// retrieve manafacturer data by ID
const getmanufacturer = (request, response) => {
    pool.query('SELECT * FROM manufacturer ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}
const getManufacturerById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM manufacturer WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

// create and add new manufacturer data
const createNewManufacturer = (request, response) => {
    const { name, email } = request.body;

    pool.query('INSERT INTO manufacturer (productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size)', [productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Succefully added with ID: ${result.insertId}`)
    })
}

// update or alter manufacturer data
const updatemanufacturer = (request, response) => {
    const id = parseInt(request.params.id)
    const { productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size } = request.body

    pool.query(
        'UPDATE users SET productID = $1, OrderNumber = $2, ProductName = $3,ManufacturerDate = $4, ExpiringDate =$5, SupplierDate= $6, Color = $7, Size = $8 WHERE id = $3',
        [productID, OrderNumber, ProductName, ManufactureDate, ExpiringDate, SupplierID, Color, Size],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    )
}

// delete manufacturer data 
const deleteManufacturer = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    })
}


// retrieve customer data by ID
const getCustomer = (request, response) => {
    pool.query('SELECT * FROM customer ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

// retrieve a single customer data by his or her ID
const getSingleCustomerById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM customer WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

// create or add new customer data
const createNewCustomer = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO customer ( CustomerID, FirstName,Lastname, EmailAddress, Country, CustomerAddress, OrderNumber)', [CustomerID, FirstName, Lastname, EmailAddress, Country, CustomerAddress, OrderNumber], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Succefully added new customer with ID: ${result.insertId}`);
    })
}

// update or alter customer data
const updateCustomer = (request, response) => {
    const id = parseInt(request.params.id);
    const { CustomerID, FirstName, Lastname, EmailAddress, Country, CustomerAddress, OrderNumber } = request.body

    pool.query(
        'UPDATE customer SET CustomerID = $1, Firstname = $2, Lastname = $3, EmailAddress= $4, Country =$5, CustomerAddress= $6, OrderNumber = $7 WHERE id = $8',
        [CustomerID, FirstName, Lastname, EmailAddress, Country, CustomerAddress, OrderNumber],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Customer modified with ID: ${id}`);
        }
    )
}

// delete customer data 
const deleteCustomer = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Customer deleted with ID: ${id}`);
    })
}
// retrieve data from orders
const getOrders = (request, response) => {
    pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}
// retrieve a single Orders data by his or her ID
const getSingleOrderById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

// create or add new orders data
const createNewOrders = (request, response) => {
    const { name, email } = request.body;

    pool.query('INSERT INTO orders ( OrderID, CustomerID, OrderNumber, OrderDate, RequiredDate, ShipperID)', [OrderID, CustomerID, OrderNumber, OrderDate, RequiredDate, ShipperID], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Succefully added with ID: ${result.insertId}`);
    })
}

// update or alter orders data
const updateOrders = (request, response) => {
    const id = parseInt(request.params.id);
    const { OrderID, CustomerID, OrderNumber, OrderDate, RequiredDate, ShipperID } = request.body;

    pool.query('UPDATE customer SET OrderID = $1, CustomerID = $2, OrderNumber = $3, OrderDate =$4, RequiredDate =$5, ShippingID= $6  WHERE id = $8',
        [OrderID, CustomerID, OrderNumber, OrderDate, RequiredDate, ShipperID],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`);
        }
    )
}

// delete orders data 
const deleteOrders = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`);
    })
}

// for exports
module.exports = {
    getmanufacturer,
    getManufacturerById,
    createNewManufacturer,
    updatemanufacturer,
    deleteManufacturer,


    getCustomer,
    getSingleCustomerById,
    createNewCustomer,
    updateCustomer,
    deleteCustomer

    
    getOrders,
    getSingleOrderById,
    createNewOrders,
    updateOrders,
    deleteOrders,
}





















