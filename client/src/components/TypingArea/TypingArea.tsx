import React from "react";
import './TypingArea.css';

type TypingAreaProps = {
  text: string;
};

const TypingArea: React.FC<TypingAreaProps> = ({ text }) => {
  return (
    <div className="typing-area flex justify-center items-center">
      <p className="text-3xl">{text}</p>
    </div>
  );
};

export default TypingArea;