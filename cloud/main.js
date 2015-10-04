require('cloud/app.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.initialize('AHcAYFoErNb4WjtezHKnL0WtPT83nv3iNtPMKSc5', 'PWzbh0RWIL0DiuADE6AXO3OWbi4gz6cX1NqyZTCB');