import React from 'react'
import style from './style.module.scss'
import { Button, Container, TextField } from '@mui/material'

const Footer = () => {

  const FooterItems = [
    {
      name: "ABOUT US",
      data: ["About us", "Store location", "Contact", "Order tracking"]
    },
    {
      name: "USEFUL LINKS",
      data: ["Returns", "Support Policy", "Size guide", "FAQs"]
    },
    {
      name: "FOLLOW US",
      data: ["Facebook", "Instagram", "Twitter", "Youtube"]
    },
    {
      name: "SUBSCRIBE",
      data: []
    },
  ]
  return (
    <div className={style.mainContainer}>
      <Container maxWidth="lg" className={style.containerStyle}>
        <div className={style.copyRightStyle}>
          <h1>ShopGenie</h1>
          <p>&copy; 2024 ShopGenie All Rights Reserved</p>
        </div>
        {FooterItems?.map((item, index) => {
          return (
            <div
              className={style.footerContainer}
              key={index}>
              <h1>{item?.name}</h1>
              {item?.data?.length > 0 ?
                item?.data?.map((itm, idx) => {
                  return (
                    <a href='/' key={idx}>{itm}</a>
                  )
                }) :
                <div>
                  <p>Get E-mail updates about our latest <br /> shop and special offers.</p>
                  <TextField label="Enter your email address..." variant="standard" color="secondary" />
                  <Button>SUBSCRIBE</Button>
                </div>
              }
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default Footer
