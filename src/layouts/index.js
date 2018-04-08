import React from 'react';
import Link from 'gatsby-link';
import { Container } from 'react-responsive-grid';

import { rhythm, scale } from '../utils/typography';

class Template extends React.Component {
	render() {
		const { location, children } = this.props;

		let rootPath = `/`;
		if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
			rootPath = __PATH_PREFIX__ + `/`;
		}
		const styleHeader =
			location.pathname === rootPath
				? {
						...scale(1.5),
						marginBottom: rhythm(1.5),
						marginTop: 0
					}
				: {
						...scale(1.25),
						marginTop: 0,
						marginBottom: rhythm(1)
					};

		const header = (
			<h1 style={styleHeader}>
				<Link
					style={{
						boxShadow: 'none',
						textDecoration: 'none',
						color: 'inherit'
					}}
					to={'/'}
				>
					Les chroniques de Christopher
				</Link>
			</h1>
		);

		return (
			<Container
				style={{
					maxWidth: rhythm(24),
					padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
				}}
			>
				{header}
				{children()}
			</Container>
		);
	}
}

export default Template;
