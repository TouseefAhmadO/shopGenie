import React from 'react'
import { DocTitle } from '../../utility/docTitle';

const Collection = () => {
  document.title = DocTitle.collection;
  return (
    <div>
      <h1>Collection</h1>
    </div>
  )
}

export default Collection
