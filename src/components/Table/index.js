import { useEffect, useState } from "react";
import "./style.css";

// props:
// theads => table heads
// data => table data
// results => used for table sorting
// setResults => used to change after sorting the table
const Table = (props) => {
	const no_data_icon = require("../../assets/noData.png");
	const [sort, setSorting] = useState({
		key: null,
		dir: null,
	});
	const [activeColumn, setActiveColumn] = useState("");
	const [toggle, setToggle] = useState(false);
	const [isNoData, setIsNoData] = useState(false);

	useEffect(() => {
		if (props.data.length === 0) {
			setIsNoData(true);
		}
	}, [props.data.length]);

	function sortColumn(column) {
		setActiveColumn(column);
		const newResults = [...props.results];
		let compareLesser = -1;
		let compareGreater = 1;
		let direction = "ASC";
		setToggle(false);
		if (sort && sort.key === column) {
			if (sort.dir === "DESC") {
				compareLesser = 1;
				compareGreater = -1;
				direction = "ASC";
				setToggle(true);
			} else {
				direction = "DESC";
				setToggle(false);
			}
		}
		setSorting({
			key: column,
			dir: direction,
		});
		newResults.sort((a, b) => {
			if (a[column] < b[column]) return compareLesser;
			if (a[column] > b[column]) return compareGreater;
			return 0;
		});
		props.setResults(newResults);
	}

	const THead = props.theads.map((item) => {
		return (
			<th key={item.value} onClick={() => sortColumn(item.value)}>
				{item.label}
				{activeColumn === item.value ? (toggle ? " ↓" : " ↑") : ""}
			</th>
		);
	});
	return (
		<>
			<div className="container">
				<table style={isNoData ? { display: "none" } : {}}>
					<thead>
						<tr>{THead}</tr>
					</thead>
					<tbody>{props.data}</tbody>
				</table>
				<div
					className="empty-block"
					style={isNoData ? { display: "flex" } : { display: "none" }}
				>
					<div className="empty-icon">
						<img src={no_data_icon} alt=""></img>
					</div>
					<div className="empty-text">No Data Found!</div>
				</div>
			</div>
			<div className="rwd-container">
				{props.rwd_data}
				<div
					className="empty-block"
					style={isNoData ? { display: "flex" } : { display: "none" }}
				>
					<div className="empty-icon">
						<img src={no_data_icon} alt=""></img>
					</div>
					<div className="empty-text">No Data Found!</div>
				</div>
			</div>
		</>
	);
};

export default Table;
