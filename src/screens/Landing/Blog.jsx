
import React from 'react'
import { NavbarHeader } from '../../components/common/NavbarHeader/NavbarHeader'
import { Search } from '../../components/Search/Search'
import { CardHolder } from '../../components/News/CardHolder'
import { CustomButton } from '../../components/common/customElements/CustomButton'
import { Footer } from '../../components/common/Footer/Footer'


import imageBig from '../../assets/image/bigimage.png'



const Blog = () => {
  return (
    <div>
    <NavbarHeader />
    <div className="border-black mr-72 ">
    <img src={imageBig} alt="img" />
    </div>
    <div className='w-5/6 mx-auto'><Search/></div>
    <CardHolder />
    <div className='w-16 mx-auto text-black'><CustomButton> مشاهده ی بیشتر </CustomButton> </div>
    <Footer />
    </div>
  )
}

export {Blog}