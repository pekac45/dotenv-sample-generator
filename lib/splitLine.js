const splitLine = (line) => {
	const res = line.split("=")[0];

	return res;
};

module.exports = splitLine;
