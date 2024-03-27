const petService = require('../services/petService');

exports.getPet = async (req, res) => {
  try {
    const { document } = req.query;
    const foundPet = await petService.getPet(document);
    return res.status(200).json(foundPet);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
