import React from "react"
import PropTypes from "prop-types"

const STYLES = [
  'category--default',
  'category--active',
  'category--inPost',
  'category--inArticle'
]

const Category = ({
category,
textpart,
catStyle
}) => {


  const checkCatStyle = STYLES.includes(catStyle)
  ? catStyle : STYLES[0]
  return (
    <a className = {`category ${checkCatStyle}`} href={`/posts?category=${category}`}>{textpart}</a>
  );
}


export default Category
