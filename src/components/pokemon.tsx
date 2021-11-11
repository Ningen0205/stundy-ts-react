
import React, { useState, useEffect } from "react";

type Props = {
    pokemonId: number
}

type PokemonType = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

const Pokemon: React.FunctionComponent<Props> = ({ pokemonId }) => {

    const [imgSrc, SetImgSrc] = useState('')
    const [types, setTypes] = useState<PokemonType[]>([])

    useEffect(() => {
        const fetchImgSrc = async() => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            const resJson = await res.json()

            setTypes(resJson.types)
            SetImgSrc(resJson.sprites.front_default)
        }

        fetchImgSrc()
    }, [pokemonId])

    return (
        <div className="pokemon">
            <img src={imgSrc} />
            <ul>
                {
                    types.length !== 0 ? types.map((v, i) => {
                        return <li key={i}>{v.type.name}</li>
                    }) : ''
                }
            </ul>
        </div>
    )
}

export default Pokemon