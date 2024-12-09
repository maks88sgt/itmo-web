import type { Dispatch, SetStateAction } from "react"

export const AppHeader = ({setIsAsteroids}: {setIsAsteroids: Dispatch<SetStateAction<boolean>>})=>{
    return <><span onClick={()=>setIsAsteroids(true)}>Asteroids</span>
    <span onClick={()=>setIsAsteroids(false)}>Destroyment</span></>
}