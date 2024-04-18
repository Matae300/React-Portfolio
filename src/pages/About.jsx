import profile from '../assets/MinasGerais.jpg';
import '../styles/About.css'

export default function About() {
  return (
    <div className='about-me-section'>
      <h1 className='about-h1'>About Page</h1>
      <img src={profile} className="profile-picture" alt="profile picture" />
      <p className='about-me'>My name is Matheus Almeida. I am from Connecticut, USA, and my family hails from the vibrant country of Brazil. Growing up in a multicultural environment has enriched my perspective on life and fueled my passion for exploring different cultures and traditions. Beyond my cultural background, I am a dedicated film enthusiast, constantly immersing myself in the world of cinema and exploring various genres from classics to contemporary masterpieces.</p>
      <p className='about-me'>Aside from my love for cinema, I find solace and excitement in the realm of combat sports. Whether its the adrenaline-pumping action of MMA or the disciplined artistry of Muay Thai, I am drawn to the raw intensity and technical prowess displayed by athletes in these disciplines. In addition to combat sports, I maintain a strong commitment to health and fitness, spending my free time at the gym, pushing my physical limits and embracing the challenges of weightlifting.</p>
    </div>
  );
}
