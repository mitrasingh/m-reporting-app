import Toast from "react-bootstrap/Toast";

type CustomToastProps = {
	success: boolean;
	message: string;
};

const CustomToast = ({ success, message }: CustomToastProps) => {
	console.log(success);
	return (
		<div>
			<Toast>
				<Toast.Body>{message}</Toast.Body>
			</Toast>
		</div>
	);
};

export default CustomToast;
