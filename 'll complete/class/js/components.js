// save html of all screens
const components = {}

components.register = `
<section class="register-container">
  <form id="form-register" class="form-register">
    <div class="form-header">
      <h3>Techkids Chat</h3>
    </div>
    <div class="form-content">
      <div class="name-wrapper">
        <div class="input-wrapper">
          <input id="firstname-input" type="text" name="firstname" placeholder="Firstname">
          <div id="firstname-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="text" name="lastname" placeholder="Lastname">
          <div id="lastname-error" class="message-error"></div>
        </div>
      </div>
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email">
        <div id="email-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div id="password-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="confirmPassword" placeholder="Confirm password">
        <div id="confirm-password-error" class="message-error"></div>
      </div>
      <div id="register-error" class="message-error"></div>
      <div id="register-success" class="message-success"></div>
    </div>
    <div class="form-footer">
      <a id="register-link" href="#">Already have an account? Login</a>
      <button id="register-submit-btn" type="submit">Register</button>
    </div>
  </form>
</section>
`

components.logIn = `
<section class="log-in-container">
  <form id="form-log-in" class="form-log-in">
    <div class="form-header">
      <h3>Techkids Chat</h3>
    </div>
    <div class="form-content">
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email">
        <div id="email-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div id="password-error" class="message-error"></div>
      </div>
      <div id="log-in-error" class="message-error"></div>
    </div>
    <div class="form-footer">
      <a id="log-in-link" href="#">Not yet have an account? Register</a>
      <button id="log-in-submit-btn" type="submit">Log in</button>
    </div>
  </form>
</section>
`

components.chat = `
<section class="chat-container">
  <!-- left -->
  <div class="current-conversation">
    <div id="list-messages" class="list-messages">
    </div>
    <form class="form-add-message">
      <div class="input-wrapper">
        <input type="text" name="message" placeholder="Enter your message here">
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
  <!-- right -->
</section>
`

components.nav = `
<nav class="main-nav">
  <div class="user-profile">
    <span id="user-email" class="user-email">
    </span>
    <button id="sign-out-btn" class="btn-icon">
      <i class="fas fa-sign-out-alt"></i>
    </button>
  </div>
</nav>
`