import handleOnSubmit from '../api/email'

export default function Contact({message}) {
  return (
    <div id="contact" className="section">
      <h1>Contact</h1>

      <div className="grid-list-2">
        <form className="grid-box-2" method="POST" onSubmit={handleOnSubmit}>
          <label htmlFor="e-mail">Your email *</label> 
          <br />

          <input type="email" name="e-mail" placeholder="example@email.com" required></input>
          <br />

          <label htmlFor="subject">Subject *</label> 
          <br />

          <input type="text" name="subject" placeholder="" required></input>
          <br />

          <label htmlFor="message">Your message *</label> 
          <br />

          <textarea name="message" placeholder="What's on your mind?" required />
          <button type="submit">Send your message</button>
        </form>
        
        <div id="message-box" className="grid-box-2">
          <div>
            <h3>Message to you</h3>
            <p>
              Thank you for coming this far. <br />
              If you've anything to say or ask you can contact me through this email form. 
              You can also find me from <a href="#">LinkedIn</a>.
              Feel free to just say hi.
            </p>
            <p>
              <li>It would be highly It would be highly It would be highly It would be highly</li>
              <li>Something something</li>
              <li>Something something</li>
            </p>
            <p>
            { message }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}