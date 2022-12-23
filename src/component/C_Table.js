import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Likes from './Likes';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';


export default function C_Table({
  data,tableHeader,noData="",onDelete,onLike,
  onSort,renderSortIcon}) {

if(data.length===0)
return <p>{noData}</p>
  return (
    <>
      <p>showing {data.length}</p>
     
      <Table striped bordered hover>
      <thead>
        <tr>
          {tableHeader.map(th=><th key={th} onClick={()=>onSort(th)} >
          {(th==="genre.name"?"genre":th)}{renderSortIcon(th)}</th>)}
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {data.map(movie=>
            <tr key={movie._id} >
              <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><Likes onClick={()=>onLike(movie)} status={movie.liked}/></td>
              <td><Button onClick={()=>onDelete(movie)} variant="danger"  size="sm">delete</Button></td>
            </tr>
       )}
      </tbody>
    </Table>
    </>
  )
}
