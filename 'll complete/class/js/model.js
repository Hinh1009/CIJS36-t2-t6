// save all datas
const model = {
  conversations: null, // tat ca cuoc hoi thoai nguoi dung tham gia
  currentConversation: null // cuoc hoi thoai nguoi dung dang chon
}

model.saveConversations = function(conversations) {
  model.conversations = conversations
}

model.saveCurrentConversation = function(conversation) {
  model.currentConversation = conversation
}
