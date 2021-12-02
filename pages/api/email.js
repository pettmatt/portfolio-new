export default async function handleOnSubmit(e) {
  e.preventDefault()

  const formData = {}

  Array.from(e.currentTarget.elements).forEach(field => {
    if ( !field.name ) return;
    formData[field.name] = field.value;
  })

  console.log(formData)

  waitingAnimation(true)

  await fetch('/api/mailRequest', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(res => {
    if(res.status === 200) {
      waitingAnimation(false)
      resetInputs(['form input[name=e-mail]', 'form input[name=subject]', 'form textarea[name=message]'])
      addNotification('Email send. Thank you.')
    }
    if(res.status !== 200) {
      waitingAnimation(false)
      addNotification('Something happend. Email couldn\'t be send.', 'error')
    }
  })
}

function waitingAnimation(executeAnimation = true) {
  executeAnimation ?
    document.querySelector('form button').innerHTML = '<span>.</span> <span>.</span> <span>.</span>'
  : document.querySelector('form button').innerHTML = 'Send your message'
}

function resetInputs(inputs) {
  inputs.forEach(input => {
    document.querySelector(input).value = ''
  })
}

function addNotification(text, styleClass = '') {
  let defaultElement = document.querySelector('#message-box .notification')

  if(defaultElement){
    defaultElement.innerHTML = text
    if(! defaultElement.classList.contains(styleClass))
      defaultElement.classList += ' ' + styleClass
  }

  else
    document.querySelector('#message-box div').innerHTML += `<div class="notification"><p class=${styleClass}>${text}</p></div>`
}