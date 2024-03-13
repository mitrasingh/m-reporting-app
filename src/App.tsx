import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<Container className="py-4">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Container>
	);
};

export default App;
