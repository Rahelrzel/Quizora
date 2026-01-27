const prisma = require("../config/prisma");
const HttpError = require("../utils/HttpError");
const PDFDocument = require("pdfkit");

// @desc    Get user certificates
// @route   GET /api/certificates
// @access  Private
const getMyCertificates = async (req, res, next) => {
  try {
    const certificates = await prisma.certificate.findMany({
      where: { userId: req.user.id },
      include: {
        category: { select: { name: true } },
        quiz: { select: { title: true } },
      },
    });
    res.json(certificates);
  } catch (error) {
    next(error);
  }
};

// @desc    Get certificate by ID
// @route   GET /api/certificates/:id
// @access  Public
const getCertificateById = async (req, res, next) => {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { certificateID: req.params.id }, // Note: using unique certificateID string
      include: {
        user: { select: { name: true } },
        category: { select: { name: true } },
        quiz: { select: { title: true } },
      },
    });

    if (!certificate) {
      return next(
        new HttpError({ status: 404, message: "Certificate not found" }),
      );
    }
    res.json(certificate);
  } catch (error) {
    next(error);
  }
};

// @desc    Download certificate PDF
// @route   GET /api/certificates/:id/download
// @access  Public
const downloadCertificate = async (req, res, next) => {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { certificateID: req.params.id },
      include: {
        user: { select: { name: true } },
        category: { select: { name: true } },
        quiz: { select: { title: true } },
      },
    });

    if (!certificate) {
      return next(
        new HttpError({ status: 404, message: "Certificate not found" }),
      );
    }

    const doc = new PDFDocument({
      layout: "landscape",
      size: "A4",
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=certificate-${certificate.certificateID}.pdf`,
    );

    doc.pipe(res);

    // Simple Certificate Design
    doc
      .rect(50, 50, doc.page.width - 100, doc.page.height - 100)
      .strokeColor("#4A90E2")
      .lineWidth(10)
      .stroke();

    doc
      .fontSize(40)
      .fillColor("#333")
      .text("CERTIFICATE OF COMPLETION", 100, 150, { align: "center" });

    doc
      .fontSize(20)
      .text(`This is to certify that`, 100, 220, { align: "center" });

    doc.fontSize(30).fillColor("#000").text(certificate.user.name, 100, 260, {
      align: "center",
      underline: true,
    });

    doc
      .fontSize(20)
      .fillColor("#333")
      .text(`has successfully completed the quiz`, 100, 320, {
        align: "center",
      });

    doc
      .fontSize(25)
      .fillColor("#000")
      .text(certificate.quiz.title, 100, 360, { align: "center" });

    doc
      .fontSize(15)
      .fillColor("#666")
      .text(`Category: ${certificate.category.name}`, 100, 420, {
        align: "center",
      });

    doc
      .fontSize(15)
      .text(`Score: ${certificate.score}%`, 100, 440, { align: "center" });

    doc
      .fontSize(12)
      .text(`Issue Date: ${certificate.issueDate.toDateString()}`, 100, 480, {
        align: "center",
      });

    doc
      .fontSize(12)
      .text(`Certificate ID: ${certificate.certificateID}`, 100, 500, {
        align: "center",
      });

    doc.end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMyCertificates,
  getCertificateById,
  downloadCertificate,
};
