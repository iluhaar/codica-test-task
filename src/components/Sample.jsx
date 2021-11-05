import React from 'react'
import { useParams } from 'react-router'

const Sample = () => {
    
    let params = useParams();

    return (
        <div>
            This is a sample component {params.cityName}
        </div>
    )
}

export default Sample
