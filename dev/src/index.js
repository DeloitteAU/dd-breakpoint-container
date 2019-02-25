import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserContainer } from 'dd-breakpoint-container';

class App extends React.Component {
	render() {
		return (
			<p>Lorem ipsum</p>
		);
	}
}

ReactDOM.render(
	<BrowserContainer>
		<App/>
	</BrowserContainer>,
	window.document.getElementById('app'),
);
