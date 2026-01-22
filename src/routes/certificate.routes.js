const express = require("express");
const router = express.Router();
const {
  getMyCertificates,
  getCertificateById,
  downloadCertificate,
} = require("../controllers/certificate.controller");
const { protect } = require("../middlewares/auth.middleware");

router.get("/my", protect, getMyCertificates);
router.get("/:id", protect, getCertificateById);
router.get("/:id/download", protect, downloadCertificate);

module.exports = router;
