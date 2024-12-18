import { memo } from "react"
import { AsteroidCardProps } from "./AsteroidCard"
import style from "./card.module.scss"

export const AsteroidCardData = memo((props: Omit<AsteroidCardProps, "isDangerous">)=>{

    const {name, distanceKm, distanceMoon, radius, date, isKilometers} = props
return <div className={style.data}>
    <div className={style.name}>Name {name}</div>
    <div>
    <div className={style.prop}><span>Date</span> <span>{date}</span></div>
    <div className={style.prop}><span>Distance</span> <span>{isKilometers ? `${distanceKm} km` : `${distanceMoon} moon dist`}</span></div>
    <div className={style.prop}><span>Radius</span> <span>{radius}</span></div></div>
</div>
})

AsteroidCardData.displayName = "AsteroidCardData"