import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from './profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
          alignItems: 'center',
					marginBottom: rhythm(1)
				}}
			>
				<img
					src={profilePic}
					alt={`Kyle Mathews`}
					style={{
						marginRight: rhythm(1),
						marginBottom: 0,
						width: rhythm(2),
						height: rhythm(2),
						borderRadius: '50%'
					}}
				/>
				<p style={{ marginBottom: 0 }}>
					Écrit par <strong>Christopher Bellanger</strong> <br />Passioné par les lectures et les nouvelles
					technologie.
					<br />
					<a href="https://twitter.com/_cricrio_">Vous pouvez me suivre sur Twitter</a>
				</p>
			</div>
		);
	}
}

export default Bio;
