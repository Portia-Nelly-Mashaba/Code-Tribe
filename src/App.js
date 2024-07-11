import React, { useState, useEffect } from 'react';
import './App.css';
import Logo from './logo.svg';
import Display from './Display';
import Form from './Form';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    console.table({ bill, tip, people });
    if (bill > 0 && tip > 0 && people > 0) {
      const tipAmount = bill * (tip / 100);
      setCalculatedTip(tipAmount);
      const perPersonTotal = (bill + tipAmount) / people;
      setTotal(perPersonTotal);
    }
  }, [bill, tip, people]);

  const handleResetBtn = (e) => {
    setBill("");
    setPeople("");
    setTip("");
    setCalculatedTip(0);
    setTotal(0);
    setHasInteracted(false);
  };

  return (
    <div className="wrapper">
      <img src={Logo} alt='Splitter Logo' />
      <div className='container'>
        <Form
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
          hasInteracted={hasInteracted}
          setHasInteracted={setHasInteracted}
        />
        <Display
          total={total}
          people={people}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  );
}

export default App;
