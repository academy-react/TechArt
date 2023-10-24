

import React, { Fragment } from 'react'
import { Card } from './Card'


const CardHolder = () => {
    return (
        <Fragment>
            <div className='w-full border-4 border-indigo-500/100	'>
            <Card />
          
            </div>
        </Fragment>
    )
}

export {CardHolder}