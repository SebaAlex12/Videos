import React, { Component } from "react";
import { connect } from "react-redux";
import SelectListGroup from "../common/SelectListGroup";
import { addVideoFavourite } from "../../actions/videoActions";

class VideoCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CatId: ""
    };
    // console.log(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { video } = this.props;
    console.log("vidform", this.props);
    const data = {
      userId: this.props.userId,
      catId: this.state.catId,
      videoKey: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url
    };
    // console.log(data);
    this.props.addVideoFavourite(data);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { categories } = this.props;

    // console.log(categories);
    // console.log("vidcatform", this.state);

    let options = [{ label: "Wybierz kategorie", value: 0 }];

    categories.map(category => {
      options.push({ label: category.name, value: category._id });
    });

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group float-left" style={{ height: "35px" }}>
                <SelectListGroup
                  placeholder="Kategoria"
                  name="catId"
                  onChange={this.onChange}
                  options={options}
                  //   error={errors.catId}
                />
              </div>
              <button type="submit" className="btn btn-dark float-right">
                Dodaj
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  categories: state.video.categories
});

export default connect(
  mapStateToProps,
  { addVideoFavourite }
)(VideoCategoryForm);
