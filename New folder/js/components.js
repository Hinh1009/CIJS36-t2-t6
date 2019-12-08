//save html of all screens
const components = {}

components.register = `
<section class="register-container">
        <form id="form-register" class="form-register">
            <div class="form-header">
                <h3>MindX chat</h3>
            </div>
            <div class="form-content">
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="firstName" placeholder="First name">
                        <div id="firstNameError" class="messageError"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="lastName" placeholder="Last name">
                        <div id="lastNameError" class="messageError"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="email">
                    <div id="emailError" class="messageError"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="password">
                    <div id="passwordError" class="messageError"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="confirmPassword" placeholder="confirm Password">
                    <div id="confirmPasswordError" class="messageError"></div>
                </div>
                <div id="register-error" class="messageError"></div>
                <div id="register-success" class="message-success"></div>
            </div>
            <div id="login-error" class="messageError"></div>
            <div class="form-footer">
                <a id="register-link" href="#">Already have an account?Login</a>
                <button id="register-submit-btn" type="submit">Register</button>
            </div>

        </form>
    </section>
`
components.login = `
<section class="log-in-container">
        <form id="form-log-in" class="form-log-in">
            <div class="form-header">
                <h3>MindX Chat Login</h3>
            </div>
            <div class="form-content">
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email or User Name">
                    <div id="emailLogInError" class="messageError"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="password">
                     <div id="passwordLogInNameError" class="messageError"></div>
                </div>
                <div id="log-in-error" class="messageError"></div>
                <div id="log-in-success" class="message-success"></div>
            </div>
            <div id="login-error" class="messageError"></div>
            <div class="form-footer">
                <div class="link"><a href="index.html">Not have an account?Sign up</a>
                    <a id="log-in-link" href="#">Forgot your password?</a>
                </div>
                <div class="button"><button id="log-in-submit-btn" type="submit" >Login</button></div>
            </div>
        </form>
    </section>
`