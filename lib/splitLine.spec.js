const splitLine = require("./splitLine");

const testLine = "HELLO_WORLD=SECRET";

describe("generate()", () => {
	it("should parse a line", () => {
		const res = splitLine(testLine);

		expect(res).toEqual("HELLO_WORLD");
	});
});
