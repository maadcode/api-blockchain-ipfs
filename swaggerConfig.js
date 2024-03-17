const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Blockchain de mascotas',
      version: '1.0.0',
      description: 'Una API para administrar historial clínico de mascotas con Ethereum Blockchain e IPFS.',
    },
  },
  apis: ['./routing/routes.js'], // Rutas que quieres documentar
};

const specs = swaggerJsdoc(options);

module.exports = specs;
