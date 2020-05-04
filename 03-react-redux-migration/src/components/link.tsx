import React, {FunctionComponent} from "react";

type LinkProps = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const Link: FunctionComponent<LinkProps> = ({ active, children, onClick }) => (
    <button
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
