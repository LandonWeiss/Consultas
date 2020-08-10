
---------			Posibles PRODUCTS			-----------

select * from Production.Product  

select * from Production.ProductReview   

select * from Production.UnitMeasure  

select * from Production.ProductPhoto    

select * from Production.ProductSubcategory   

select * from Production.ProductCategory   

---------			Posibles SALES			-----------

select * from Sales.SalesTerritory

select * from Sales.SalesReason

select * from Sales.SalesOrderDetail

select * from Sales.SalesOrderHeader

select * from Sales.SpecialOffer



---------			Posibles Providers		-----------

Select * from Purchasing.PurchaseOrderDetail 

Select * from Purchasing.PurchaseOrderHeader  

select * from Purchasing.Vendor

select * from Person.Person


---------			Posibles Vendedores		-----------

select *
from Sales.SalesPerson
inner join HumanResources.Employee on Sales.SalesPerson.BusinessEntityID = HumanResources.Employee.BusinessEntityID
inner join Person.Person on Sales.SalesPerson.BusinessEntityID = Person.Person.BusinessEntityID

select * from HumanResources.Employee

select * from Sales.SalesPerson

select * from Person.Person

select * from Sales.SalesTerritory 

---------			Posibles clientes		-----------

select * from Sales.SalesOrderHeader

select * from Sales.Store 

select * from Production.Product 

select * from Sales.Customer 

