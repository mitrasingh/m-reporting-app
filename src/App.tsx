import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default App;
