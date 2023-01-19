import ReactMarkdown from 'react-markdown'
import Email from './Email'

export default function Contact({message, email, location}) {

  return (
    <div id="contact" className="section">
      <h1>Contact</h1>

      <div className="grid-list-2">
        <Email />
        <div id="message-box" className="grid-box-2">
          <div>
            <h3>Message to you</h3>
            { <ReactMarkdown>{message}</ReactMarkdown> }
            <ul>
              { email ? <li><b>Email:</b> {email}</li> : ''  }
              { location ? <li><b>Located:</b> {location}</li> : ''  }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* <div className="space-container">
  <a className="fake-button" href="mailto:petterimattila4@outlook.com">Want to ask something?</a>
</div> */

/**
 * <form className="grid-box-2" method="POST" onSubmit={handleOnSubmit}>
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
 */