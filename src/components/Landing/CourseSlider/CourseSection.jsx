import React from 'react'
import { Card } from '../../CourseCard/CourseCard'
import {products} from '../../../core/data/data'

const CourseSection = () => {
  return (
    <div>
      <Card product={products}/>
    </div>
  )
}

export  {CourseSection}
