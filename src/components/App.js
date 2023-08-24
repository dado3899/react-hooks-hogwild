import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	console.log(hogs)
	return (
		<div className="App">
			<Nav />
		</div>
	);
}

export default App;
