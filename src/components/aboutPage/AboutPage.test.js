import expect from "expect";
import React from "react";
import TestUtils from "react-addons-test-utils";
import AboutPage from "./AboutPage";

function setup() {
	let renderer = TestUtils.createRenderer();
	renderer.render(<AboutPage/>);
	let output = renderer.getRenderOutput();
	return {renderer, output};
}

describe("AboutPage via react test utils", () => {
	it("render page with h2 tag", () => {
		const {output} = setup();
		console.log(output);
		expect(output.type).toBe("div")
	});
});
