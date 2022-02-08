const email = document.getElementById('email')
const form = document.getElementById('form')

function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.textContent = message
}

function isValidEmail(emailString) {
  // check for @ sign
  let atSymbol = emailString.indexOf('@')
  if (atSymbol < 1) return false

  let dot = emailString.indexOf('.')
  if (dot <= atSymbol + 2) return false

  // check that the dot is not at the end
  if (dot === emailString.length - 1) return false

  return true
}

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (email.value === '') {
    showError(email, 'Please check your email')
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Please check your email')
  }
})
