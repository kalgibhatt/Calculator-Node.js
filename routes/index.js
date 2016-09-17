var express = require('express');
/*
 * GET home page.
 */

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
		result = num1 + num2;
	}
	else if(operator === '-')
	{
		result = num1 - num2;
	}
	else if(operator === '×')
	{
		result = num1 * num2;
	}
	else if(operator === '÷')
	{
		result = num1 / num2;
	}
	res.render('index', { result: result });
};

