const Api = require("claudia-api-builder"); // Require the Claudia API Builder module.
const api = new Api();                      // Create an instance of Claudia API Builder.

//  Define a route and a handler.
api.get("/pizzas", () => {                  // The get method receives two arguments: a route and a handler function. The Claudia API Builder anonymous handler function has one major difference compared with Express.js. In Express.js, you have both the response and the request as callback function arguments, but Claudia API Builder’s callback function has only the request. To send back the response, you just return the result.
    return [
        'Capricciosa',
        'Quattro Formaggi',
        'Napoletana',
        'Margherita'
    ]
})

module.exports = api                        // Export your Claudia API Builder instance.



// NOTES


// claudia create \    
//   --region eu-central-1 \    
//   --api-module api    

//   #1   Create and deploy a new Lambda function.
//   #2   Select the region where you want your function to be deployed.
//   #3   Tell Claudia that you are building an API and that your API’s entry point is api.js.

// If you have set up package.json run: npm run create


// # claudia saving configuration
// "url": "https://lpsyptq063.execute-api.eu-central-1.amazonaws.com/latest"