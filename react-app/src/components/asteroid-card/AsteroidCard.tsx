import { AsteroidCardButton } from "./AsteroidCardButton"
import { AsteroidCardData } from "./AsteroidCardData"
import { AsteroidCardImage } from "./AsteroidCardImage"
import style from "./card.module.scss"


interface AsteroidCardProps {
    isDangerous: boolean
    name: string
    distanceKm: number
    distanceMoon: number
    date: string
    radius: number
    isKilometers: boolean
}

export const AsteroidCard = (props: AsteroidCardProps)=>{

    const {isDangerous} = props

    return <div className={`${style.card} ${isDangerous ? style.dangerous : ""}`}>
        <AsteroidCardImage/>
        <AsteroidCardData/>
        <AsteroidCardButton/>
    </div>
}