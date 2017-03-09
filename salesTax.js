var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {};

  for(var i = 0; i < salesData.length; i++){
    var company = salesData[i];

  var sum = 0;
  for(var j = 0; j < company.sales.length; j++) {
    sum += company.sales[j];
  }
  var taxRate = taxRates[company.province];

  var totalTax = sum * taxRate;

  if (result[company.name]) {
    result[company.name].totalTaxes += totalTax;
    result[company.name].totalSales += sum;
  } else {
    result[company.name] = {totalSales: sum, totalTaxes: totalTax};
  }
  }
  console.log(result);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/