import react from "react";
import "./error-indicator.css";
import icon from "./img_5f48b7ec98d68.jpeg";
const ErrorIndicator = () => {
	const ErrorImage = {
		width: "200px",
		height: "100px",
		objectFit: "cover",
	};

	return (
		<div className="error-indicator">
			<img src={icon} alt="" style={ErrorImage} />
			<span className="boom">BOOM!</span>
			<span>something has gone terribly wrong</span>
			<span>(but we already sent droids to fix it)</span>
		</div>
	);
};

export default ErrorIndicator;
