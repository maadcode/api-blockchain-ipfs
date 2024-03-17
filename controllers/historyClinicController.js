const historyClinicService = require('../services/clinicHistoryService');
const HistoryClinic = require('../models/clinicHistoryModel');

exports.createHistoryClinic = async (req, res) => {
  try {
    const { veterinary, documentDoctor, nameDoctor, appoinmentDate, symptom, diagnosis, treatment, petHash } = req.body;
    const history = new HistoryClinic(veterinary, documentDoctor, nameDoctor, appoinmentDate, symptom, diagnosis, treatment, petHash);
    const createdHistoryClinic = await historyClinicService.createHistoryClinic(history);
    return res.status(201).json(createdHistoryClinic);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
