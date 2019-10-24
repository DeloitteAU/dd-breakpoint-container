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

				<div style={{ width: '85%', padding: '20px' }}>
					<BreakpointContainer className="test-bpc" debug>
						<div style={{ padding: '20px' }}>
							<p>Lorem ipsum container</p>
						</div>

						<Breakpoint q="m">
							<p>Conditional render at bpc 'm'+</p>
						</Breakpoint>

						<Breakpoint identifier="browser" q="m">
							<p>Conditional render at browser 'm'+</p>
						</Breakpoint>
					</BreakpointContainer>
				</div>

				<div style={{ width: '65%', padding: '20px' }}>
					<BreakpointContainer identifier="container-1" debug>
						<div style={{ width: '85%', padding: '20px' }}>
							<BreakpointContainer identifier="container-2" debug>
								<div style={{ padding: '20px' }}>
									<p>Lorem ipsum container</p>
								</div>

								<Breakpoint q="s">
									<p>Conditional render at bpc 's'+</p>
								</Breakpoint>
								<Breakpoint q="s" identifier="container-1">
									<p>Conditional render at ctnr 1 's'+</p>
								</Breakpoint>
								<Breakpoint q="s" identifier="browser">
									<p>Conditional render at browser 's'+</p>
								</Breakpoint>
							</BreakpointContainer>

							<Breakpoint q="m">
								<p>Conditional render at browser 'm'+</p>
							</Breakpoint>
						</div>
					</BreakpointContainer>
				</div>
			</div>
		</BrowserContainer>
	);
};

export default App;
