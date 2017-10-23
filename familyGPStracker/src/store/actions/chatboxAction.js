export default class ChatBoxAction {
  static CHATBOX_MSG = 'CHATBOX_MSG'

  static Chatbox(chatBox) {
    console.log(chatBox)
    return {
      type: ChatBoxAction.CHATBOX_MSG,
      chatBox
    }
  }
}
