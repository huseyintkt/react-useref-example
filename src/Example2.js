import React, { useEffect, useRef, useState } from 'react';

const Example2 = () => {
  const [name, setName] = useState('');
  const [renderCount1, setRenderCount1] = useState(0);
  const renderCount2 = useRef(0);

  useEffect(() => {
    // useState ile yaptığımızda renderCount1 her değiştiğinde component yeniden render edilir.
    setRenderCount1((prevRenderCount1) => prevRenderCount1 + 1);

    // useRef ile yaptığımızda renderCount2 her değiştiğinde component render edilmez.
    // Yani bu gibi durumlarda performans için useRef kullanılmalıdır.
    renderCount2.current = renderCount2.current + 1;
  });

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
      <p>useState: {renderCount1}</p>
      <p>useRef: {renderCount2}</p>
    </div>
  );
};

export default Example2;
