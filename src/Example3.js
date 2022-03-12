import React, { useState, useRef, forwardRef } from 'React';

// Child Component
export const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Veya ikinci yöntem
// const Input = (props, ref) => {
//   return <input ref={ref} {...props} />;
// };

// export Input forwardRef(Input)

// Parent Component
const Example3 = () => {
  const inputRef = useRef(null);

  const [value, setValue] = useState('');

  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Input value={value} onChange={onInputChange} ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default Example3;
