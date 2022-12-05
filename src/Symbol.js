import React from 'react'
import {FaTimes , FaHourglassStart , FaRegCircle} from 'react-icons/fa'

function Symbol({player}) {
    switch(player)
    {
        case "circle" : 
            return <FaRegCircle/>

        case "cross" : 
            return <FaTimes/>

        default: 
            return <FaHourglassStart />
    }
    
}

export default Symbol

