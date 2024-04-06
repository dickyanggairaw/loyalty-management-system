const PDFDocument = require("pdfkit-table");
const fs = require('fs');

async function printPdf(data, name) {
  const doc = new PDFDocument({ margin: 30, size: 'A4' });

  const result = data.map(e => {
    const temp = []
    for (const key in e) {
      temp.push(e[key].toString())
    }
    return temp
  })
  doc.pipe(fs.createWriteStream(name));
    // table 
    const table = {
      title: "Loyalty Management System",
      headers: [ "Member No", "Name", "Transaction Date", "Reference Transaction", "Existing Poin", "Poin", "Balance Poin" ],
      rows: result,
    };
  await doc.table(table, { 
    width: 300,
  });
  doc.end();
} 

module.exports = {
  printPdf
}