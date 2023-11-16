
    import React from 'react'

    import { Search } from '../Search/Search'
    
    // import imageBig from '../../assets/image/bigimage.png'
    import images from '../../assets/image/new.png'


    const categories = [
        {
        name: 'آموزش ریکت جی اس با استاد جدید ',
        href: '#',
        description: 'این قسمت از کتابخانه توسط فیسبوک و جامعه ای از توسعه دهندگان و به صورت انفرادی توسعه ونگهداری می شود  باشد ک رستگار باشید ',
        },
        {
        name: 'آموزش ریکت جی اس با استاد بحرالعلوم ',
        href: '#',
        description: 'این قسمت از کتابخانه توسط فیسبوک و جامعه ای از توسعه دهندگان و به صورت انفرادی توسعه ونگهداری می شود  باشد ک رستگار باشید ',
        },
        {
        name: 'آموزش ریکت جی اس با استاد جدید ',
        href: '#',
        description: 'این قسمت از کتابخانه توسط فیسبوک و جامعه ای از توسعه دهندگان و به صورت انفرادی توسعه ونگهداری می شود  باشد ک رستگار باشید ',
        },
        {
        name: 'آموزش ریکت جی اس با استاد اصغری ',
        href: '#',
        description: 'این قسمت از کتابخانه توسط فیسبوک و جامعه ای از توسعه دهندگان و به صورت انفرادی توسعه ونگهداری می شود  باشد ک رستگار باشید ',
        },
        {
        name: 'آموزش ریکت جی اس با استاد جدید ',
        href: '#',
        description: 'این قسمت از کتابخانه توسط فیسبوک و جامعه ای از توسعه دهندگان و به صورت انفرادی توسعه ونگهداری می شود  باشد ک رستگار باشید ',
        },
        {
        name: 'آموزش ریکت جی اس با استاد نظری ',
        href: '#',
        description: 'این قسمت از کتابخانه توسط فیسبوک و جامعه ای از توسعه دهندگان و به صورت انفرادی توسعه ونگهداری می شود  باشد ک رستگار باشید ',
        },
    
    
    ]
    
    const Card = () => {
        return (
        <div className="bg-white lg:px-40">
        
            <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8"> اخبار و مقالات  </h2>
            
    
            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 gap-y-20 ">
                {categories.map((category) => (
                <a key={category.name} href={category.href} className="group block">
                    <div 
                    aria-hidden="true"
                    className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                    >
                    <img
                        src={images}
                        alt='ima'
                        className="h-full w-full object-cover object-center"
                    />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                </a>
                ))}
            </div>
            </div>
        </div>
        )
    }
    
    

    export {Card}