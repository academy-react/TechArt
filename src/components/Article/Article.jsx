
import React from 'react'
import { TitleArticle } from './title/Title.Article'

import { CardHolder } from './Card/CardHolder'


const Article = () => {
    return (
        <div id='responsive' className=' w-5/6 flex flex-wrap mx-auto my-1 gap-0.5'>
                <TitleArticle />
                <CardHolder />
        </div>
    )
}

export {Article}