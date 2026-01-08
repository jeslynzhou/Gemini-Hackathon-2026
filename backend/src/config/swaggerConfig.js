const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gemini Hackathon 2026 API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001", // Matches your screenshot
      },
    ],
  },
  apis: [
    "./src/routes/*.js",   // For market.js, index.js
    "./src/docs/*.js",     // If you created a separate docs folder
    "./src/app.js"         // If you have health checks here
  ],
};

module.exports = swaggerJsDoc(options);