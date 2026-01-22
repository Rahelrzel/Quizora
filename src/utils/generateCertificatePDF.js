const PDFDocument = require("pdfkit");

/**
 * Generates a PDF certificate
 * @param {Object} data - Certificate data
 * @param {string} data.userName
 * @param {string} data.quizTitle
 * @param {string} data.categoryName
 * @param {number} data.score
 * @param {Date} data.issueDate
 * @param {string} data.certificateID
 * @param {Object} res - Express response object to pipe to
 */
const generateCertificatePDF = (data, res) => {
  const doc = new PDFDocument({ layout: "landscape", size: "A4" });

  // Pipe to response
  doc.pipe(res);

  // Background/Border (Optional - simple border for now)
  doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).stroke();

  // Header
  doc.fontSize(30).text("Certificate of Completion", { align: "center" });
  doc.moveDown();

  // Content
  doc.fontSize(20).text("This is to certify that", { align: "center" });
  doc.moveDown(0.5);
  doc
    .fontSize(25)
    .font("Helvetica-Bold")
    .text(data.userName, { align: "center" });

  doc.moveDown(0.5);
  doc
    .fontSize(20)
    .font("Helvetica")
    .text("has successfully passed the quiz", { align: "center" });
  doc.moveDown(0.5);
  doc
    .fontSize(25)
    .font("Helvetica-Bold")
    .text(data.quizTitle, { align: "center" });

  doc.moveDown(0.5);
  doc
    .fontSize(15)
    .font("Helvetica")
    .text(`Category: ${data.categoryName}`, { align: "center" });
  doc.moveDown(0.5);
  doc.text(`Score: ${data.score}%`, { align: "center" });

  doc.moveDown(1);
  doc.text(`Issued on: ${new Date(data.issueDate).toLocaleDateString()}`, {
    align: "center",
  });
  doc.text(`Certificate ID: ${data.certificateID}`, { align: "center" });

  // Footer / Signature (Placeholder)
  doc.moveDown(2);
  doc.fontSize(12).text("Quizora Platform", { align: "center" });

  doc.end();
};

module.exports = generateCertificatePDF;
