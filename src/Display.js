import React from 'react'

function Display({calculatedTip, total, people, handleResetBtn}) {
    const returnCurrencyAmount = (amount) =>
        new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
    
    return (
        <div className='display'>
            <div className='display-group'>
            <div className='display-row'>
                 <div className='display-label'>
                    <p className='header'>Tip Amount</p>
                    <p className='unit'>/ person</p>
                </div>
                    <p className='display-amount'>{returnCurrencyAmount(calculatedTip ? calculatedTip/people : 0)}</p>
                </div>

            <div className='display-row'>
                <div className='display-label'>
                    <p className='header'>Total</p>
                    <p className='unit'>/ person</p>
                </div>
                    <p className='display-amount'>{returnCurrencyAmount(total ? total : 0)}</p>
            </div>

            </div>
            {
                total ? (<button className='btn' onClick={handleResetBtn}>Reset</button>):
                (<button className='btn' disabled>Reset</button>)
            }
        </div>
    )
}

export default Display
