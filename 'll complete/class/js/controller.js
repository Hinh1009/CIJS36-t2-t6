// save all business logic
const controller = {}

controller.register = async function(registerInfo) {
  // 1. create user with email + password
  // 2. update user's displayName = firstname + " " + lastname
  // 3. send user an email verification
  let email = registerInfo.email
  let password = registerInfo.password
  let displayName = registerInfo.firstname + registerInfo.lastname
  view.setText('register-error', '')
  view.setText('register-success', '')
  view.disable('register-submit-btn')
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    await firebase.auth().currentUser.updateProfile({
      displayName: displayName
    })
    await firebase.auth().currentUser.sendEmailVerification()
    view.setText('register-success', 'An email verification has been sended to your email address!')
  } catch(err) {
    view.setText('register-error', err.message)
  }
  view.enable('register-submit-btn')
}

controller.logIn = async function(logInInfo) {
  let email = logInInfo.email
  let password = logInInfo.password
  view.setText('log-in-error', '')
  view.disable('log-in-submit-btn')

  try {
    let result = await firebase.auth().signInWithEmailAndPassword(email, password)
    if(!result.user || !result.user.emailVerified) {
      throw new Error('You must verify email!')
    }
  } catch(err) {
    view.setText('log-in-error', err.message)
    view.enable('log-in-submit-btn')
  }
}

controller.loadConversations = async function() {
  // 1. load data from db
  let currentEmail = firebase.auth().currentUser.email
  let result = await firebase
    .firestore()
    .collection('conversations')
    .where('users', 'array-contains', currentEmail)
    .get()
  let docs = result.docs
  let conversations = transformDocs(docs)
  
  // 2. save data to model
  model.saveConversations(conversations)
  if(conversations.length) {
    let currentConversation = conversations[0]
    model.saveCurrentConversation(currentConversation)
  }

  // 3. display data
  view.showCurrentConversation()

  // TODO: remove the line below
  demoQueryDatabase()
}

async function demoQueryDatabase() {
  // common format: firebase.firestore().collection('name').{...}.command()
  // 1. READ    .get()
  // getMany
  let result = await firebase
    .firestore()
    .collection('conversations')
    // .where('users', 'array-contains', "quangldxyz@gmail.com")
    .where('title', '==', 'First conversation')
    .get()
  console.log("result get many", transformDocs(result.docs))

  // getOne
  let id = 'r90kPPbyEGnTIf54Odpe'
  let result2 = await firebase
    .firestore()
    .collection('conversations')
    .doc(id)
    .get()
  console.log("result get one", transformDoc(result2))

  // 2. CREATE  .add()
  // let data = {
  //   users: ["email1", "email2"],
  //   messages: [],
  //   title: "Demo conversation",
  //   createdAt: new Date().toISOString()
  // }
  // let result3 = await firebase
  //   .firestore()
  //   .collection('conversations')
  //   .add(data)
  // console.log("result add", result3.id)

  // 3. UPDATE  .update()
  let id2 = '0oCX25AeNXsdHCBi0TVP'
  await firebase
    .firestore()
    .collection('conversations')
    .doc(id2)
    .update({
      // title: 'Updated title',
      // test: 123456789,
      users: firebase.firestore.FieldValue.arrayUnion('user3')
    })
  console.log("result update")

  // 4. DELETE  .delete()
  let id3 = '63RFKeiGxzKs9FXazk6c'
  await firebase
    .firestore()
    .collection('conversations')
    .doc(id3)
    .delete()
  console.log("result delete")
}

function transformDocs(docs) {
  let datas = []
  for(let doc of docs) {
    let data = doc.data()
    data.id = doc.id
    datas.push(data)
  }
  return datas
}

function transformDoc(doc) {
  let data = doc.data()
  data.id = doc.id
  return data
}
