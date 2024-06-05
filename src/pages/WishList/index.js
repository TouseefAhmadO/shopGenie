import React from 'react'
import style from './style.module.scss'
import { DocTitle } from '../../utility/docTitle'

const WishList = () => {
  document.title = DocTitle.wishList
  return (
    <div>
      <h1>WishList</h1>
    </div>
  )
}

export default WishList
