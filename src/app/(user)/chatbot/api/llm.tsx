import { useState } from "react";
import { axios } from '@/lib/axios'

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
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/###\s*(.*?)\s*<br>/g, '<h3>$1</h3>') // Subheading
            .replace(/##\s*(.*?)\s*<br>/g, '<h2>$1</h2>') // Heading
            .replace(/#\s*(.*?)\s*<br>/g, '<h1>$1</h1>') // Heading
            .replace(/-\s+(.*?)<br>/g, '<ul style="list-style-type:disc; margin-left:20px;"><li style="margin-left:20px;">$1</li></ul>') // Bullet points
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
            })
            .replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>'); // Wrap list items with <ul>
    }

    async function callConversation(message: string): Promise<void> {
        const userMessage: ChatMessage = { text: message, role: "user" };
        const updatedHistory = [...chatHistory, userMessage];
        setChatHistory(updatedHistory);

        const skeletonCard: ChatMessage = { text: generateSkeletonText(), role: "bot" };
        setChatHistory([...updatedHistory, skeletonCard]);

        const formattedChatHistory = updatedHistory.map(chat => [chat.role, chat.text]);

        axios.post(`/stream`, {
                input: {
                    input: message,
                    chat_history: formattedChatHistory 
                },
                
                config: {},
                kwargs: {},
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        .then((response) => {
            const output = response.data;
            const events = output.split('\nevent: ');

            let parsedData: { [key: string]: any } = {};

            events.forEach((eventBlock: any) => {
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
        }).catch((err) => {
            console.error('Error fetching conversation:', err);
        });
    }

    return {
        chatHistory,
        callConversation,
    };
}
