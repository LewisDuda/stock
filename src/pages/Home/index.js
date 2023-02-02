import Header from "../../components/Navigation";
import Table from "../../components/Table";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import React, { useContext, useState, useEffect } from "react";
import Context from "../../Context";
import DatePicker from "react-datepicker";
import "./style.css";

async function sleep(ms = 0) {
	return new Promise((r) => setTimeout(r, ms));
}

async function fetchData(payload) {
	const { year, month, day, setResults, setIsLoading } = payload;

	setIsLoading(true);

	const res = await fetch(
		process.env.REACT_APP_API_ADDRESS +
			"/expectlist?year=" +
			year +
			"&month=" +
			month +
			"&day=" +
			day
	);

	const { data } = await res.json();
	setResults(data);
	await sleep(1500);
	setIsLoading(false);
}

const Home = () => {
	const { isOpenDate, startDate, setIsOpenDate, setStartDate, handleDate } =
		useContext(Context);
	const theads = [
		{ label: "", value: "space" },
		{ label: "股票代號", value: "code" },
		{ label: "公司名稱", value: "short" },
		{ label: "產業類別", value: "category" },
		{ label: "收盤價", value: "closePrice" },
		{ label: "漲跌幅", value: "upDowns" },
		{
			label: `本月營收
			對比上月營收`,
			value: "vsLastMonthIncGrade",
		},
		{
			label: `本月營收
			對比去年同月營收`,
			value: "lastYearThisMonthIncGrade",
		},
		{
			label: `今年累計營收
			對比去年累計營收`,
			value: "accumVsToPrePeriodGrade",
		},
	];
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const payload = {
			year: startDate.getFullYear(),
			month: startDate.getMonth() + 1,
			day: startDate.getDate(),
			setResults: setResults,
			setIsLoading: setIsLoading,
		};
		fetchData(payload);
	}, [startDate]);
	const data = results.map((item, itemIndex) => {
		item.isExpanded = false;
		let order = "even";

		if ((itemIndex + 1) % 2 !== 0) {
			order = "odd";
		}

		function handleExpanded(event) {
			let target = event.target;
			let parent = target.parentElement.classList;
			let exapnded_target;
			let expanded_icon;
			if (parent.value === "expand-icon") {
				// 取得祖父輩的下一個tr的classname
				exapnded_target =
					target.parentElement.parentElement.nextSibling.classList;
				expanded_icon = target.parentElement.parentElement.classList;
			} else {
				exapnded_target = target.parentElement.nextSibling.classList;
				expanded_icon = parent;
			}
			if (!item.isExpanded) {
				exapnded_target.add("expanded");
				expanded_icon.add("expanded");
				item.isExpanded = true;
			} else {
				exapnded_target.remove("expanded");
				expanded_icon.remove("expanded");
				item.isExpanded = false;
			}
		}

		return (
			<>
				<tr className={"item " + order} key={itemIndex}>
					<td className="expand-icon" onClick={handleExpanded}>
						<i className="fa-solid fa-chevron-right"></i>
					</td>
					<td>{item.code}</td>
					<td>{item.short}</td>
					<td>{item.category}</td>
					<td>{item.closePrice}</td>
					<td>{item.upDowns}</td>
					<td>{item.vsLastMonthIncGrade}</td>
					<td>{item.lastYearThisMonthIncGrade}</td>
					<td>{item.accumVsToPrePeriodGrade}</td>
				</tr>
				<tr className="item-expanded" key={itemIndex + "expanded"}>
					<td colSpan={9}>
						<div className="item-container">
							<div className="item-detail">
								<h3>成交股數</h3>
								<h4>{item.tradeShares}</h4>
							</div>
							<div className="item-detail">
								<h3>成交筆數</h3>
								<h4>{item.tradePieces}</h4>
							</div>
							<div className="item-detail">
								<h3>開盤價</h3>
								<h4>{item.openPrice}</h4>
							</div>
							<div className="item-detail">
								<h3>最高價</h3>
								<h4>{item.highPrice}</h4>
							</div>
							<div className="item-detail">
								<h3>最低價</h3>
								<h4>{item.lowPrice}</h4>
							</div>
							<div className="item-detail">
								<h3>可售股價</h3>
								<h4>{item.availablePrice}</h4>
							</div>
							<div className="item-detail">
								<h3>合理股價</h3>
								<h4>{item.reasonablePrice}</h4>
							</div>
							<div className="item-detail">
								<h3>可買股價</h3>
								<h4>{item.buyablePrice}</h4>
							</div>
							<div className="item-detail memo">
								<h3>備註</h3>
								<h4>{item.financialRemark}</h4>
							</div>
						</div>
					</td>
				</tr>
			</>
		);
	});

	const rwd_data = results.map((item, itemIndex) => {
		item.isExpanded = false;
		function handleExpanded(event) {
			var target = event.target;
			var parent = target.parentElement.classList;
			if (!item.isExpanded) {
				parent.add("expanded");
				item.isExpanded = true;
			} else {
				parent.remove("expanded");
				item.isExpanded = false;
			}
		}
		return (
			<div className="item-container" key={itemIndex}>
				<div className="item-title">
					<h3>{item.code}</h3>
					<h5>{item.short}</h5>
					<h5>{item.category}</h5>
				</div>
				<div className="item-detail">
					<h3>收盤價</h3>
					<h4>{item.closePrice}</h4>
				</div>
				<div className="item-detail">
					<h3>漲跌幅</h3>
					<h4>{item.upDowns}</h4>
				</div>
				<div className="item-detail inline">
					<h3>本月營收對比上月營收</h3>
					<h4>{item.vsLastMonthIncGrade}</h4>
				</div>
				<div className="item-detail inline">
					<h3>本月營收對比去年同月營收</h3>
					<h4>{item.lastYearThisMonthIncGrade}</h4>
				</div>
				<div className="item-detail inline">
					<h3>今年累計營收對比去年累計營收</h3>
					<h4>{item.accumVsToPrePeriodGrade}</h4>
				</div>
				<div className="expanded-range">
					<div className="item-detail">
						<h3>成交股數</h3>
						<h4>{item.tradeShares}</h4>
					</div>
					<div className="item-detail">
						<h3>成交筆數</h3>
						<h4>{item.tradePieces}</h4>
					</div>
					<div className="item-detail">
						<h3>開盤價</h3>
						<h4>{item.openPrice}</h4>
					</div>
					<div className="item-detail">
						<h3>最高價</h3>
						<h4>{item.highPrice}</h4>
					</div>
					<div className="item-detail">
						<h3>最低價</h3>
						<h4>{item.lowPrice}</h4>
					</div>
					<div className="item-detail">
						<h3>可售股價</h3>
						<h4>{item.availablePrice}</h4>
					</div>
					<div className="item-detail">
						<h3>合理股價</h3>
						<h4>{item.reasonablePrice}</h4>
					</div>
					<div className="item-detail">
						<h3>可買股價</h3>
						<h4>{item.buyablePrice}</h4>
					</div>
					<div className="item-detail memo">
						<h3>備註</h3>
						<h4>{item.financialRemark}</h4>
					</div>
				</div>
				<div className="expand-button" onClick={handleExpanded}>
					<i className="fa-solid fa-chevron-down"></i>
				</div>
			</div>
		);
	});

	const handleChangeDate = (e) => {
		setIsOpenDate(!isOpenDate);
		setStartDate(e);
	};

	return (
		<>
			<div className="home">
				<Header />
				{isOpenDate && (
					<DatePicker
						selected={startDate}
						onChange={handleChangeDate}
						inline
					/>
				)}
				<div
					className={isOpenDate ? "blur show" : "blur off"}
					onClick={handleDate}
				></div>
				<div className="home-table">
					{isLoading && <Loading />}
					{!isLoading && (
						<Table
							theads={theads}
							data={data}
							rwd_data={rwd_data}
							results={results}
							setResults={setResults}
						/>
					)}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
