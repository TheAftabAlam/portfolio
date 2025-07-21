// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // Optional: for conditional class handling

const BlurBlob = ({
  position = { top: '50%', left: '50%' },
  size = { width: '300px', height: '300px' },
  color = 'bg-purple-500',
  opacity = 'opacity-20',
  blur = 'blur-3xl',
  zIndex = 'z-0',
  className = '',
}) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className={clsx('absolute', zIndex, className)}
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={clsx(
          'w-full h-full rounded-full animate-blob',
          color,
          opacity,
          blur
        )}
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
  opacity: PropTypes.string,
  blur: PropTypes.string,
  zIndex: PropTypes.string,
  className: PropTypes.string,
};

export default BlurBlob;
