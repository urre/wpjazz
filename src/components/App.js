import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Artists from "./Artists";
import AOS from "aos";


class App extends Component {
	constructor(props, context) {
		super(props, context);
		AOS.init();
	}
	componentWillReceiveProps() {
		AOS.refresh();
	}
	render() {
		return (
			<div>
				<Header />
				<Artists />
				<Footer />
			</div>
		);
	}
}
export default App;
