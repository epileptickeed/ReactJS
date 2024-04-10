import React, { useEffect, useRef } from 'react'
import { setSortId } from '../redux/slices/sortSlice'
import { setPopUp } from '../redux/slices/popUpSlice'
import { useSelector, useDispatch } from 'react-redux'

const Sort = () => {
    const dispatch = useDispatch()

    const sortArr = ['популярности', 'цене', 'алфавиту']
    const popUpRef = useRef()

    const sortId = useSelector(state => state.sort.sortId)
    const popUp = useSelector(state => state.popUp.popUp)
    
    const sortHandler = (id) => {
        dispatch(setSortId(id))
    }

    useEffect(() => {
        function handler(e){
        if(!popUpRef.current?.contains(e.target)){
                dispatch(setPopUp(false))
            }    
        }

        document.addEventListener('mousedown', handler)

        return() => document.removeEventListener('mousedown', handler)
    }, [])

  return (
    <div>
        <div>
            Сортировка по: <span onClick={() => dispatch(setPopUp(!popUp))} className='sortArray'>{sortArr[sortId]}</span>
            {popUp && (
                <div ref={popUpRef} className={'popUp'}> 
                    {sortArr.map((item, i) => {
                        return ( <p key={i}
                                    onClick={() => sortHandler(i)}
                                    className={sortId === i ? 'sortActive' : ''}>{item}</p> )
                    })}
                </div>
            )}
            
        </div>
    </div>
  )
}

export default Sort