"use client"
import React from 'react'
import CardPopularProduct from './CardPopularProduct'
import CardSaleSammary from './CardSaleSammary'
import CardPurchaseSummery from './CardPurchaseSummery'
import CardExpenseSummary from './CardExpenseSummary'
import StatCard from './statCard'
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
      <CardPopularProduct/>
      <CardSaleSammary/>
      <CardPurchaseSummery/>
      <CardExpenseSummary/>

      <StatCard
      title='Customer & Expenses'
      primaryIcon={<Package className='text-blue-600 w-6 h-6'/>}
      dateRange='22 - 23 May 2025'
      details={[
        {title:"Customer Growth",amount:"175.00",
        changePercentage:131,
        IconComponent:TrendingUp
      },
        {title:"Expenses",
          amount:"10.00",
        changePercentage:-56,
        IconComponent:TrendingDown
      }
      ]}
      />
      <StatCard
      title='Dues & Pending Orders'
      primaryIcon={<CheckCircle className='text-blue-600 w-6 h-6'/>}
      dateRange='22 - 23 May 2025'
      details={[
        {title:"Customer Growth",
        amount:"250.00",
        changePercentage:131,
        IconComponent:TrendingUp
      },
        {title:"Pending Orders",
          amount:"147.00",
        changePercentage:-56,
        IconComponent:TrendingDown
      }
      ]}
      />
      <StatCard
      title='Sales & Discount'
      primaryIcon={<Tag className='text-blue-600 w-6 h-6'/>}
      dateRange='22 - 23 May 2025'
      details={[
        {title:"Sales",
        amount:"1000.00",
        changePercentage:20,
        IconComponent:TrendingUp
      },
        {title:"Discount",
          amount:"200.00",
        changePercentage:-10,
        IconComponent:TrendingDown
      }
      ]}
      />
  
        
    </div>
  )
}

export default Dashboard
