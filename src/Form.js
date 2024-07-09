import React from 'react'
import Dollar from './icon-dollar.svg'
import Person from './icon-person.svg'


function Form() {
    return (
        <div className='form'>
            <div className='label-group'>
                <label className='label' htmlFor='bill'>Bill</label>
                <input type='number' id='bill' />
                <img src={Dollar} arial-hidden='true' className='icon' />
            </div>

            <div className='tip-section'>
                <p className='label'>Select Tip %</p>
                <div className='tip-amount-warpper'>
                    <div className='tip-amount'>
                        <input type='radio' name='tip' value= "0.05" />
                        <div className='tip-btn'>5%</div>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' name='tip' value= "0.1" />
                        <div className='tip-btn'>10%</div>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' name='tip' value= "0.15" />
                        <div className='tip-btn'>15%</div>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' name='tip' value= "0.25" />
                        <div className='tip-btn'>25%</div>
                    </div>

                    <div className='tip-amount'>
                        <input type='radio' name='tip' value= "0.5" />
                        <div className='tip-btn'>50%</div>
                    </div>

                    <input type='number' className='tip-customer' />
                </div>
            </div>


            <div className='label-group'>
                <div className='label-wrapper'> 
                <label htmlFor='people'>Number of People</label>
                    <p>Error</p>
                </div>
                    
                    <input type='number' id='people' />
                    <img src={Person} arial-hidden='true' className='icon' />
            </div>

        </div>
    )
}

export default Form
