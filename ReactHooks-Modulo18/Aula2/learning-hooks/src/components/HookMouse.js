import React, { useEffect, useState } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('MouseMove Event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('Use Effect');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Component Will Unmount');
      window.removeEventListener('mousemove', logMousePosition);
    }

  }, []);

  return (
    <div>
      Hoks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
