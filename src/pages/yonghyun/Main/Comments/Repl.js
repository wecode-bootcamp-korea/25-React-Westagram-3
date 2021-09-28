import React, { useState } from 'react';

function Repl() {
  const [msg, setMsg] = useState({
    id: '4.21ee',
    comment: '',
  });

  const { id, comment } = msg;

  const onChange = e => {
    const { value, comment } = e.target;

    setMsg({
      ...msg,
      [comment]: value,
    });
  };

  const onReset = e => {
    setMsg({
      id: '4.21ee',
      comment: '',
    });
  };

  return (
    <div>
      <input onChange={onChange} value={msg} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b> 내용 : {msg} </b>
      </div>
    </div>
  );
}

export default Repl;
