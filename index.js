#! /usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const dir = process.argv[2];

if (!dir)
  return printError(
    "Please enter project name, run: create-boilerplate-node <project-name>"
  );

fs.mkdirSync(dir, { recursive: true }, (err) => {});

fs.copy(path.join(__dirname, "jwt-mongoose-mvc"), dir)
  .then(() => console.log("Boilerplate generated succesfully!"))
  .catch((err) => console.error(err));  
