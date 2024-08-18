"use client"

import Navbar from "@/components/fragments/Navbar/Navbar";
import ChatbotContainer from "../../components/fragments/Container/Chatbot";
import ChatBotInput from "../../components/core/Input/Chatbot";
import Message from "../../components/core/Label/Message";

import { chatBot } from "@/app/chatbot/api/llm"
import { useState } from "react";

export default function ChatbotPage() {
  const { chatHistory, callConversation } = chatBot(); 
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      callConversation(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar></Navbar>

      <ChatbotContainer>
<<<<<<< HEAD
        <Message></Message>
        <Message user={true}></Message>
=======
        {chatHistory.map((chat, index) => (
          <Message key={index} user={chat.role === "user"} text={chat.text} />
        ))}
>>>>>>> a4f8420bb92ba323b244441faf7fca1bdd5332f0
      </ChatbotContainer>

      <ChatBotInput 
        value={inputMessage} 
        onChange={(e) => setInputMessage(e.target.value)}
        onSend={handleSendMessage}
      />

    </div>
  );
}
