import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
export default function GenreList({genre,onClick,onReset,currentGenre}) {
    // console.log(genre)
  return (
    <div>
       <ListGroup>
           <ListGroup.Item active={currentGenre===""?true:false} onClick={onReset}>ALL Genre</ListGroup.Item>
           {genre.map(genreDt=>
               <ListGroup.Item active={currentGenre===genreDt.name?true:false} onClick={()=>onClick(genreDt)} key={genreDt._id}>{genreDt.name}</ListGroup.Item>

           )}
    </ListGroup>
    </div>
  )
}
