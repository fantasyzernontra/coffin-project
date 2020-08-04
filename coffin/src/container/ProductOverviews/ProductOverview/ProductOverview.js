import React, { useState, useEffect } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import { Card, Spinner } from 'react-bootstrap'
import CardText from '../../../components/CardText/CardText'
import Modal from '../../../components/Modal/Modal'

import Axios from '../../../Axios/Axios'

import styles from './ProductOverview.module.css'

const ProductOverview = props => {

    const [Coffin, setCoffin] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [ModalElements, setModalElements] = useState({
        id: '',
        name: '',
        description: '',
        materials: '',
        price: ''
    })

    const OpenModalHandler = (id, name, description, materials, price) => {
        setShowModal(true)
        setModalElements({
            id, name, description, materials, price
        })
    }

    const CloseModalHandler = () => {
        setShowModal(false)
    }

    useEffect(() => {

        let AgeType = props.ageType === 'ผู้ใหญ่' ? 'Adult' : 'Child'
        let type = props.type === 'มาตรฐาน' ? 'standard' : 'modern'
        let gender = props.gender !== 'ทุกเพศ' ? '' : '/gender'

        console.log(`/${type}${AgeType}${gender}`)
        Axios.get(`/${type}${AgeType}${gender}`)
            .then(response => {
                console.log(response.data)
                setCoffin(response.data)
            })
            .catch(err => {
                console.log(err)
                setCoffin(null)
            })


    }, [props.ageType, props.gender, props.type])

    let Products = null

    if (Coffin) {
        Products = Coffin.map((coffin) => {
            return (
                <Card
                    key={coffin._id}
                    text="white"
                    style={{ width: '100%', backgroundImage: 'https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80' }}
                    onClick={OpenModalHandler.bind(this, coffin._id, coffin.name, coffin.description, coffin.materials, coffin.price)}>
                    <Card.Img
                        src="https://images.unsplash.com/photo-1594882798546-724755e85978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                    />
                    <Card.ImgOverlay>
                        <CardText>{coffin.name} <br /> {coffin.price} บาท</CardText>
                    </Card.ImgOverlay>
                </Card>
            )
        })
    }
    else {
        Products = (
            <div className={styles.Spinner}>
                <Spinner animation="border" />
            </div>
        )
    }

    return (
        <Aux>
            <div className={styles.cardContainer}>
                {Products}
                <Modal
                    show={showModal}
                    onHide={CloseModalHandler}
                    name={ModalElements.name}
                    description={ModalElements.description}
                    materials={ModalElements.materials}
                    price={ModalElements.price}
                />
            </div>
        </Aux >
    )

}

export default ProductOverview