import { describe, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
	test("renders form properly", async () => {
		render(<Login />);
		// Get input fields
		const emailInput = screen.getByLabelText("Email");
		const passwordInput = screen.getByLabelText("Password");
		const submitButton = screen.getByRole("button", {
			name: /Login/i,
		});

		// Fill out form
		fireEvent.change(emailInput, { target: { value: "test@example.com" } });
		fireEvent.change(passwordInput, { target: { value: "password123" } });

		// Submit form
		fireEvent.click(submitButton);

		// Wait for validation and submission to complete
		await waitFor(() => {
			expect(emailInput).toHaveValue("test@example.com");
			expect(passwordInput).toHaveValue("password123");
		});
	});
	test("display error messages for invalid email and password", async () => {
		render(<Login />);
		// Get input fields
		const emailInput = screen.getByLabelText("Email");
		const passwordInput = screen.getByLabelText("Password");
		const submitButton = screen.getByRole("button", {
			name: /Login/i,
		});

		// Fill out the form with invalid data
		fireEvent.change(emailInput, { target: { value: "invalid-email" } });
		fireEvent.change(passwordInput, { target: { value: "" } });

		// Submit the form
		fireEvent.click(submitButton);

		// Wait for validation and error messages to appear
		await waitFor(() => {
			expect(screen.getByText("Invalid email format!")).toBeInTheDocument();
			expect(screen.getByText("Password is required!")).toBeInTheDocument();
		});
	});
});
