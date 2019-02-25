import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserContainer, BreakpointContainer } from 'dd-breakpoint-container';

class App extends React.Component {
	render() {
		return (
			<div style={{ padding: '20px' }}>
				<BreakpointContainer debug={true}>
					<p>Lorem ipsum</p>
					<div style={{ width: '50%', margin: '10px' }}>
						<BreakpointContainer debug={true}>
							<p>Lorem ipsum</p>
						</BreakpointContainer>
					</div>
				</BreakpointContainer>
			</div>
		);
	}
}

ReactDOM.render(
	<BrowserContainer>
		<App/>
	</BrowserContainer>,
	window.document.getElementById('app'),
);
