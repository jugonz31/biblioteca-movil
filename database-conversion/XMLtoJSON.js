var DOMParser = require('xmldom').DOMParser;
var parser = new DOMParser();
var document = parser.parseFromString('../database-xml/*.xml', 'text/xml');
// Load the module 
var to_json = require('xmljson').to_json;

// An XML string 
var xml = document;

to_json(xml, function (error, data) {

   // Format as a JSON string 
   console.log(JSON.stringify(data));
   // -> {"prop1":"val1","prop2":"val2","prop3":"val3"} 
});