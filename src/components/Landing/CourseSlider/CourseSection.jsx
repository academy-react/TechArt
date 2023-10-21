import React from 'react'
import { Card } from '../../common/CourseCard/CourseCard'
import {products} from '../../../core/data/data'

const CourseSection = () => {
  return (
    <div>
      <Card product={products}/>
    </div>
  )
}

export  {CourseSection}
