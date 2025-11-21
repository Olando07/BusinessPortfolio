import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RadioButton from "./RadioButton";
import { vi } from "vitest";

describe("RadioButton component", () => {
    test("renders and is visible", () => {
        render(<RadioButton label="Option 1" name="test" value="option1" />);
        const radio = screen.getByRole("radio");
        expect(radio).toBeVisible();
        expect(screen.getByText(/option 1/i)).toBeVisible();
    });

    test("is disabled when disabled prop is true", () => {
        render(
            <RadioButton
                label="Disabled Option"
                name="test"
                value="disabled"
                disabled
            />,
        );
        const radio = screen.getByRole("radio");
        expect(radio).toBeDisabled();
    });

    test("calls onChange when clicked", () => {
        const handleChange = vi.fn();
        render(
            <RadioButton
                label="Click Me"
                name="test"
                value="clickable"
                onChange={handleChange}
            />,
        );
        const radio = screen.getByRole("radio");
        fireEvent.click(radio);
        expect(handleChange).toHaveBeenCalledWith("clickable");
    });

    test("is checked when checked prop is true", () => {
        render(
            <RadioButton
                label="Checked Option"
                name="test"
                value="checked"
                checked
            />,
        );
        const radio = screen.getByRole("radio") as HTMLInputElement;
        expect(radio.checked).toBe(true);
    });
});
