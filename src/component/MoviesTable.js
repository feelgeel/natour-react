import React, { useState, useEffect } from 'react'
import C_Table from '../component/C_Table';
import C_Pagination from '../component/Pagination';
import {getMovies} from "../services/fakeMovieService"
import {getGenres} from "../services/fakeGenreService"
import { paginate } from '../utils/paginate';
import GenreList from '../component/GenreList';
import { genreFilter } from '../utils/genreFilter';
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchFilter } from '../utils/SearchFilter';
import Form from 'react-bootstrap/Form';

export default function MoviesTable() {
    const [movies,setmovies]=useState()
    const [filteredMovies,setfilteredMovies]=useState(getMovies)
    const [genre,setgenre]=useState(getGenres)
    const [currentPage,setcurrentPage]=useState(1)
    const [currentGenre,setcurrentGenre]=useState("")
    const [pageSize,setpageSize]=useState(4)
    const [pages,setpages]=useState([])
    const [searchDt,setsearchDt]=useState("")
    const [sortColumn,setsortColumn]=useState({type:"title",order:'asc'})
  // console.log(searchDt)
  // console.log(movies.length)
  useEffect(()=>{
    setmovies(getMovies())
    handleFilterMovies(currentPage,currentGenre,sortColumn,getMovies(),searchDt)
    handlepages(filteredMovies)
  },[])
  const tableHeader=[
    "title","genre.name",
  "numberInStock",
  "dailyRentalRate",]
  const handlepages=(movies)=>{
    const pageCount=Math.ceil(movies.length/pageSize);
  // console.log("pageCount",pageCount)
  
    if(pageCount===1) 
    {
      setpages([])
    }else{
      let newPages=_.range(1,pageCount+1)
      setpages(newPages)
  
    }
  }
  
     const handlePagination=(index)=>{
    setcurrentPage(index)
    handleFilterMovies(index,currentGenre,sortColumn,movies,searchDt)
  
    }
    const handleGenre=(genre)=>{
      // console.log(genre.name)
      setcurrentGenre(genre.name)
    handleFilterMovies(currentPage,genre.name,sortColumn,movies,searchDt)
    handlepages(filteredMovies)
  
    }
    const handleAllGenre=()=>{
      setcurrentGenre("")
    handleFilterMovies(currentPage,"",sortColumn,movies,searchDt)
    handlepages(movies)
  
    }
    const handleDelete=(movie)=>{
      let newMovies=[...movies]
      let movieIndex=movies.findIndex(m=>m._id===movie._id)
      newMovies.splice(movieIndex,1)
      setmovies(newMovies)
      handleFilterMovies(currentPage,currentGenre,sortColumn,newMovies,searchDt)
      handlepages(newMovies)
    // console.log(newMovies.length)
  
    }
    const handleLike=(movie)=>{
      let newMovies=[...movies]
      let movieIndex=movies.findIndex(m=>m._id===movie._id)
      newMovies[movieIndex].liked= !newMovies[movieIndex].liked
      setmovies(newMovies)
    }
     const handlePrev=()=>{
      let newCurrentPage=currentPage
       if(currentPage!==1){
          newCurrentPage=currentPage-1
        setcurrentPage(newCurrentPage)
       }
    }
     const handleNext=()=>{
      let newCurrentPage=currentPage
      if(currentPage!==1){
       newCurrentPage=currentPage-1
       setcurrentPage(newCurrentPage)
      }
    }
     const handleSort=(type)=>{
       let newSortColumn={...sortColumn}
       if(newSortColumn.type===type){
        newSortColumn.order=(newSortColumn.order==="asc")?"desc":"asc"
       }else{
        newSortColumn.type=type
        newSortColumn.order='asc'
      }
      setsortColumn(newSortColumn)
        handleFilterMovies(currentPage,currentGenre,newSortColumn,movies,searchDt)
      }
  
    const handleFilterMovies=(currentPage,currentGenre,sortColumn,movies,searchDt)=>{
      let SearchMovies=searchFilter(movies,searchDt)
      let GenreMovies=genreFilter(SearchMovies,currentGenre)
      let sortMovies=_.orderBy(GenreMovies,[sortColumn.type],[sortColumn.order])
      let paginatedMovies=paginate(sortMovies,currentPage,pageSize)
      setfilteredMovies(paginatedMovies)
    }
    const renderSortIcon=(dt)=>{
      if(dt!==sortColumn.type) return null
      if(sortColumn.order==="asc") return <FontAwesomeIcon icon={['fas', 'sort-up']} />
      if(sortColumn.order==="desc") return <FontAwesomeIcon icon={['fas', 'sort-down']} />
  
      }
       const handleSearch=(event)=>{
         setsearchDt(event.target.value)
         handleFilterMovies(currentPage,currentGenre,sortColumn,movies,event.target.value)
         if(event.target.value){
           handlepages(filteredMovies)
          }else handlepages(movies)
      }
  return (
    <div>
       <GenreList
     genre={genre}
     onClick={(dt)=>handleGenre(dt)}
     onReset={()=>handleAllGenre()}
     currentGenre={currentGenre}
     />
     <Form.Control
                  style={{padding:"10px"}}
                  id="search"
                  type="text"
                  placeholder="search"
                  onChange={handleSearch}
                    />
     <C_Table
     data={filteredMovies}
     tableHeader={tableHeader}
     noData="there is no movies in Db "
     setmovies={setmovies}
     onDelete={(dt)=>handleDelete(dt)}
     onLike={(dt)=>handleLike(dt)}
     onSort={(dt)=>handleSort(dt)}
     renderSortIcon={(dt)=>renderSortIcon(dt)}
    //  handleSearch={handleSearch}
     />
     <C_Pagination pages={pages} 
     onClick={(dt)=>handlePagination(dt)}
      currentPage={currentPage}
      onPrev={handlePrev}
      onNext={handleNext}
      />
    </div>
  )
}
