import React from 'react'
import Card from '../card/Card'

export default function Tours() {
    return (
        <div className='tours'>
            <h2 className="h-secondary">Most popular tours</h2>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
            <a href="#" class="btn btn-green tours-btn">Discover all tours</a>
        </div>
    )
}
