import React from 'react';

const ShinyText = ({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = '',
  color = '#b5b5b5a4',
  shineColor = 'rgba(255, 255, 255, 0.8)',
  angle = 120,
  size = 200,
  loop = true,
  delay = 0
}) => {
  const animationDuration = `${speed}s`;
  const animationDelay = `${delay}s`;
  
  const shineStyle = {
    backgroundImage: `linear-gradient(${angle}deg, ${color} 40%, ${shineColor} 50%, ${color} 60%)`,
    backgroundSize: `${size}% 100%`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
    animation: disabled ? 'none' : `shine ${animationDuration} linear ${loop ? 'infinite' : '1'} ${animationDelay}`,
    animationFillMode: 'both'
  };

  return (
    <div className={className} style={shineStyle}>
      {text}
    </div>
  );
};

export default ShinyText;
  
























































































































































































































































































