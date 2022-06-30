import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './movie.css';

const Movie = ({id, coverImg, title, summary, genres}) => {
	return (
		<div className="card">
				<img src={coverImg}/>
				<h2>
					<Link to={`/movie/${id}`}>{title}</Link>
				</h2>
				<p>{summary.length > 255 ? `${summary.slice(0, 255)}...` : summary}</p>
				<ul className="jenre">
					{
						genres.map(g => (
							<li key={g}>{g}</li>
						))
					}
				</ul>
			</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;