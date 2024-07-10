import React, { useState, useEffect} from 'react';
import './App.css';
import Logo from './logo.svg';
import Display from './Display';
import Form from './Form';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState ('');
  const [calculatedTip, setCalculatedTip] = useState (0);
  const [total, setTotal] = useState (0);

  useEffect(() => {
    console.table({bill, tip, people})
    if(bill>0 && tip>0 && people>0){
      calculatedTip(bill * (tip /100));
      total (calculatedTip + bill);
    }
  }, [bill, tip, people, calculatedTip])

  const handleResetBtn = (e) =>{
    console.log('reseted');
  }

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
          />
        <Display
          total={total}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  );
}

export default App;
