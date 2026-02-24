//Container Component
import './style.css'
import { useState } from "react";
import {styles} from '../style'
import { StyledButton,FancyButton } from '../styles/Button.styled';
export default function ContainerComponent() {
  const [pos, setPos] = useState({ x: 400, y: 300 });

  const moveFancy = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;

    setPos({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  };
  return (
    <>
    
      <StyledButton variant = {'Outlines'}>
        Click ME
      </StyledButton>
      <FancyButton
        variant="kk"
        $x={pos.x}
        $y={pos.y}
        onMouseEnter={moveFancy}
      >
        Fancy
      </FancyButton>

    
    </>
  );
}

