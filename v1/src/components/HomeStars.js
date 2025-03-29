import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.6; }
  100% { opacity: 0.3; }
`;

const StarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh; // Full height for home page
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  background: #FEFFDD;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(254, 255, 221, 0.4), 0 0 4px rgba(254, 255, 221, 0.2);
  animation: ${twinkle} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  opacity: 0.3;
`;

const HomeStars = () => {
  // More stars for the full height
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3
  }));

  return (
    <StarContainer>
      {stars.map(star => (
        <Star
          key={star.id}
          x={star.x}
          y={star.y}
          size={star.size}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </StarContainer>
  );
};

export default HomeStars; 