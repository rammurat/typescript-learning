import React from "react";

type LinkProps = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => (
    <button className="t-button"
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link