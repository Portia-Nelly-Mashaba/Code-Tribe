
import React, { useStategit} from 'react';
import Dollar from './icon-dollar.svg'
import Person from './icon-person.svg'


function Form({bill, setBill, tip, setTip, people, setPeople, hasInteracted, setHasInteracted}) {
    const [isCustomSelected, setIsCustomSelected] = useState(false)

    const handleSelectedTip = (e) => {
        setTip(e.target.value);
        setIsCustomSelected(e.target.value == "" ? false : true);
    }
    
    return (
        <div className='form'>
            <div className='label-group'>
                <div className='label-wrapper'>
                    <label className='label' htmlFor='bill'>Bill</label>
                    <p className='error'></p>
                </div>
                <div className='number-wrapper'>
                    <input type='number' id='bill' value={bill} onInput={(e) => setBill(+e.target.value)} />
                    <img src={Dollar} aria-hidden='true' className='icon' />
                </div>
            </div>

            <div className='tip-section'>
                <p className='label'>Select Tip %</p>
                <div className='tip-amount-warpper'>
                    <div className='tip-amount'>
                        <input type='radio' className='tip-input'  name='tip' value= "5" onInput={handleSelectedTip} />
                        <label className='tip-btn' htmlFor='input1'>5%</label>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' className='tip-input'  name='tip' value= "10" onInput={handleSelectedTip} />
                        <label className='tip-btn' htmlFor='input2'>10%</label>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' className='tip-input' name='tip' value= "15" onInput={handleSelectedTip} />
                        <label className='tip-btn' htmlFor='input3'>15%</label>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' className='tip-input'  name='tip' value= "25" onInput={handleSelectedTip} />
                        <label className='tip-btn' htmlFor='input4'>25%</label>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' className='tip-input'  name='tip' value= "50" onInput={handleSelectedTip} />
                        <label className='tip-btn' htmlFor='input5'>50%</label>
                    </div>

                    <input type='number' name='tip' id='custom' className='tip-customer' onInput={handleSelectedTip} placeholder='custom'/>
                    
                </div>
            </div>


            <div className='label-group'>
                <div className='label-wrapper'> 
                <label className='label' htmlFor='people'>Number of People</label>
                    <p className='error'>{hasInteracted && people === 0 ? "Can't be zero" : ""}</p>
            </div>
                <div className='number-wrapper'>
                    <input
                        type='number'
                        className={`number-input ${hasInteracted && people === 0 ? 'error' : ''}`}
                        value={people} id='people' onChange={(e) => {setPeople(+e.target.value); setHasInteracted(true); }} />
                </div>        
            </div>

        </div>
    )
}

export default Form
