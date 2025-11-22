import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders basic info section with name", () => {
    render(<App />);
    const linkElement = screen.getByText((content) =>
        content.includes("Olando"),
    );
    expect(linkElement).toBeInTheDocument();
});
