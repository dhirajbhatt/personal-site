import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1985-01-15T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 'Nomad',
    link: 'https://www.google.com/maps/d/u/0/embed?mid=1pxP63fvqnVMeXiKpT5etzgYIptm5kREH&ehbc=2E312F',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Pune, India',
  },
];

export default data;
