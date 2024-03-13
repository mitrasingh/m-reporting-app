import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const Login = () => {
	// Will be placed into a CSS file later on
	const containerStyle = {
		marginTop: "10rem",
		maxWidth: "650px",
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
							<Form>
								<Form.Group className="mb-4">
									<Form.Label>Email</Form.Label>
									<Form.Control></Form.Control>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control></Form.Control>
								</Form.Group>
							</Form>
							<Row>
								<Col className="d-flex justify-content-end">
									<Button variant="secondary">Register</Button>
									<Button variant="primary" className="ms-2">
										Login
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Card>
			</Col>
		</Container>
	);
};

export default Login;
