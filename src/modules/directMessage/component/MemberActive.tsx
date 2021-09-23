import React from 'react';

interface MemterActiveProps {
  active?: boolean;
}

const MemberActive = ({ active }: MemterActiveProps) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="5"
        cy="5.1303"
        rx="5"
        ry="5.01629"
        fill={active ? '#00FF29' : '#CBCBCB'}
      />
    </svg>
  );
};

export default MemberActive;
