'use strict'

var request = require('request');
var Q = require('q'); 

function Watchmen( user, password, url){
	
	this.user = user; 
	this.password = password;
	this.url = url;

}

Watchmen.prototype.getServices = function(){

	var d = Q.defer();

	request.get( this.url + '/api/services', {}, function( err, res, body){

		if(err) d.reject(err);
		d.resolve(body);
		

	}).auth( this.user, this.password, false);

	return d.promise;
}

Watchmen.prototype.getService = function(serviceId){
	var d = Q.defer();

	request.get( this.url + '/api/services/' + serviceId, {}, function( err, res, body){

		if(err) d.reject(err);
		d.resolve(body);

	}).auth( this.user, this.password, false);

	return d.promise;
}

Watchmen.prototype.addService = function(data){
	var d = Q.defer();

	console.log(JSON.stringify(data));
	request.post({ url: this.url + '/api/services', body: data, json: true}, function( err, res, body){

		if(err) d.reject(err);
		d.resolve(body);

	}).auth( this.user, this.password, false);

	return d.promise;
}

Watchmen.prototype.deleteService = function(serviceId){
	var d = Q.defer();

	request.delete( this.url + '/api/services/' + serviceId, {}, function( err, res, body){

		if(err) d.reject();
		d.resolve(body);

	}).auth( this.user, this.password, false);

	return d.promise;
}

Watchmen.prototype.updateService = function( serviceId, data){
	var d = Q.defer();

	console.log(data)
	request.post( { url: this.url + '/api/services/' + serviceId, body: data, json: true}, function( err, res, body){

		if(err) d.reject(err);
		d.resolve(body);

	}).auth( this.user, this.password, false);

	return d.promise;
}

Watchmen.prototype.resetService = function(serviceId){
	var d = Q.defer();

	request.post( this.url + '/api/services/' + serviceId + '/reset', {}, function(err, res, body){

		if(err) d.reject(err);
		d.resolve(body);

	}).auth( this.user, this.password, false);

	return d.promise;
}

Watchmen.prototype.reportService = function(serviceId){
	var d = Q.defer();

	request.get( this.url + '/api/report/services/'+ serviceId, {}, function(err, res, body){

		if(err) d.reject(err);
		d.resolve(body);

	}).auth( this.user, this.password, false);

	return d.promise;
}


Watchmen.prototype.reportServices = function(){
	var d = Q.defer();

	request.get( this.url + '/api/report/services', {}, function(err,res,body){

		if(err) d.reject(err);
		d.resolve(body);

	}).auth( this.user, this.password, false);

	return d.promise;
}

module.exports = Watchmen;