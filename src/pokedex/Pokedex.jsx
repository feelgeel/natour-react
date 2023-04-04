import React, { Component } from 'react'
import PokeCard from './PokeCard'

export default class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 4,
                    name: "charmender",
                    type: "fire",
                    exp: 62,
                }

            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.cards.map(dt => (
                    <PokeCard
                    data={dt}
                    />
                ))
                }
            </div>
        )
    }
}
