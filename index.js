#! /usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const dir = process.argv[2];

if (!dir)
  return printError(
    "Please enter project name, run: create-boilerplate-node <project-name>"
  );

fs.mkdirSync(dir, { recursive: true }, (err) => {});

fs.copy(path.join(__dirname, process.argv[3]), dir)
  .then(() => console.log("Boilerplate generated succesfully!"))
  .catch((err) => {
    if (err.message.slice(0, 6) == "ENOENT") {
      console.log("Incorrect boilerplate type entered!");
    } else {
      console.error(err);
    }
  });
