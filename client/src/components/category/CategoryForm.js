import React, { Component } from "react";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { addVideoUserCategory } from "../../actions/videoActions";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showForm: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    if (this.state.name.length > 0) {
      const catData = {
        userId: this.props.userId,
        name: this.state.name
      };
      this.props.addVideoUserCategory(catData);
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const formContent = (
      <div className="card-body">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <TextFieldGroup
              placeholder="Nowa kategoria"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              // error={errors.name}
            />
          </div>
          <button type="submit" className="btn btn-dark float-right">
            Dodaj
          </button>
        </form>
      </div>
    );

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <button
            type="button"
            className="btn btn-success mb-2 pull-right"
            onClick={() => {
              this.setState({
                showForm: !this.state.showForm
              });
            }}
          >
            dodaj kategorie
          </button>
          {this.state.showForm ? formContent : null}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addVideoUserCategory }
)(CategoryForm);
