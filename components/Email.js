export default function Email() {
  return (
    <form className="grid-box-2" method="POST" onSubmit={handleOnSubmit}>
      <p>
        <label htmlFor="email">Email *</label> 
        <input type="email" name="email" placeholder="example@email.com" required></input>
      </p>

      <p>
        <label htmlFor="name">Name *</label> 
        <input type="text" name="name" placeholder="What do you want to be called?" required></input>
      </p>

      <p>
        <label htmlFor="message">Your message *</label>
        <textarea name="message" placeholder="What's on your mind?" required />
      </p>

      <button type="submit">Send your message</button>
    </form>
  )
}

async function handleOnSubmit(e) {
  e.preventDefault()

  const formData = {}

  const inputElements = e.currentTarget.elements

  // Get elements and their values
  Array.from(inputElements).forEach(field => {
    if ( !field.name ) return;
    formData[field.name] = field.value;
  })

  const res = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(formData)
  })

  // console.log(res)

  if(res.status === 200) {
    console.log('Message send')
    // document.getElementsByTagName('form')[0].innerHTML += 
    // '<div id="message-box" class="email-message-box">Email send successfully</div>'
    
    // Clear fields
    Array.from(inputElements).forEach(field => {
      field.value = ''
    })
  }
  else console.log('Something went wrong while sending message')
}