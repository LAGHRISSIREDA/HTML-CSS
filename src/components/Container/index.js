//Container Component
import './style.css'
import {styles} from '../style'
import { StyledButton } from '../styles/Button.styled';
export default function ContainerComponent() {
  return (
    <div className={`container`}>
      <p style={200>23?{...styles.paragraphStyle}:{}}>
        Et proident cillum voluptate duis ea quis consectetur Lorem esse
        exercitation.
      </p>
      <p style={styles.divStyle}>
        Et proident cillum voluptate duis ea quis consectetur Lorem esse
        exercitation.
      </p>
      <StyledButton>
        Click ME
      </StyledButton>
    </div>
  );
}

