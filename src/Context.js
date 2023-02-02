import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
	const [isOpenDate, setIsOpenDate] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [isLoading, setIsLoading] = useState(false);

	const handleDate = (e) => {
		e.preventDefault();
		setIsOpenDate(!isOpenDate);
	};

	const store = {
		isOpenDate,
		startDate,
		isLoading,
		setIsOpenDate,
		setStartDate,
		setIsLoading,
		handleDate,
	};
	return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default Context;
