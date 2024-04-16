import '../styles/contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Page</h1>
      <form>
        <input type="text" placeholder="Name" className="form-input" />
        <br />
        <input type="email" placeholder="Email" className="form-input" />
        <br />
        <textarea placeholder="Message" rows="4" className="form-input"></textarea>
        <br />
        <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
  );
}
