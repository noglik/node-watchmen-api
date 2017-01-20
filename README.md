# node-watchmen-api
Module for watchmen API. Only for basic auth.

##Use
```javascript
var watchmen = new Watchmen("user", 'password', 'https://watchmenurl');

watchmen.getServices().then(function(res){})

watchmen.getService('id').then(function(res) {})

watchmen.addService(data).then(function(res) {})

watchmen.updateService( 'id', data).then(function(err,res) {})

watchmen.resetService('id').then(function(res){});

watchmen.deleteService('id').then(function(res){});

watchmen.reportService('id').then(function(res){});

watchmen.reportServices().then(function(res){});
```

##Data sample for addService and updateService
```json
"name": "name",
"url": "url",
"port": 80,
"interval": 60000,
"failureInterval": 30000,
"failuresToBeOutage": 1,
"timeout": 10000,
"warningThreshold": 5000,
"pingServiceName": "http-head",
"pingServiceOptions": {
    "http-head": {
        "statusCode": {
            "descr": "Expected status code (defaults to 200)",
            "required": false,
            "value": "200"
        }
    }
},
"restrictedTo": "",
"alertTo": "",
"id":"id"//for updateService
```
