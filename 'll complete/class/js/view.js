// save all UI logic
const view = {
  currentComponent: null
}

view.showComponents = function(name) {
  view.currentComponent = name
  switch(name) {
    case 'register': {
      let app = document.getElementById('app')
      app.innerHTML = components.register

      let link = document.getElementById('register-link')
      link.onclick = registerLinkCLickHandler

      let form = document.getElementById('form-register')
      form.onsubmit = formRegisterSubmitHandler

      // // demo validate by input event
      // let inputFirstname = document.getElementById('firstname-input')
      // inputFirstname.oninput = function() {
      //   view.validate(inputFirstname.value, 'firstname-error', 'Invalid firstname!')
      // }

      function registerLinkCLickHandler() {
        view.showComponents('logIn')
      }

      function formRegisterSubmitHandler(event) {
        event.preventDefault() // chan su kien mac dinh >> khong gui thong tin len thanh dia chi
        
        // 1. get info
        let registerInfo = {
          firstname: form.firstname.value,
          lastname: form.lastname.value,
          email: form.email.value,
          password: form.password.value,
          confirmPassword: form.confirmPassword.value
        }
        // 2. validate info
        let validateResult = [
          view.validate(registerInfo.firstname, 'firstname-error', 'Invalid firstname!'),
          view.validate(registerInfo.lastname, 'lastname-error', 'Invalid lastname!'),
          view.validate(
            registerInfo.email && registerInfo.email.includes('@'),
            'email-error',
            'Invalid email!'
          ),
          view.validate(
            registerInfo.password && registerInfo.password.length >= 6,
            'password-error',
            'Invalid password!'
          ),
          view.validate(
            registerInfo.confirmPassword
            && registerInfo.confirmPassword.length >= 6
            && registerInfo.password == registerInfo.confirmPassword,
            'confirm-password-error',
            'Invalid confirm password!'
          )
        ]

        if(allPassed(validateResult)) {
          // 3. submit info (next session)
          controller.register(registerInfo)
        }

      }
      break
    }
    case 'logIn': {
      let app = document.getElementById('app')
      app.innerHTML = components.logIn
      
      let link = document.getElementById('log-in-link')
      link.onclick = logInLinkClickHandler

      let form = document.getElementById('form-log-in')
      form.onsubmit = formLogInSubmitHandler

      function logInLinkClickHandler() {
        view.showComponents('register')
      }

      function formLogInSubmitHandler(e) {
        e.preventDefault()
        let logInInfo = {
          email: form.email.value,
          password: form.password.value
        }
        
        let validateResult = [
          view.validate(
            logInInfo.email && logInInfo.email.includes('@'),
            'email-error',
            'Invalid email!'
          ),
          view.validate(
            logInInfo.password && logInInfo.password.length >= 6,
            'password-error',
            'Invalid password!'
          )
        ]

        if(allPassed(validateResult)) {
          controller.logIn(logInInfo)
        }
      }
      break
    }
    case 'chat': {
      let app = document.getElementById('app')
      app.innerHTML = components.nav + components.chat

      controller.loadConversations()

      view.setText('user-email', firebase.auth().currentUser.email)

      let signOutBtn = document.getElementById('sign-out-btn')
      signOutBtn.onclick = function() {
        firebase.auth().signOut()
      }

    }
  }
}

/**
<div class="message your">
  <span>How are you?</span>
</div>
 */
view.showCurrentConversation = function() {
  if(model.currentConversation) {
    let messages = model.currentConversation.messages
    let listMessages = document.getElementById('list-messages')
    
    for(let message of messages) {
      let content = message.content
      let owner = message.owner
      let className = ""
      if(owner == firebase.auth().currentUser.email) {
        className = "message your"
      } else {
        className = "message"
      }

      let html = `
        <div class="${className}">
          <span>${content}</span>
        </div>
      `
      listMessages.innerHTML += html
    }
  }
}

view.setText = function(id, text) {
  document.getElementById(id).innerText = text
}

view.validate = function(condition, idErrorTag, messageError) {
  if(condition) {
    view.setText(idErrorTag, '')
    return true
  } else {
    view.setText(idErrorTag, messageError)
    return false
  }
}

view.disable = function(id) {
  document.getElementById(id).setAttribute('disabled', true)
}

view.enable = function(id) {
  document.getElementById(id).removeAttribute('disabled')
}

function allPassed(validateResult) {
  for(let result of validateResult) {
    if(!result) {
      return false
    }
  }
  return true
}

// function validatePassword(password) {
//   return password.length >= 6
//     && /^.*[A-Z].*$/.test(password)
//     && /^.*[0-9].*$/.test(password)
//     && /^.*[a-z].*$/.test(password)
// }

// function validatePassword(password) {
//   for(let i = 0; i < password.length; i++) {
//     let charAt = password.charAt(i)
//     // validate each character
//   }
// }

// validatePassword('123abc')