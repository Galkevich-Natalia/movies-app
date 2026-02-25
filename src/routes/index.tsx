import { Link, createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<div>
			<h1>Index</h1>
			<Link to="/about">About</Link>

			<div>
				<h2>Movie</h2>
				<ul>
					<li>
						<Link to="/movie">Popular</Link>
					</li>
					<li>
						<Link to="/movie/now-playing">Now Playing</Link>
					</li>
					<li>
						<Link to="/movie/upcoming">Upcoming</Link>
					</li>
					<li>
						<Link to="/movie/top-rated">Top Rated</Link>
					</li>
				</ul>
			</div>
			<div>
				<h2>TV Shows</h2>
				<ul>
					<li>
						<Link to="/tv">Popular</Link>
					</li>

					<li>
						<Link to="/tv/airing-today">Airing Today</Link>
					</li>
					<li>
						<Link to="/tv/on-the-air">On TV</Link>
					</li>
					<li>
						<Link to="/tv/top-rated">Top Rated</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
