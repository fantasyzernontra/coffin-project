import React, { useState, useEffect } from 'react'

import Aux from '../../hoc/Aux/Aux'
import ProductOverview from './ProductOverview/ProductOverview'

import styles from './Productoverviews.module.css'

const ProductOverviews = props => {

    const [ageType, setAgeType] = useState(null)
    const [gender, setGender] = useState(null)
    const [type, setType] = useState(null)

    useEffect(() => {
        setAgeType(props.location.state.ageType)
        setGender(props.location.state.gender)
        setType(props.location.state.type)
    }, [props.location.state.ageType, props.location.state.gender, props.location.state.type])

        return (
            <Aux>
                <div className={styles.container}>
                    <h2>โลงศพสำหรับ{ageType} {gender} - {type}</h2>
                    <ProductOverview
                        ageType={ageType}
                        gender={gender}
                        type={type}
                    />
                </div>
            </Aux>
        )

    

}

export default ProductOverviews
