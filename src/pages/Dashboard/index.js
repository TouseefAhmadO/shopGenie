import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { DocTitle } from '../../utility/docTitle'
import DashboardCarousel from './DashboardCarousel'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/actions';

const Dashboard = () => {
    document.title = DocTitle.dashboard;

    const [dealValue, setDealValue] = useState(0)
    const { products } = useSelector(state => state.ProductReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const ServicesItem = [
        {
            img: <LocalShippingOutlinedIcon />,
            title: "Free Shipping",
            des: "Free shipping on all order"
        },
        {
            img: <RotateRightOutlinedIcon />,
            title: "Support 24/7",
            des: "Free shipping on all order"
        },
        {
            img: <PaidOutlinedIcon />,
            title: "Money Return",
            des: "Free shipping on all order"
        },
        {
            img: <StarsOutlinedIcon />,
            title: "Order Discount",
            des: "Free shipping on all order"
        },
    ]

    const DealItems = ['New Arrivals', 'Best Sellers', 'Sale Items']

    const HandleDealClick = (idx) => {
        setDealValue(idx)
    }

    return (
        <div className={style.mainContainer}>
            <DashboardCarousel />
            <Container maxWidth="lg">
                <div className={style.servicesContainer}>
                    {ServicesItem?.map((item, index) => {
                        return (
                            <div key={index} className={style.ServicesItemStyle}>
                                <div style={{ height: "70px", width: "70px" }}>{item?.img}</div>
                                <div>
                                    <h1>{item?.title}</h1>
                                    <h2>{item?.des}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className={style.dealTitle}>
                    ______ DAILY DEALS! ______
                </h1>
                <div className={style.dealsContainer}>
                    {DealItems?.map((item, index) => {
                        return (
                            <h2
                                style={{
                                    color: dealValue === index ? "black" : "#555",
                                }}
                                key={index}
                                onClick={() => HandleDealClick(index)}
                            > {item}</h2>
                        )
                    })}
                </div>
                <div className={style.productMainContainer}>
                    {products?.length &&
                        products?.map((item, index) => {
                            return (
                                <div key={index} className={style.productContainer}>
                                    <div className={style.productInnerContainer}>
                                        <div className={style.productImg}>
                                            <img
                                                className={style.frontImg}
                                                src={item?.images?.length &&
                                                    require(`../../assets/products/${item?.images[0]}`)}
                                            />
                                            <img
                                                className={style.backImg}
                                                src={item?.images?.length &&
                                                    require(`../../assets/products/${item?.images[1]}`)}
                                            />
                                        </div>
                                        <h1 className={style.productTitle}>{item?.title}</h1>
                                        <h2 className={style.productPrice}>{item?.price}</h2>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </Container>
        </div>
    )
}

export default Dashboard
