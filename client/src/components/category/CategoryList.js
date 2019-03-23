import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getVideoUserCategories,
  getVideoUserCategory
} from "../../actions/videoActions";
import CategoryItem from "./CategoryItem";
import Spinner from "../common/spinner";

class CategoryList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getVideoUserCategories();
  }
  render() {
    const { categories } = this.props;
    // console.log(categories);
    let categoriesContent;

    if (categories === null || categories.length === 0) {
      categoriesContent = <Spinner />;
    } else {
      categoriesContent = categories.map(category => (
        <CategoryItem key={category._id} category={category} />
      ));
    }

    return <div className="mb-3">{categoriesContent}</div>;
  }
}

const mapStateToProps = state => ({
  categories: state.video.categories
});

export default connect(
  mapStateToProps,
  { getVideoUserCategories, getVideoUserCategory }
)(CategoryList);
