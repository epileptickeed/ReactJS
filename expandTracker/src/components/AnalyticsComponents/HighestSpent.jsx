import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

const HighestSpent = () => {
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
            price
        </div>  
        
    </div>
  )
}

export default HighestSpent