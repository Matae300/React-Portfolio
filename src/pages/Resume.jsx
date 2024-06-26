import '../styles/Resume.css'

export default function Resume() {
  return (
    <div className="resume-container">
     <h1>Resume</h1>
     
     <a href="Resume.Jsx" 
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
     >
        <button className='resume-button'>Download Resume</button>
     </a>

     <h3>Front End:</h3>
     <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>BootStrap</li>
      <li>React</li>
     </ul>
     <h3>Back End:</h3>
     <ul>
      <li>Express Js</li>
      <li>Node Js</li>
      <li>SQL</li>
      <li>NoSQL</li>
      <li>PWA</li>
     </ul>
    </div>
  );
}
