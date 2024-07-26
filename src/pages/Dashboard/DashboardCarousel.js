import React from 'react'
import style from './style.module.scss'
import Carousel from 'react-material-ui-carousel'
import { Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { constRoute } from '../../utility/constRoute'
import shopping from '../../assets/shopping.png'
import shopping1 from '../../assets/shopping1.png'

const DashboardCarousel = () => {

    const navigation = useNavigate()

    const carouselData = [
        {
            name: "Smart Products",
            description: "Winter Offer 2024 Collection",
            img: shopping
        },
        {
            name: "Smart Products",
            description: "Summer Offer 2024 Collection",
            img: shopping1
        }
    ]

    const CarouselItem = (props) => {
        return (
            <div className={style.carouselContainer}>
                <Container maxWidth="lg" className={style.carouselItemContainer}>
                    <div className={style.contentStyle}>
                        <h1>{props?.item?.name}</h1>
                        <p>{props.item.description}</p>
                        <Button
                            className={style.btnStyle}
                            onClick={() => navigation(constRoute.collection)}
                        >
                            Shop Now
                        </Button>
                    </div>
                    <div className={style.pngContainer}>
                        <img src={props.item.img} height="100%" width="100%" />
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div>
            <Carousel
                navButtonsAlwaysVisible
                navButtonsProps={{
                    style: {
                        background: 'transparent',
                        color: "gray",
                    }
                }}
                indicators={false}
            >
                {
                    carouselData.map((item, i) => <CarouselItem key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

export default DashboardCarousel
