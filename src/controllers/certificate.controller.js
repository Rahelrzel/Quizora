const Certificate = require("../models/Certificate");
const HttpError = require("../utils/HttpError");
const generateCertificatePDF = require("../utils/generateCertificatePDF");

// @desc    Get logged-in user's certificates
// @route   GET /api/certificates/my
// @access  Private
const getMyCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find({ userId: req.user._id })
      .populate("quizId", "title")
      .populate("categoryId", "name")
      .sort("-createdAt");
    res.json(certificates);
  } catch (error) {
    next(error);
  }
};

// @desc    Get certificate details
// @route   GET /api/certificates/:id
// @access  Private (Owner/Admin)
const getCertificateById = async (req, res, next) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
      .populate("quizId", "title")
      .populate("categoryId", "name")
      .populate("userId", "name");

    if (!certificate) {
      return next(new HttpError("Certificate not found", 404));
    }

    // Check ownership or admin
    if (
      certificate.userId._id.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return next(
        new HttpError("Not authorized to view this certificate", 403),
      );
    }

    res.json(certificate);
  } catch (error) {
    next(error);
  }
};

// @desc    Download certificate PDF
// @route   GET /api/certificates/:id/download
// @access  Private (Owner/Admin)
const downloadCertificate = async (req, res, next) => {
  try {
    const certificate = await Certificate.findById(req.params.id)
      .populate("quizId", "title")
      .populate("categoryId", "name")
      .populate("userId", "name");

    if (!certificate) {
      return next(new HttpError("Certificate not found", 404));
    }

    // Check ownership or admin
    if (
      certificate.userId._id.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return next(
        new HttpError("Not authorized to download this certificate", 403),
      );
    }

    const filename = `certificate-${certificate.certificateID}.pdf`;
    res.setHeader("Content-disposition", `attachment; filename=${filename}`);
    res.setHeader("Content-type", "application/pdf");

    const data = {
      userName: certificate.userId.name,
      quizTitle: certificate.quizId.title,
      categoryName: certificate.categoryId.name,
      score: certificate.score,
      issueDate: certificate.issueDate,
      certificateID: certificate.certificateID,
    };

    generateCertificatePDF(data, res);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMyCertificates,
  getCertificateById,
  downloadCertificate,
};
