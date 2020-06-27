import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("app component matches its snapshot", () => {
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    const app = render(<App />);
    expect(app).toMatchSnapshot();
});
