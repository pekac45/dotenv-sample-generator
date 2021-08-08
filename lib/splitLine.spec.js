const splitLine = require("./splitLine");

const testLine = "HELLO_WORLD=SECRET";
const testComment = "# COMMENT";

describe("generate()", () => {
	it("should parse a line", () => {
		const res = splitLine(testLine);

		expect(res).toEqual("HELLO_WORLD=");
	});

	it("should return unchanged line if no = was found", () => {
		const res = splitLine(testComment);

		expect(res).toEqual(testComment);
	});
});
