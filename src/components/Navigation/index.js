import "./style.css";
import Timer from "../Timer";

const Navigation = () => {
	return (
		<>
			<input type="checkbox" id="menu_control" />
			<div className="header">
				<div className="logo">
					<i className="fa-solid fa-shield-dog"></i>
				</div>
				<Timer />
			</div>
		</>
	);
};

export default Navigation;
