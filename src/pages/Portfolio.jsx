import project2 from '../assets/project2.jpeg'
import project1 from '../assets/project1.jpeg'
import portfolio from '../assets/HTML.png'

import '../styles/Portfolio.css'

export default function Portfolio() {
  return (
    <div>
    <h1 className='portfolio'>Portfolio</h1>
    <div className='work'>
      <div className='work-item'>
      <img src={project2} className="app-image" alt="Movie Mingle Project" />
      </div>
      <div className='work-item'>
      <img src={project1} className="app-image" alt="Movie Mingle Project" />
      </div>
      <div className='work-item'>
      <img src={portfolio} className="app-image" alt="Movie Mingle Project" />
    </div>
    </div>
    </div>
  );
}
