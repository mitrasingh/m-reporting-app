import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
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
		<Container>
			<Col lg={{ span: 9, offset: 2 }} style={containerStyle}>
				<Card className="p-4">
					<Row>
						<Col>
							<div className="pb-4 text-center">
								<h6>Welcome to</h6>
								<h2 className="fw-bold text-primary">M-Reporting</h2>
							</div>
							<Form onSubmit={handleSubmit(onSubmit)} noValidate>
								<Form.Group className="mb-4">
									<Form.Label>Email</Form.Label>
									<Form.Control
										className="shadow-none fs-6"
										type="text"
										autoComplete="email"
										placeholder="Enter email"
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
									<p className="mt-2">{errors.email?.message}</p>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control
										className="shadow-none fs-6"
										type="password"
										placeholder="Enter password"
										{...register("password", {
											required: {
												value: true,
												message: "Password is required!",
											},
										})}
									/>
									<p className="mt-2">{errors.password?.message}</p>
								</Form.Group>
								<Row>
									<Col className="d-flex justify-content-center">
										<Button
											variant="primary"
											className="px-4 mt-2 fw-bold text-light fs-6"
											size="sm"
											type="submit"
										>
											Login
										</Button>
									</Col>
								</Row>
							</Form>
						</Col>
					</Row>
				</Card>
			</Col>
		</Container>
	);
};

export default Login;
