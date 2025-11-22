import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders basic info section with college name", () => {
    render(<App />);
    const linkElement = screen.getByText((content) =>
        content.includes("Red River College"),
    );
    expect(linkElement).toBeInTheDocument();
});
