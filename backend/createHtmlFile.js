const fs = require('fs');
const path = require('path');

module.exports.createFile = (requestBody) => {
  console.log(requestBody)

  const fileContent = `
    <!DOCTYPE HTML>
    <html lang="pl" xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Language" content="pl" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Description" content="${requestBody.htmlDesc}">
    <title>${requestBody.htmlTitle}</title>
    <style type="text/css">
      ${requestBody.htmlCss}
    </style>
    </head>
      <body>
      ${requestBody.htmlBody}
      </body>
    </html>
  `;
  return fileContent;
};
