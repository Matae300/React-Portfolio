import reactLogo from '../assets/react.svg';
import '../styles/Header.css';

function Header() {
  return(
    <div className='header-container'>
      <img src={reactLogo} className='logo' alt="React logo" />
      <h1 className='jersey-15-regular'>Matheus React Portfolio</h1>
  </div>

);
}

export default Header