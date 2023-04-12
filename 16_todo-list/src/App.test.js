import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";
import { expect } from "chai";
import App from "./App";

var jsdom = require("mocha-jsdom");
let rootContainer;

global.document = jsdom({
	url: "http://localhost:3000/"
});

beforeEach(() => {
	rootContainer = document.createElement("div");
	document.body.appendChild(rootContainer);
});

afterEach(() => {
	document.body.removeChild(rootContainer);
	rootContainer = null;
});

describe("App Component Testing", () => {
	it("When the 'pending' radio button is clicked, the 'pending' class should be added to the NoteList__note__title div", () => {
		act(() => {
			ReactDOM.render(<App />, rootContainer);
		});

		// Get the div with the class NoteList__note__title
		const div = rootContainer.querySelector(".NoteList__note__title");

		// Simulate user clicking on a the radio button
		const radio = rootContainer.querySelector('input[type="radio"][value="pending"]');
		fireEvent.click(radio);

		// Assert that the correct class is applied
		expect(div.classList[1]).to.equal("pending");
	});

	it("When the 'ongoing' radio button is clicked, the 'ongoing' class should be added to the NoteList__note__title div", () => {
		act(() => {
			ReactDOM.render(<App />, rootContainer);
		});

		// Get the div with the class NoteList__note__title
		const div = rootContainer.querySelector(".NoteList__note__title");

		// Simulate user clicking on a the radio button
		const radio = rootContainer.querySelector('input[type="radio"][value="ongoing"]');
		fireEvent.click(radio);

		// Assert that the correct class is applied
		expect(div.classList[1]).to.equal("ongoing");
	});

	it("When the 'completed' radio button is clicked, the 'completed' class should be added to the NoteList__note__title div", () => {
		act(() => {
			ReactDOM.render(<App />, rootContainer);
		});

		// Get the div with the class NoteList__note__title
		const div = rootContainer.querySelector(".NoteList__note__title");

		// Simulate user clicking on a the radio button
		const radio = rootContainer.querySelector('input[type="radio"][value="completed"]');
		fireEvent.click(radio);

		// Assert that the correct class is applied
		expect(div.classList[1]).to.equal("completed");
	});
});