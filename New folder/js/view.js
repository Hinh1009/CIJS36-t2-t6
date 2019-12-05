// save all UI logic
const view = {}

view.showComponents = function(name) {
    switch (name) {
        case `register`:
            {
                let app = document.getElementById(`app`)
                app.innerHTML = components.register

                let link = document.getElementById('register-link')
                link.onclick = registerLinkClickHandler

                let form = document.getElementById(`form-register`)
                form.onsubmit = formRegisterSubmitHandler

                function registerLinkClickHandler() {
                    view.showComponents(`login`)
                }

                function formRegisterSubmitHandler(event) {
                    event.preventDefault()
                        // console.log(`submit`)
                        //1.Get info
                        // let email = form.email.value
                        // console.log(email)
                    let registerInfo = {
                            firstname: form.firstName.value,
                            lastname: form.lastName.value,
                            email: form.email.value,
                            password: form.password.value,
                            confirmPassword: form.confirmPassword.value
                        }
                        //2.Valliadate info
                        //     if (registerInfo.firstName) {
                        //         view.setText(`firstNameError`, ``)
                        //     } else {
                        //         view.setText(`firstNameError`, `Invalid first name`)

                    //     }
                    // }
                    view.Validate(registerInfo.firstname, `firstNameError`, `Invalid first name!`)
                    view.Validate(registerInfo.lastname, `lastNameError`, `Invalid last name!`)
                    view.Validate(registerInfo.email && registerInfo.email.includes('@'), `emailError`, `Invalid email`)
                    view.Validate(registerInfo.password && registerInfo.password.length >= 6, `passwordError`, `Invalid password`)
                    view.Validate(registerInfo.confirmPassword && registerInfo.confirmPassword.length >= 6 && registerInfo.password == registerInfo.confirmPassword, `confirmPasswordError`, `Invalid confirm password`)
                }
                break;
            }
        case `login`:
            {
                let app = document.getElementById(`app`)
                app.innerHTML = components.login

                let link = document.getElementById('log-in-link')
                link.onclick = loginLinkClickHandler

                let form = document.getElementById(`form-log-in`)
                form.onsubmit = formLogInSubmitHandler

                function loginLinkClickHandler() {
                    view.showComponents(`register`)

                }

                function formLogInSubmitHandler(event) {
                    event.preventDefault()

                    let logInInfo = {
                        email: form.email.value,
                        password: form.password.value
                    }
                    view.Validate(logInInfo.email && logInInfo.email.includes(`@`), `emailLogInError`, `Invalid email`)
                    view.Validate(logInInfo.password && logInInfo.password.length >= 6, `passwordLogInNameError`, `Invalid password`)
                }
                break;

            }
    }
    view.setText = function(id, text) {
        document.getElementById(id).innerText = text
    }

    view.Validate = function(condition, idErrorTag, messageError) {
        if (condition) {
            view.setText(idErrorTag, ``)
        } else {
            view.setText(idErrorTag, messageError)
        }
    }
}