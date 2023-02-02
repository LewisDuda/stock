import { useContext } from "react";
import "./style.css";
import Context from "../../Context";
import "react-datepicker/dist/react-datepicker.css";

const Timer = () => {
	const { startDate, setStartDate, handleDate } = useContext(Context);

	const handleSubDate = () => {
		setStartDate(
			new Date(
				startDate.getFullYear(),
				startDate.getMonth(),
				startDate.getDate() - 1
			)
		);
	};
	const handleAddDate = () => {
		setStartDate(
			new Date(
				startDate.getFullYear(),
				startDate.getMonth(),
				startDate.getDate() + 1
			)
		);
	};
	return (
		<>
			<div className="time">
				<i
					className="fa-solid fa-caret-left button"
					onClick={handleSubDate}
				></i>
				<div className="figure" onClick={handleDate}>
					<h1 className="year">{startDate.getFullYear()}</h1>
					<h1 className="month">{startDate.getMonth() + 1}</h1>
					<h1 className="date">{startDate.getDate()}</h1>
				</div>
				<i
					className="fa-solid fa-caret-right button"
					onClick={handleAddDate}
				></i>
			</div>
		</>
	);
};

export default Timer;
