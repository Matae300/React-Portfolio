import project2 from '../assets/project2.jpeg'
import project1 from '../assets/project1.jpeg'
import portfolio from '../assets/HTML.png'
import Weather from '../assets/Weather.jpeg'
import Password from '../assets/Password.jpeg'
import Javascript from '../assets/Javascript.jpeg'

import '../styles/Portfolio.css'

export default function Portfolio() {
  return (
    <div>
    <h1 className='portfolio'>Portfolio</h1>
    <div className='work'>
      <div className='work-item'>
        <a href="https://github.com/SuperMVS1991/Project2-Movies-with-Friends" rel="noreferrer" target="_blank">
        <img src={project2} className="app-image" alt="Movie Mingle Project" />
        <p>Movies With Friends</p>
        </a>
      </div>
      <div className='work-item'>
        <a href="https://github.com/Matae300/MovieMingle-Project" rel="noreferrer" target="_blank">
        <img src={project1} className="app-image" alt="Movie Mingle Project" />
        <p>Movie Mingle</p>
        </a>
      </div>
      <div className='work-item'>
        <a href='https://github.com/Matae300/challenge-2' rel="noreferrer" target="_blank">
        <img src={portfolio} className="app-image" alt="Movie Mingle Project" />
        <p>HTML/CSS Portfolio</p>
        </a>
      </div>
      <div className='work-item'>
        <a href='https://github.com/Matae300/challenge-6' rel="noreferrer" target="_blank">
        <img src={Weather} className="app-image" alt="Movie Mingle Project" />
        <p>Weather Search</p>
        </a>
      </div>
      <div className='work-item'>
        <a href='https://github.com/Matae300/Module-3-Challenge' rel="noreferrer" target="_blank">
        <img src={Password} className="app-image" alt="Movie Mingle Project" />
        <p>Password Generator</p>
        </a>
      </div>
      <div className='work-item'>
        <a href='https://github.com/Matae300/challenge-4' rel="noreferrer" target="_blank">
        <img src={Javascript} className="app-image" alt="Movie Mingle Project" />
        <p>JavaScript Quiz</p>
        </a>
      </div>
    </div>
    </div>
  );
}
