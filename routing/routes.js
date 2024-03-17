const express = require('express');
const router = express.Router();
const historyClinicController = require('../controllers/historyClinicController');

/**
 * @swagger
 * /history:
 *   post:
 *     summary: Crea un nuevo historial clinico
 *     description: Crea un nuevo historial clinico con los datos proporcionados en el cuerpo de la solicitud
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               breed:
 *                 type: string
 *               age:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Historial clinico creado exitosamente
 *       500:
 *         description: Error interno del servidor
 */
router.post('/history', historyClinicController.createHistoryClinic);

module.exports = router;
