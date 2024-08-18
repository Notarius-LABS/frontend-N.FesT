import { useState } from "react";
import { request } from "@/lib/constant";

interface ChatMessage {
    text: string;
    role: "user" | "bot";
}

export function chatBot() {
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

    function generateSkeletonText(): string {
        return `
            <div class="skeleton-text">
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
            </div>
        `;
    }

    function formatText(text: string): string {
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        
        return text.replace(/(?:\r\n|\r|\n)/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/##\s*(.*?)\s*##/g, '<h3>$1</h3>')
            .replace(urlPattern, (url) => {
                let cleanUrl = url;
                let endURL = "";

                if (url.includes(')')) {
                    const clean = url.split(")");
                    cleanUrl = clean[0];
                    endURL = ")" + clean[1];
                }
                
                const domain = (new URL(cleanUrl)).hostname;
                return `<a href="${cleanUrl}" target="_blank">${domain}${endURL}</a>`;
            });
    }

    async function callConversation(message: string): Promise<void> {
        const userMessage: ChatMessage = { text: message, role: "user" };
        const updatedHistory = [...chatHistory, userMessage];
        setChatHistory(updatedHistory);

        const skeletonCard: ChatMessage = { text: generateSkeletonText(), role: "bot" };
        setChatHistory([...updatedHistory, skeletonCard]);

        const formattedChatHistory = updatedHistory.map(chat => [chat.role, chat.text]);

        try {
            const response = await fetch(`${request}/stream`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    input: { 
                        input: message,
                        chat_history: formattedChatHistory 
                    }, 
                    config: {}, 
                    kwargs: {} 
                }),
            });

            const output = await response.text();
            const events = output.split('\nevent: ');

            let parsedData: { [key: string]: any } = {};

            events.forEach(eventBlock => {
                const eventParts = eventBlock.split('\ndata: ');

                if (eventParts.length > 1) {
                    try {
                        const eventType = eventParts[0].trim();
                        const eventData = eventParts[1].trim();

                        if (eventType && eventData) {
                            parsedData[eventType] = JSON.parse(eventData);
                        }
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                }
            });

            const botMessage: ChatMessage = { text: formatText(parsedData.data.output), role: "bot" };
            setChatHistory([...updatedHistory, botMessage]);
        } catch (error) {
            console.error('Error fetching conversation:', error);
        }
    }

    return {
        chatHistory,
        callConversation,
    };
}
