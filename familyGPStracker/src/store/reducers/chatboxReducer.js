import ChatBoxAction from '../actions/chatboxAction';

const initialState = { chatBox: [] }

export default function ChatBoxReducer(state = initialState, action) {
  switch (action.type) {
    case ChatBoxAction.CHATBOX_MSG:
      console.log(action.chatBox);
      return Object.assign({}, state, { chatBox: action.chatBox })
    default:
      return state;
  }
}
