
import React from 'react'

const ExpCategoryButton = ({category, classname, onChangeExpCategory}) => {
  return (
    <button className={classname} onClick={()=>onChangeExpCategory(category)}>{category}</button>
  )
}

export default ExpCategoryButton