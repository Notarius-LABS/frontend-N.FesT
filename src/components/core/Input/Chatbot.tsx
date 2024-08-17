"use client";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

type ChatBotInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
};

export default function ChatBotInput({ value, onChange, onSend }: ChatBotInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="flex justify-center my-auto">
      <div className="absolute bottom-50 px-5 py-2 bg-zinc-700 rounded-[35px] mb-[3rem] border border-white">
        <div className="flex items-center justify-center gap-5 px-2">
          <textarea
            className="min-w-[950px] m-0 resize-none border-0 bg-transparent px-0 text-white focus:outline-none focus-visible:ring-0 max-h-[25dvh] text-[15px] py-2 leading-0 h-full flex-1 grow"
            value={value}
            onChange={onChange}
            ref={textAreaRef}
            rows={1}
          />
          <div className="text-[20px] cursor-pointer text-white self-start mt-1" onClick={onSend}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </div>
  );
}