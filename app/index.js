    let fs = require('fs'),
    PDFParser = require("pdf2json");
 
    let pdfParser = new PDFParser();
 
    pdfParser.on("pdfParser_dataReady", pdfData => {
        fs.writeFile("./pdf2json/test/meow.json", JSON.stringify(pdfData));
    });
 
    pdfParser.loadPDF("./meow.pdf");