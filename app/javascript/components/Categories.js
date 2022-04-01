import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/newcategories.scss'

class Categories extends React.Component {



  render() {
    return (
      <div className="categories_island">
        <a href={`/posts`} className="category">Все</a>
        {this.props.categories.map(category => (
          <a key={category.id} href={`/posts?category=${category.id}`}
           className="category">
          {category.name}
          </a>
        ))}
      </div>
    );
  }
}
Categories.propTypes = {
  categories: PropTypes.array
}

export default Categories