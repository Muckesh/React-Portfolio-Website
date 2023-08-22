import React from 'react'

const CategoryButton = ({category, classname, onChangeCategory}) => {
  return (
    <button className={classname} onClick={()=>onChangeCategory(category)}>{category}</button>
  )
}

export default CategoryButton