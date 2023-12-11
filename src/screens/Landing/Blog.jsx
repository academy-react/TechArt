
import React from 'react'
import { NavbarHeader } from '../../components/common/NavbarHeader/NavbarHeader'
import { Search } from '../../components/Search/Search'
import { CardHolder } from '../../components/News/CardHolder'
import { CustomButton } from '../../components/common/customElements/CustomButton'
import { Footer } from '../../components/common/Footer/Footer'


import imageBig from '../../assets/image/bigimage.png'

const onClickBtn = () => {
  return(
    <CardHolder />
  )
}

const Blog = () => {
  return (
    <div>
    <NavbarHeader />
    <div className="border-black mr-auto md:mr-12 lg:mr-52 xl:mr-72 ">
      <img src={imageBig} alt="img" />
    </div>
   

    <CardHolder />
 
    <button className='w-24 mx-auto text-sm font-medium bg-indigo-600 flex justify-center rounded-md border border-transparent py-2 px-4font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ' 
    onClick={onClickBtn}> مشاهده بیشتر 
    </button>
  
    <Footer />
    </div>
  )
}

export {Blog}