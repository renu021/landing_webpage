import LeoImg from "../Assets/leo.avif";
import chandramukhiImg from "../Assets/chandramukhi.avif";
import demonImg from "../Assets/demon.avif";
import jailerImg from "../Assets/jailer.avif";
import nunImg from "../Assets/nun.avif";
import MarkImg from "../Assets/Mark.avif";
import jawanImg from "../Assets/jawan.avif";

import "../components/MovieStyle.css";

const Movies = () => {
  return (
    <div className="container">
      <h1>Recommended Movies</h1>
      <div className="movies-content">
        <div className="movieImg">
          <img src={chandramukhiImg} alt="chandramukhi Movie Poster" />
          <div className="post-text">
            <h2>Chandramukhi</h2>
          </div>
        </div>

        <div className="movieImg">
          <img src={demonImg} alt="demon Movie Poster" />
          <div className="post-text">
            <h2>Demon</h2>
          </div>
        </div>

        <div className="movieImg">
          <img src={jailerImg} alt="jailer Movie Poster" />
          <div className="post-text">
            <h2>Jailer</h2>
          </div>
        </div>

        <div className="movieImg">
          <img src={nunImg} alt="nun Movie Poster" />
          <div className="post-text">
            <h2>The Nun-2</h2>
          </div>
        </div>

        <div className="movieImg">
          <img src={MarkImg} alt="Mark Antony Movie Poster" />
          <div className="post-text">
            <h2>Mark Antony</h2>
          </div>
        </div>

        <div className="movieImg">
          <img src={jawanImg} alt="jawan Movie Poster" />
          <div className="post-text">
            <h2>Jawan</h2>
          </div>
        </div>

        <div className="movieImg">
          <img src={LeoImg} alt="Leo Movie Poster" />
          <div className="post-text">
            <h2>Leo</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
