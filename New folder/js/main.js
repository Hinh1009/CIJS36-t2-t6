//1. Event
// window.onload = doSomething
// window.onclick = doSomething

// function doSomething() {
//     console.log('Doing something');
// }
//2. DOM
// Window.onload = init

// function init() {
//     let forms = document.getElementsByClassName('form-header')
//     let form = forms[0]

//     form.onclick = function() {
//         console.log("click")
//     }

//     form.style.background = 'red';

//     form.innerHTML = "New content"
// }
window.onload = init

function init() {

    //1. get 'a' tag
    //2. hind event clivk -> show screen login
    // let link = document.getElementsByTagName('a')[0]
    // link.onclick = function() {
    //     let LogInPageHTML = `
    //     <section class="register-container">
    //     <form class="form-register">
    //         <div class="form-header">
    //             <h3>MindX Chat Login</h3>
    //         </div>
    //         <div class="form-content">
    //             <div class="input-wrapper">
    //                 <input type="email" name="email" placeholder="Email or User Name">
    //             </div>
    //             <div class="input-wrapper">
    //                 <input type="password" name="password" placeholder="password">
    //             </div>
    //         </div>
    //         <div class="form-footer">
    //             <div class="link"><a href="index.html">Not have an account?Sign up</a>
    //                 <a id="log-in-link" href="#">Forgot your password?</a>
    //             </div>
    //             <div class="button"><button type="submit">Login</button></div>
    //         </div>
    //     </form>
    // </section>
    //     `
    //     let body = document.getElementsByTagName('body')[0]
    //     console.log(LogInPageHTML)
    //     console.log(body.innerHTML)
    //     body.innerHTML = LogInPageHTML
    // }
    view.showComponents(`register`)
}