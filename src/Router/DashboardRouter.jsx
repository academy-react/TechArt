
import React from 'react'
import { SidebarLayouts } from '../components/SidebarLayouts/SidebarLayouts'
import { CardHolder } from '../components/Card/CardHolder'

const DashboardRouter = [

  {
    path: "/dashboard",
    element: <SidebarLayouts/>,
  },
  {
    path: "/Card",
    element: <CardHolder/>,
  },
  
]


export {DashboardRouter}