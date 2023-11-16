
import React, { useState } from 'react'

import { Card } from './Card'

const CardHolder = () => {
    const[newCard,setNewCard] = useState([]);




    return (
        <div className="CardHolder">
                <Card />
            
        </div>
    )
}

export {CardHolder}