import React, { useState } from "react";
import Icon from "./icon.jsx";
import Counter from "./counter.jsx";

const Home = () => {
	const [stop, setStop] = useState(0);
	const resetButton = () => {
		setStop(!stop);
	};

	return (
		<div className="home-class">
			<div className="home-class-3">
				<Icon copiesColor="red-flag" />
				<button className="button" onClick={resetButton}>
					Reset
				</button>
			</div>
			<div className="home-class-2">
				<Counter
					copiesColor="orange-flag"
					copiesContent={10000}
					stop={stop}
				/>
			</div>
			<div className="home-class-2">
				<Counter
					copiesColor="yellow-flag"
					copiesContent={1000}
					stop={stop}
				/>
				<Counter
					copiesColor="green-flag"
					copiesContent={100}
					stop={stop}
				/>
			</div>
			<div className="home-class-2">
				<Counter
					copiesColor="blue-flag"
					copiesContent={10}
					stop={stop}
				/>
				<Counter
					copiesColor="purple-flag"
					copiesContent={1}
					stop={stop}
				/>
			</div>
		</div>
	);
};

export default Home;
