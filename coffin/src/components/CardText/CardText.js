import React from 'react'

import Aux from '../../hoc/Aux/Aux'

import styles from './CardText.module.css'

const CardText = props => {
    return (
        <Aux>
            <div className={styles.CardTextContainer}>
                <div className={styles.Text}>{props.children}</div>
            </div>
        </Aux>
    )
}

export default CardText