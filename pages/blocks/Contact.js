export default function Contact({styles}) {
  return (
    <div>
      <h1>Contact</h1>

      <form>
        <label>Your email</label> 
        <br />
        <input type="email" placeholder="example@email.com"></input>

        <br />

        <label>Your message</label> 
        <br />
        <textarea type="email" placeholder="Go on... write your mind" />
      </form>
      
      <div id="message-box">
        Two sided box. This is the empty side which should be  the same color as the background
      </div>
    </div>
  )
}