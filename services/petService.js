const Pet = require('../models/petModel');

exports.getPet = async (document) => {
  try {
    // Implementar consulta a Ethereum
    const pet = new Pet(document)
    return await pet;
  } catch (error) {
    throw new Error(error.message);
  }
};
