import React, { FC, useState } from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'

const Paginator:FC<PropsType> = React.memo(({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }
    
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize
    return (   
    <div className={s.paginatorPage}>
        { portionNumber > 1 && 
        <button onClick={() => { setPortionNumber(portionNumber-1)}}>PREV</button>}
        { pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map( p => { return <span key={p} className={ cn(
                {[s.selectedPage] : currentPage === p }, s.pageNumber )} 
                onClick={() => {onPageChanged(p)}}>{p}</span>})
        }
        {portionCount > portionNumber && 
            <button onClick={() => { setPortionNumber(portionNumber + 1)}} >NEXT</button>}

    </div>)
})

export default Paginator

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged:(pageNumber: number) => void
    portionSize?: number 
}