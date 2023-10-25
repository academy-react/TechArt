

import React, { Fragment } from 'react'
import { Card } from './Card'
import { CardTitle } from './CardTitle'


const CardHolder = () => {
    return (
        <Fragment>
            <div className='w-full'>
                <CardTitle />
                <Card />
        
            </div>
        </Fragment>
    )
}

export {CardHolder}