CREATE DATABASE xclothing;


CREATE TABLE manufacturer (
  productID  VARCHAR(30),
  OrderNumber VARCHAR (30),
  ProductName VARCHAR(30),
  ManufactureDate VARCHAR(30),
  ExpiringDate VARCHAR(30),
  SupplierID VARCHAR(30),
  Color VARCHAR(30),
  Size VARCHAR(30)
);

  SELECT * FROM manufacturer;


  INSERT INTO manufacturer (ProductId,Ordernumber, Productname, Manufacturedate, ExpiringDate, SupplierID,Color,
  Size) VALUES ('2222','0002','Gucci Shoes','2009','2022','Ath102','Red','Large');



    
CREATE TABLE orders (
  OrderID  VARCHAR(30),
  CustomerID VARCHAR (30),
  OrderNumber VARCHAR(30),
  OrderDate VARCHAR(40),
  RequiredDate VARCHAR(39),
  ShipperID VARCHAR(30)
  
);



CREATE TABLE customer (
  CustomerID  VARCHAR(30),
  FirstName VARCHAR (30),
  LastName VARCHAR(30),
  EmailAddress VARCHAR(40),
  Country VARCHAR(39),
  CustomerAddress VARCHAR(30),
  OrderNumber VARCHAR(30)
  
  
);











  