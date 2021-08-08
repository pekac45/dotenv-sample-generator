#! /usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

const envPath = argv.env || ".env"
const baselinePath = argv.sample || ".env-sample"

const splitLine = require("./lib/splitLine");

const fileStream = fs.createWriteStream(baselinePath);

const rl = readline.createInterface({
	input: fs.createReadStream(envPath),
	crlfDelay: Infinity,
});

rl.on("line", (line) => {
	if (line.length === 0) {
		fileStream.write("\n");
	} else {
		fileStream.write(splitLine(line) + "\n");
	}
});
