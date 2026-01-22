import ChatBotStart from "./components/ChatBotStart";
import ChatBotApp from "./components/ChatBotApp";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const handleStartChat = () => {
    setIsChatting(true);
    if (chats.length === 0) {
      createNewChat();
    }
  };

  const handleGoBack = () => {
    setIsChatting(false);
  };

  const createNewChat = (initialMessage = "") => {
    const newChat = {
      id: uuidv4(),
      displayId: `Chat ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString()}`,
      messages: initialMessage
        ? [
            {
              type: "prompt",
              text: initialMessage,
              timestamp: new Date().toLocaleTimeString(),
            },
          ]
        : [],
    };

    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    setActiveChat(newChat.id);
  };

  return (
    <>
      <div className="container">
        {isChatting ? (
          <ChatBotApp
            onGoBack={handleGoBack}
            chats={chats}
            setChats={setChats}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            onNewChat={createNewChat}
          />
        ) : (
          <ChatBotStart onStartChat={handleStartChat} />
        )}
      </div>
    </>
  );
}

export default App;

// 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