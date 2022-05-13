//Read a pdf file
//Output to console

const { PdfReader, Rule, displayValue, displayTable } = require('pdfreader');

new PdfReader().parseFileItems("statement.pdf", (err, item) => {
  if(err) console.log(err);
  else if(!item) console.warn("end of file");
  else if(item.text) console.log(item.text);
})
