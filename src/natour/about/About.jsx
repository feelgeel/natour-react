import React from 'react'

export default function About() {
  return (
    <div className='about'>
        <h2 className="h-secondary about-heading">
            excting tours for adventuriouse people
        </h2>
        <div className="about-content">
            <div className="left-side">
               <h3 className="about-content-heading">
                you are going to fall in love with nature
               </h3>
               <p className="about-content-paragraph">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
                Voluptatum ex fugiat autem enim eum deserunt nemo quos
                 consequuntur quaerat 
               nihil velit numquam iure tenetur eaque voluptate, fuga repudiandae beatae. Ab?</p>
               <h3 className="about-content-heading">
                live adventures like u never have before
               </h3>
               <p className="about-content-paragraph">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
                Voluptatum ex fugiat autem enim eum deserunt nemo quos
                 consequuntur quaerat 
               nihil velit numquam iure tenetur eaque voluptate, fuga repudiandae beatae. Ab?</p>
               <a href="" className="btn-text">learn more &rarr;</a>
            </div>
            <div className="right-side">
                <div  className="right-side-pic pic1" />
                <div  className="right-side-pic pic2" />
                <div  className="right-side-pic pic3" />
            </div>

        </div>
      
    </div>
  )
}
