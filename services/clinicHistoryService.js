const clinicHistoryRepository = require('../repositories/clinicHistoryRepository');

exports.createHistoryClinic = async (history) => {
  try {
    return await clinicHistoryRepository.createHistoryClinic(history);
  } catch (error) {
    throw new Error(error.message);
  }
};
