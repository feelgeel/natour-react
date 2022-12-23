import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from "prop-types"

export default function C_Pagination({pages,onClick,currentPage,onPrev,onNext}) {
  let paginate=false;
  // console.log("pages",pages)
  pages.length!==0?paginate=true:paginate=false
  // console.log("paginate",paginate)
  return (
    <>
       {paginate&&<Pagination>
      <Pagination.Prev onClick={onPrev} />
      {pages.map((dt,index)=>{
          return<Pagination.Item 
          active={currentPage===dt?true:false}
          onClick={()=>onClick(dt)} key={dt}>{dt}</Pagination.Item>
      })}
      {/* <Pagination.Ellipsis /> */}
      <Pagination.Next onClick={onNext} />
      </Pagination>}
    </>
  )
}
C_Pagination.propTypes={
  pages:PropTypes.array.isRequired,
    onClick:PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
}
