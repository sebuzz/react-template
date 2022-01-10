import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Hello Home</h1>
			<nav>
				{Array.from({ length: 6 }, (_, index) => index + 1).map((page) => {
					if (page === 2) {
						return (
							<Fragment key={page}>
								<div>
									<Link to={`/exercises/${page}`}>Exercise {page}</Link> (
									<Link to={`/solutions/${page}`}>Solution</Link> )
								</div>
								<div>
									<Link to={`/exercises/${page}_5`}>Exercise {page + 0.5}</Link> (
									<Link to={`/solutions/${page}_5`}>Solution</Link> )
								</div>
								<div>
									<Link to={`/exercises/${page}_6`}>Exercise {page + 0.6}</Link> (
									<Link to={`/solutions/${page}_6`}>Solution</Link> )
								</div>
							</Fragment>
						);
					}
					return (
						<div key={page}>
							<Link to={`/exercises/${page}`}>Exercise {page}</Link> (
							<Link to={`/solutions/${page}`}>Solution</Link> )
						</div>
					);
				})}
				<Link to={`/card-grid/`}>Card Grid</Link>
			</nav>
		</div>
	);
};

export default Home;
