import React from 'react'

const ReserveTable = () => {
  return (
    <div className='reserve_table'>
        <h1>reserve your table</h1>
        <div className="table">
            <form action="numperOfPeople">    
                <select name="numberOfPeople" id="numberOfPeople">
                    <option value="">1 person</option>
                    <option value="">2 persons</option>
                    <option value="">3 persons</option>
                    <option value="">4 persons</option>
                </select>

                <input type="date" name='date'/>
            
                <select id="time">
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                </select>

                <input type="submit" value='BOOK A TABLE' />
            </form>

        </div>
    </div>
  )
}

export default ReserveTable