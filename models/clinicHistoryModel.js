// models/petModel.js

class ClinicHistory {
    constructor(veterinary, documentDoctor, nameDoctor, appoinmentDate, symptom, diagnosis, treatment, petHash) {
      this.veterinary = veterinary;
      this.documentDoctor = documentDoctor;
      this.nameDoctor = nameDoctor;
      this.appoinmentDate = appoinmentDate;
      this.symptom = symptom;
      this.diagnosis = diagnosis;
      this.treatment = treatment;
      this.petHash = petHash;
    }
}
  
module.exports = ClinicHistory;
  