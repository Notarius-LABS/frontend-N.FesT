"use client";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function ChatBotInput() {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: any) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current!.style.height = "auto";
    textAreaRef.current!.style.height =
      textAreaRef.current!.scrollHeight + "px";
  }, [val]);

  return (
    <div className="flex justify-center my-auto">
      <div className="absolute bottom-0 px-5 py-2 bg-white bg-opacity-10 rounded-[35px] mb-[3rem] border border-white">
        <div className="flex items-center justify-center gap-5">
          <textarea
            className="min-w-[736px] min-h-[46px] m-0 resize-none border-0 bg-transparent px-0 text-white focus:outline-none focus-visible:ring-0 max-h-[25dvh] text-[25px] py-2 leading-0 h-full flex-1 grow"
            value={val}
            onChange={handleChange}
            ref={textAreaRef}
            rows={1}
          />
          <div className="text-[28px] text-white self-start mt-1">
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </div>
  );
}
