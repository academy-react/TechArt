
import React from 'react'
import { TitleArticle } from './title/Title.Article'
import { Card } from './Card/Card'


const Article = () => {
    return (
        <div className=' w-[600px] h-[450px] mx-auto'>
                <TitleArticle />
                <Card />
        </div>
    )
}

export {Article}