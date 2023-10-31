
import React from 'react'

import { Calendar } from './Calendar'

import { FcVoicePresentation ,FcSalesPerformance , FcLike} from "react-icons/fc";


        const features = [
        {
            name: 'تعداد دوره ی مورد علاقه',
            description:
            ' همه ی دوره های  آموزشگاه اعم از دوره های فرانت اند که شامل ui ux و ریکت می باشد و دوره ی بکند ب طور کاملا خاص و ویژه',
            href: '#',
            icon: FcLike,
        },
        {
            name: 'پرداخت های شما ' ,
            description:
            'با احترام قابل نمایش می باشد تعداد دوره های پرداخت شده توسط شما  و تعداد دوره ی پرداخت نشده ی شمادانش پژوی گرامی ',
            href: '#',
            icon: FcSalesPerformance,
        },
        {
            name: 'تعداد دوره  گذرانده شده شما',
            description:
            '  تعداد 120 دوره آموزشی جدید برای فرانت اند دوره های ui و ux  برای بروز بودن شما دانش پژوی عزیز و ریکت جی اس ایکس  ',
            href: '#',
            icon: FcVoicePresentation,
        },
        ]
        
    
        const Dashboard = () => {
            return (
            <div className="bg-white ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Calendar />
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-4 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                    <div key={feature.name} className="flex flex-col mb-20 border-2 border-neutral-300 rounded-2xl p-3">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-black">
                        <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                        {feature.name}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                        <p className="mt-6">
                            <a href={feature.href} className="text-base font-semibold leading-7 text-indigo-600">
                            Learn more <span aria-hidden="true">→</span>
                            </a>
                        </p>
                        </dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
            </div>
        )
        }
        



    export {Dashboard}