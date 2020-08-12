--Procedimiento que recibe los nombres de columnas separados por [,] para consultarlos de la base de datos
create procedure ConsultarProductos
	@Datos nvarchar (200),
	@Filtro nvarchar (100)
as
begin
	declare @FiltroBusqueda varchar (102)
	set @FiltroBusqueda = concat('%', @Filtro, '%')

	declare @Consulta nvarchar(500)
	set @Consulta = N'
		select
			P.ProductID, P.Name' + @Datos + N'
		from
			Production.Product P full join Production.ProductReview PR
			on P.ProductID = PR.ProductID
			full join Production.ProductSubcategory PSC
			on P.ProductSubcategoryID = PSC.ProductSubcategoryID
			full join Production.ProductCategory PC
			on PSC.ProductCategoryID = PC.ProductCategoryID
		where
			P.Name like @FiltroBusqueda'

	exec sp_executesql @query = @Consulta, @params = N'@FiltroBusqueda varchar (102)', @FiltroBusqueda = @FiltroBusqueda
end
go

--Consultar un solo producto con su ID
create procedure ConsultarProducto
	@Datos nvarchar (200),
	@ProductID int
as
begin
	declare @Consulta nvarchar(500)
	set @Consulta = N'
		select
			P.ProductID, P.Name' + @Datos + N'
		from
			Production.Product P full join Production.ProductReview PR
			on P.ProductID = PR.ProductID
			full join Production.ProductSubcategory PSC
			on P.ProductSubcategoryID = PSC.ProductSubcategoryID
			full join Production.ProductCategory PC
			on PSC.ProductCategoryID = PC.ProductCategoryID
		where
			P.ProductID = ' + convert(varchar(10), @ProductID)

	exec sp_executesql @query = @Consulta
end
go










--select * from Sales.SalesOrderHeader
--	SalesOrderID (mandatory)
--	OrderDate, DueDate, ShipDate, SalesOrderNumber, PurchaseOrderNumber, SubTotal, TaxAmt, Freight, TotalDue, Comment

--select * from Sales.SalesOrderDetail
--	OrderQty, UnitPrice, UnitPriceDiscount, LineTotal

--select * from Production.Product
--	Name

--select * from Sales.SalesReason
--	Name, ReasonType

--select * from Sales.SalesTerritory
--	Name, CountryRegionCode, Group

go

create procedure ConsultarVentas
	@Datos nvarchar (200)
as
begin
	declare @Consulta nvarchar(500)
	set @Consulta = N'
		select
			SOH.SalesOrderID' + @Datos + N'
		from
			Sales.SalesOrderHeader SOH full join Sales.SalesOrderDetail SOD
			on SOH.SalesOrderID = SOD.SalesOrderID
			full join Production.Product P
			on SOD.ProductID = P.ProductID
			full join Sales.SalesOrderHeaderSalesReason SOHSR
			on SOH.SalesOrderID = SOHSR.SalesOrderID
			full join Sales.SalesReason SR
			on SOHSR.SalesReasonID = SR.SalesReasonID
			full join Sales.SalesTerritory ST
			on SOH.TerritoryID = ST.TerritoryID'

	exec sp_executesql @query = @Consulta
end
go

create procedure ConsultarVenta
	@Datos nvarchar (200),
	@SalesOrderID int
as
begin
	declare @Consulta nvarchar(500)
	set @Consulta = N'
		select
			SOH.SalesOrderID' + @Datos + N'
		from
			Sales.SalesOrderHeader SOH full join Sales.SalesOrderDetail SOD
			on SOH.SalesOrderID = SOD.SalesOrderID
			full join Production.Product P
			on SOD.ProductID = P.ProductID
			full join Sales.SalesOrderHeaderSalesReason SOHSR
			on SOH.SalesOrderID = SOHSR.SalesOrderID
			full join Sales.SalesReason SR
			on SOHSR.SalesReasonID = SR.SalesReasonID
			full join Sales.SalesTerritory ST
			on SOH.TerritoryID = ST.TerritoryID
		where
			SOH.SalesOrderID = ' + @SalesOrderID

	exec sp_executesql @query = @Consulta
end
go













--select * from Purchasing.Vendor
--	BusinessEntityID (mandatory)
--	Name, CreditRating, PreferredVendorStatus, PurchasingWebServiceURL

--select * from Person.Person
--	FirstName, MiddleName, LastName

--select * from Purchasing.PurchaseOrderHeader
--	PurchaseOrderID, OrderDare, ShipDate, SubTotal, TaxAmt, Freight, TotalDue

--select * from Purchasing.PurchaseOrderDetail
--	OrderQty, UnitPrice, LineTotal, ReceivedQty, RejectedQty, StockedQty

--select * from Production.Product
--	Name
--go

--create procedure ConsultarProveedores
--	@Datos nvarchar (200),
--	@Filtro nvarchar (100)
--as
--begin
--	declare @FiltroBusqueda varchar (102)
--	set @FiltroBusqueda = concat('%', @Filtro, '%')
--
--	declare @Consulta nvarchar(500)
--	set @Consulta = N'
--		select
--			SOH.SalesOrderID' + @Datos + N'
--		from
--			Sales.SalesOrderHeader SOH full join Sales.SalesOrderDetail SOD
--			on SOH.SalesOrderID = SOD.SalesOrderID
--			full join Production.Product P
--			on SOD.ProductID = P.ProductID
--			full join Sales.SalesOrderHeaderSalesReason SOHSR
--			on SOH.SalesOrderID = SOHSR.SalesOrderID
--			full join Sales.SalesReason SR
--			on SOHSR.SalesReasonID = SR.SalesReasonID
--			full join Sales.SalesTerritory ST
--			on SOH.TerritoryID = ST.TerritoryID
--		where
--			P.Name like @FiltroBusqueda'
--
--	exec sp_executesql @query = @Consulta, @params = N'@FiltroBusqueda varchar (102)', @FiltroBusqueda = @FiltroBusqueda
--end
--go


