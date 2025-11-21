import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        css: true,
        include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
        exclude: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/.storybook/**",
            "**/*.stories.{ts,tsx,js,jsx}",
            "**/storybook-static/**",
        ],
    },
});
