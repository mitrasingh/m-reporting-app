import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

type FormValues = {
	email: string;
	password: string;
};

const Login = () => {
	const mockUsers = [
		{ email: "mitra.coder@gmail.com", password: "mitch123" },
		{ email: "anthony@gmail.com", password: "anthony123" },
	];

	// Will be placed into a CSS file later on
	const containerStyle = {
		marginTop: "10rem",
		maxWidth: "650px",
	};

	// React Hook Form
	const form = useForm<FormValues>({ mode: "onBlur" });
	const { register, handleSubmit, reset, formState } = form;
	const { errors } = formState;
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		const user = mockUsers.find(
			(mockUser) =>
				mockUser.email === data.email && mockUser.password === data.password
		);
		if (user) {
			console.log(data.email, data.password);
			toast.success(`Welcome ${data.email}`);
		} else {
			toast.error("Sorry, credentials do not match!");
		}
		reset();
	};

	return (
		<div className="container p-4" style={containerStyle}>
			<div className="row">
				<div className="col">
					<div className="pb-4 text-center">
						<h6>Welcome to</h6>
						<h2 className="fw-bold text-primary">M-Reporting</h2>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} noValidate>
						<div className="mb-4">
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input
								className="form-control"
								id="email"
								type="email"
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
							<label className="form-label" htmlFor="password">
								Password
							</label>
							<input
								className="form-control"
								id="password"
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
