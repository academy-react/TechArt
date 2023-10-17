

import React, { Fragment } from 'react'
import { Formik,Form,Field } from 'formik';

import { Card2 } from './Card2/Card2';

// import ReactArt from '../../../assets/image/Articles.png';
import image from '../../../assets/image/Annot2.png';
import imageSearch from '../../../assets/image/serch.png';

const Home = () => {
    return (
        <Fragment>
            <Formik>
                
                    <div className=' w-[600px] mx-auto '>
                        <div className=' w-[269px] h-[230px] pr-[17px] pt-[24px] mx-auto '> 
                        <img  src={image} alt="image" /> 
                        </div>
                        <div className='flex items-stretch '>
                            <Field className='w-[293px] h-[30px] border-solid border-2 mr-[142px] rounded-md' name='search' placeholder='عنوان مورد نظر....'  />
                                {/* <img className='ml-[12px]' src={imageSearch} alt="image" /> */}
                    
                        </div>
                        <Card2 />
                    </div>
                    
                
            </Formik>
        </Fragment>
    );
};

export {Home}