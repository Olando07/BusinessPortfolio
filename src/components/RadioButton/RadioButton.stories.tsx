import type { Meta, StoryObj } from "@storybook/react-vite";
import RadioButton from "./RadioButton";
import type { RadioButtonProps } from "./RadioButton.types";

const meta: Meta<typeof RadioButton> = {
    title: "Components/RadioButton",
    component: RadioButton,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        name: { control: "text" },
        value: { control: "text" },
        checked: { control: "boolean" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: "Option 1",
        name: "radio-group",
        value: "option1",
        checked: false,
        disabled: false,
    } as RadioButtonProps,
};

export const Checked: Story = {
    args: {
        label: "Selected Option",
        name: "radio-group",
        value: "option2",
        checked: true,
        disabled: false,
    } as RadioButtonProps,
};

export const Disabled: Story = {
    args: {
        label: "Disabled Option",
        name: "radio-group",
        value: "option3",
        checked: false,
        disabled: true,
    } as RadioButtonProps,
};

export const DisabledChecked: Story = {
    args: {
        label: "Disabled & Checked",
        name: "radio-group",
        value: "option4",
        checked: true,
        disabled: true,
    } as RadioButtonProps,
};
