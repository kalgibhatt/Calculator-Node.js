var express = require('express');
var baseURL = "http://localhost:8080/CalculatorWebServices/services/CalculatorServices?wsdl";
var soap = require('soap');
var option = {
		ignoreNamespaces : true
}

exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};

exports.index = function(req,res) {
	var result;
	var num1;
	var num2;
	var operator;
	
	num1 = Number(req.param("val1"));
	num2 = Number(req.param("val2"));
	operator = req.param("operator");
	if(operator === '+')
	{
		soap.createClient(baseURL, option, function(err, client) {
			client.add({
				val1	:	num1,
				val2	:	num2
			},function(err,result) {
				if(err) {
					res.render('index', { result: "error" });
				} else {
					res.render('index', { result: result.addReturn });
				}
			})
		})
	}
	else if(operator === '-')
	{
		soap.createClient(baseURL, option, function(err, client) {
			client.subtract({
				val1	:	num1,
				val2	:	num2
			},function(err,result) {
				if(err) {
					res.render('index', { result: "error" });
				} else {
					res.render('index', { result: result.subtractReturn });
				}
			})
		})
	}
	else if(operator === '×')
	{
		soap.createClient(baseURL, option, function(err, client) {
			client.multiply({
				val1	:	num1,
				val2	:	num2
			},function(err,result) {
				if(err) {
					res.render('index', { result: "error" });
				} else {
					res.render('index', { result: result.multiplyReturn });
				}
			})
		})
	}
	else if(operator === '÷')
	{
		soap.createClient(baseURL, option, function(err, client) {
			client.divide({
				val1	:	num1,
				val2	:	num2
			},function(err,result) {
				if(err) {
					res.render('index', { result: "error" });
				} else {
					res.render('index', { result: result.divideReturn });
				}
			})
		})
	} else {
		res.render('index', { result: result });
	}
};

