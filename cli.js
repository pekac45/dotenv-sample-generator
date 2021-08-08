#! /usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const splitLine = require("./lib/splitLine");

const fileStream = fs.createWriteStream(".env-sample");

const rl = readline.createInterface({
	input: fs.createReadStream(".env"),
	crlfDelay: Infinity,
});

rl.on("line", (line) => {
	if (line.length === 0) {
		fileStream.write("\n");
	} else {
		fileStream.write(splitLine(line) + "\n");
	}
});
