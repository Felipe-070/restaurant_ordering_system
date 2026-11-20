import {existsSync} from "node:fs";
import { loadEnvFile } from "node:process";
import { defineConfig } from "vitest/config";

if (existsSync(".env")) {
    loadEnvFile(".env");
}

export default defineConfig({
    test: {
        include: ["src/**/*.test.ts"],

        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            include: ["src/model/**/*.ts"]
        }
    }
})