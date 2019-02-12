import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');
  const [arr] = useState([])

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => setValue('')
  };
};