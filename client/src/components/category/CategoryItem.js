import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideoUserCategory } from "../../actions/videoActions";

class CategoryItem extends Component {
  setCurrent = () => {
    const { category } = this.props;
    this.props.getVideoUserCategory(category._id);
  };
  render() {
    const { category, currentCategory } = this.props;
    let className = "btn btn-primary ml-2 mr-2 mb-2";

    className += currentCategory._id === category._id ? " btn-success" : "";

    return (
      <button type="button" className={className} onClick={this.setCurrent}>
        {category.name} <span className="badge badge-light">4</span>
      </button>
    );
  }
}

const mapStateToProps = state => ({
  currentCategory: state.video.category
});

export default connect(
  mapStateToProps,
  { getVideoUserCategory }
)(CategoryItem);
