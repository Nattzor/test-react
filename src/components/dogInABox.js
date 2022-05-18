import Box from '../assets/Box.jpg'
import MDog from '../assets/golden.jpeg'
import NDog from '../assets/basenji.jpeg'
import { useState } from 'react'

function DogInABox(){
    const [toggleBox, setToggleBox] = useState(true)
function toggleBoxes(){
    setToggleBox(!toggleBox)
}
function ADog() {
    const Image = Math.floor(Math.random() * 2)
    if (Image === 0) {
        return (MDog)
    }else return (NDog)
}
return (<img onClick={toggleBoxes} src={toggleBox ? Box : ADog()} alt="Box" width="500"></img>)
}

export default DogInABox