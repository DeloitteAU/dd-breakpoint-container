import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserContainer } from 'dd-breakpoint-container';

class App extends React.Component {
	render() {
		return <BrowserContainer debug />;
	}
}

ReactDOM.render(<App />, window.document.getElementById('app'));
