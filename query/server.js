var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var sql = require("mssql");
var bodyParser = require("body-parser");


//Initiallising connection string
var dbConfig = {
    user:  "userDevDB1",
    password: "",
    server: "localhost",
    database: "AdventureWorks2017"
};

var schema = buildSchema(`
	type Query {
	getProducts(ProductNumber: Boolean, Color: Boolean, SafetyStockLevel: Boolean, ReorderPoint: Boolean, StandardCost: Boolean, ListPrice: Boolean,
				Size: Boolean, SizeUnitMeasureCode: Boolean, Weight: Boolean, WeightUnitMeasureCode: Boolean, SellStartDate: Boolean,
				SellEndDate: Boolean, DiscontinuedDate: Boolean, ReviewerName: Boolean, ReviewDate: Boolean, EmailAddress: Boolean, Rating: Boolean,
				Comments: Boolean, SubcategoryName: Boolean, CategoryName: Boolean, Filtro: String): String
}
`);

var root = {
	getProducts: ({ProductNumber, Color, SafetyStockLevel, ReorderPoint, StandardCost, ListPrice, Size, SizeUnitMeasureCode, Weight,
					WeightUnitMeasureCode, SellStartDate, SellEndDate, DiscontinuedDate, ReviewerName, ReviewDate, EmailAddress, Rating, Comments,
					SubcategoryName, CategoryName, Filtro}) => {
		var datos = '';
		if (ProductNumber) datos += ', P.ProductNumber';
		if (Color) datos += ', P.Color';
		if (SafetyStockLevel) datos += ', P.SafetyStockLevel';
		if (ReorderPoint) datos += ', P.ReorderPoint';
		if (StandardCost) datos += ', P.StandardCost';
		if (ListPrice) datos += ', P.ListPrice';
		if (Size) datos += ', P.Size';
		if (SizeUnitMeasureCode) datos += ', P.SizeUnitMeasureCode';
		if (Weight) datos += ', P.Weight';
		if (WeightUnitMeasureCode) datos += ', P.WeightUnitMeasureCode';
		if (SellStartDate) datos += ', P.SellStartDate';
		if (SellEndDate) datos += ', P.SellEndDate';
		if (DiscontinuedDate) datos += ', P.DiscontinuedDate';
		if (ReviewerName) datos += ', PR.ReviewerName';
		if (ReviewDate) datos += ', PR.ReviewDate';
		if (EmailAddress) datos += ', PR.EmailAddress as ReviewerEmailAddress';
		if (Rating) datos += ', PR.Rating';
		if (Comments) datos += ', PR.Comments as ReviewComments';
		if (SubcategoryName) datos += ', PSC.Name as SubcategoryName';
		if (CategoryName) datos += ', PC.Name as CategoryName';
		
		//var query = "exec ConsultarProductos @Datos = " + datos + ", @Filtro = " + Filtro;
		
		sql.connect(dbConfig);
        const result = sql.query("exec ConsultarProductos @Datos = " + datos + ", @Filtro = " + Filtro);
        console.dir(result);
		/*
		sql.connect(dbConfig).then(pool => {
		// Query
			return pool.request()
				.query(query)
		}).then(result => {
			console.dir(result)
		}).catch(err => {
		  // ... error checks
		*/
	}
};

var app = express();

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
	//Enabling CORS 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
	next();
});

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http//localhost:4000/graphql');
