import Navbar from "@/components/fragments/Navbar/Navbar";
import ChatbotContainer from "../../components/fragments/Container/Chatbot";
import ChatBotInput from "../../components/core/Input/Chatbot";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen relative">
      <Navbar></Navbar>
      <ChatbotContainer></ChatbotContainer>
      <ChatBotInput></ChatBotInput>
    </div>
  );
}
