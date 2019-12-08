// save all business logic
const controller = {}

controller.register = async function(registerInfo) {
    // console.log(registerInfo)
    //1. Create user with email and password
    //2. update user's display name = `first name` + ` ` + `last name`
    //3. send user an null verification
    let email = registerInfo.email
    let password = registerInfo.password
    let displayName = registerInfo.firstname + registerInfo.lastname
    view.setText(`register-error`, ``)
    view.setText(`register-success`, ``)
    view.disable(`register-submit-btn`)
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText(`register-success`, `An email verification has been sended to your email address`)
    } catch (err) {
        view.setText(`register-error`, err.message)
    }
    view.enable(`register-submit-btn`)
}

controller.login = async function(logInInfo) {
    let email = logInInfo.email
    let password = logInInfo.password
    view.setText(`log-in-error`, ``)
    view.setText(`log-in-success`, ``)
    view.disable(`log-in-submit-btn`)
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            // view.setText(`log-in-success`, `Log in success!`)
        view.onclick = window.location.href = 'http://www.google.com'
    } catch (err) {
        view.setText(`log-in-error`, err.message)
    }
    view.enable(`log-in-submit-btn`)
}