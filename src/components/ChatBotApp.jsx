import './ChatBotApp.css'

const ChatBotApp = ({onGoBack}) => {
  return (
    <div className='chat-app'>
        <div className="chat-list">
            <div className="chat-list-header">
                <h2>Chat List</h2>
                <i className="bx bx-edit-alt new-chat"></i>
            </div>
            <div className="chat-list-item active">
                <h4>Chat 20/01/2026 12:24:33 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 20/01/2026 12:24:33 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
            <div className="chat-list-item">
                <h4>Chat 20/01/2026 12:24:33 PM</h4>
                <i className="bx bx-x-circle"></i>
            </div>
        </div>
        <div className="chat-window">
            <div className="chat-title">
                <h3>Chat with AI</h3>
                <i className="bx bx-arrow-back arrow" onClick={onGoBack}></i>
            </div>
            <div className="chat">
                <div className="prompt">
                    Hi, How are you <span>12:32:30 PM</span>
                </div>
                <div className="response">
                    I am fine. Thank you for asking. How can I assist you today? <span>12:32:33 PM</span>
                </div>
                <div className="typing">Typing...</div>
            </div>
            <form className="msg-form">
                <i className="fa-solid fa-face-smile emoji"></i>
                <input type="text" className="msg-input" placeholder='Type a message...' />
                <i className="fa-solid fa-paper-plane"></i>
            </form>
        </div>
    </div>
  )
}

export default ChatBotApp