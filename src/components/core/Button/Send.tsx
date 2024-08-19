import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onSend?: () => void;
};

export default function Send({ onSend }: Props) {
  return (
    <>
      <button
        onClick={onSend}
        className="text-[28px] text-white self-start mt-1"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </>
  );
}
