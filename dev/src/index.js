import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserContainer } from 'dd-breakpoint-container';

// class App extends React.Component {
// 	render() {
// 		return (
// 				<BreakpointContainer debug={true}>

// 				</BreakpointContainer>
// 			</div>
// 		);
// 	}
// }

ReactDOM.render(
	<BrowserContainer debug />,
	window.document.getElementById('app'),
);
