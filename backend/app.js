const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dataBaseConfig = require('./db');
const Template = require('./models/template');
const { createFile } = require('./createHtmlFile');


app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(dataBaseConfig, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to database!');
}).catch((err) => {
  console.log('Connection to database FAILED' + err)
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
  next()
})

// POST TEMPLATE TO DATABASE
app.post('/api/templates', (req, res, next) => {

  const template = new Template({
    name: req.body.name,
    sections: {
      html: req.body.sections.html,
      css: req.body.sections.css
    }
  });

  template.save()
    .then(() => {
      console.log(template);
      res.status(201).json({
        message: "Template was added sucessfully"
      });
      console.log("TEMPLATE WAS ADDED " + template);
    })
    .catch((err) => {
      res.status(400).json({
        message: "ERROR TEMPLATE WAS NOT ADDED",
      });
      console.log('ERROR TEMPLATE WAS NOT ADDED ' + err);
    })

})

// GET TEMPLATES FROM DATABASE
app.get('/api/templates', (req, res, next) => {
  Template.find((err, data) => {
    if (err) {
      console.log(err)
    } else if (data === null || !data) {
      res.status(404).send('Not found');
    } else {
      res.status(201).send(data);
    }
  })
})

// Download created file
app.post('/download', (req, res, next) => {
  if (req.body.htmlTitle) {
    const file = createFile(req.body);
    res.status(200).json({
      fileName: `${req.body.fileName}`,
      htmlFile: `${file}`
    });
  } else {
    res.status(400).json({
      message: "400:BAD REQUEST",
    });
    res.send('')
  }
})

module.exports = app;
