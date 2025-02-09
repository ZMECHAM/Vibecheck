import React from "react";

interface IconProps {
  onLike: () => void;
  onPass: () => void;
}

const Icon: React.FC<IconProps> = ({ onLike, onPass }) => {
  return (
    <div className="icon-container">
      <button className="icon like-icon" onClick={onLike}>
        ✔
      </button>

      <button className="icon pass-icon" onClick={onPass}>
        ✖
      </button>
    </div>
  );
};

export default Icon;
