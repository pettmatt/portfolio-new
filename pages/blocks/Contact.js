export default function Contact({message}) {
  return (
    <div id="contact" className="section">
      <h1>Contact</h1>

      <div className="grid-list-2">
        <form className="grid-box-2" action="post">
          <label>Your email *</label> 
          <br />
          <input type="email" placeholder="example@email.com" required></input>

          <br />

          <label>Your message *</label> 
          <br />
          <textarea type="email" placeholder="What's on your mind?" required />
          <button type="submit">Send</button>
        </form>
        
        <div id="message-box" className="grid-box-2">
          <p>
          { message }
          </p>
        </div>
      </div>
    </div>
  )
}