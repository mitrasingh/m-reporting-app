import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
	test("renders form properly", () => {
		render(<Login />);
		const emailInput = screen.getByText("Email");
		const passwordInput = screen.getByText("Password");
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
	});
});
