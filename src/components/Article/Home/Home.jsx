

import React, { Fragment } from 'react'
import { Formik,Form,Field } from 'formik';

import { Card2Holder } from './Card2/Card2Holder';


import image from '../../../assets/image/Annot2.png';
import imageSearch from '../../../assets/image/serch.png';


const Home = () => {
    return (
        <Fragment>
            <Formik>
                
                    <div className=' w-full mx-8 '>
                        <div className=' w-[269px] pr-[17px] pt-[24px] ml-20 sm:mx-auto lg:mx-auto md:mr-26'> 
                        <img  src={image} alt="image" /> 
                        </div>
  
                            <Field className='px-[39px] border-solid border-2 ml-16 rounded-md sm:mx-auto' name='search' placeholder='عنوان مورد نظر....'  />
                                {/* <img className='ml-[12px]' src={imageSearch} alt="image" /> */}
                    
                        
                        <Card2Holder />
                    </div>
                    
                
            </Formik>
        </Fragment>
    );
};

export {Home}