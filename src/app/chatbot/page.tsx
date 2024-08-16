import Navbar from "@/components/fragments/Navbar/Navbar";
import ChatbotContainer from "../../components/fragments/Container/Chatbot";
import ChatBotInput from "../../components/core/Input/Chatbot";
import Message from "../../components/core/Label/Message";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar></Navbar>
      <ChatbotContainer>
        <Message></Message>
        <Message user={true}></Message>
        <Message></Message>
        <Message user={true}></Message>
        <Message></Message>
      </ChatbotContainer>
      <ChatBotInput></ChatBotInput>
    </div>
  );
}
