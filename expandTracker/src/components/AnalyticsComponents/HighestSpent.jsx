import React, { useEffect, useMemo } from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { UseMainContext } from '../../../context/MainContext';

const HighestSpent = () => {

    const { activity, testPrice, highestPrice } = UseMainContext()

  return (
    <div className='highestspent'>
        <div className="spentLeft">
            <div>
                <FaArrowTrendUp size={30} />
            </div>
            <div className="spent_info">
                <h3>Highest Spent</h3>
                <span>date</span>
            </div>
        </div>

        <div className="spentRight">
            <b>{highestPrice}$</b>
        </div>  
        
    </div>
  )
}

export default HighestSpent