// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

type FormValues = {
	email: string;
	password: string;
};

const Login = () => {
	// Will be placed into a CSS file later on
	const containerStyle = {
		marginTop: "10rem",
		maxWidth: "650px",
	};

	// React Hook Form
	const form = useForm<FormValues>({ mode: "onBlur" });
	const { register, handleSubmit, formState } = form;
	const { errors } = formState;
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log("submitted");
		console.log(data.email, data.password);
		toast.success("You are logged in!");
	};

	return (
		<div className="container py-4" style={containerStyle}>
			<div className="row">
				<div className="col">
					<div className="pb-4 text-center">
						<h6>Welcome to</h6>
						<h2 className="fw-bold text-primary">M-Reporting</h2>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} noValidate>
						<div className="mb-4">
							<label className="form-label">Email</label>
							<input
								className="form-control"
								type="text"
								placeholder="Enter Email"
								{...register("email", {
									required: {
										value: true,
										message: "Email is required!",
									},
									pattern: {
										value: emailRegex,
										message: "Invalid email format!",
									},
								})}
							/>
							<div className="mt-2">{errors.email?.message}</div>
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input
								className="form-control"
								type="password"
								placeholder="Enter password"
								{...register("password", {
									required: {
										value: true,
										message: "Password is required!",
									},
								})}
							/>
							<div className="mt-2">{errors.password?.message}</div>
						</div>
						<div className="d-grid gap-2 d-md-flex justify-content-md-end">
							<button className="btn btn-primary btn-sm" type="submit">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
