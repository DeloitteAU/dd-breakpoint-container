import React from 'react';
import {
	BreakpointContainer,
	BrowserContainer,
	Breakpoint,
} from 'dd-breakpoint-container';

import './App.scss';

const App: React.FC = () => {
	return (
		<BrowserContainer debug>
			<div className="App">
				<p>Lorem ipsum browser</p>

				<div style={{ width: '75%', padding: '20px' }}>
					<BreakpointContainer className="test-bpc" debug>
						<div style={{ padding: '20px' }}>
							<p>Lorem ipsum container</p>
						</div>

						<Breakpoint q="m">
							<p>Conditional render at bpc 'l'+</p>
						</Breakpoint>

						<Breakpoint identifier="browser" q="m">
							<p>Conditional render at browser 'm'+</p>
						</Breakpoint>
					</BreakpointContainer>

					<Breakpoint q="m">
						<p>Conditional render at browser 'm'+</p>
					</Breakpoint>
				</div>
			</div>
		</BrowserContainer>
	);
};

export default App;
