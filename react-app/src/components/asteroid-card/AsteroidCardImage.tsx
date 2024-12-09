import {ReactComponent as AsteroidBig} from "../../assets/asteroid-big.svg"
import {ReactComponent as AsteroidMedium} from "../../assets/asteroid-medium.svg"

export const AsteroidCardImage = (props: {radius: number})=>{

    const {radius} = props
    return <>{
        radius > 150 ? <AsteroidBig/> : <AsteroidMedium/>
    }</>
}