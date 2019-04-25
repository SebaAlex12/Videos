import React, { Component } from "react";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";
import { getSettings, updateSettings } from "../../actions/settingActions";

class SettingForm extends Component {
  constructor(props) {
    super(props);

    this.props.getSettings();

    this.state = {
      userId: props.userId,
      settings: {
        term: "songs",
        amount: 15,
        termVisible: true,
        amountVisible: true
      },
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    if (this.props.settings) {
      this.state = {
        settings: this.props.settings
      };
    }

    console.log("constructor", this.props);
  }

  onSubmit(e) {
    e.preventDefault();

    // const data = {
    //   userId: this.state.userId ? this.state.userId : false,
    //   term: this.state.term ? this.state.term : false,
    //   amount: this.state.amount ? this.state.amount : false,
    //   termVisible: this.state.termVisible ? this.state.termVisible : false,
    //   amountVisible: this.state.amountVisible ? this.state.amountVisible : false
    // };

    console.log("submit", this.state);

    const data = {
      userId: this.state.userId ? this.state.userId : false,
      settings: {
        term: this.state.settings.term ? this.state.settings.term : false,
        amount: this.state.settings.amount ? this.state.settings.amount : false,
        termVisible: this.state.settings.termVisible
          ? this.state.settings.termVisible
          : false,
        amountVisible: this.state.settings.amountVisible
          ? this.state.settings.amountVisible
          : false
      }
    };

    // console.log("update", data);
    this.props.updateSettings(data);
    this.setState({ data });
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("derived state from props - props", props);
  //   console.log("derived state from props - state", state);
  //   if (props.settings !== undefined) {
  //     return {
  //       term: props.settings.term
  //     };
  //   }
  //   return true;
  // }

  onChange(e) {
    console.log("target", e.target.name, e.target.value);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({
      settings: { ...this.state.settings, [e.target.name]: value }
    });

    console.log("target all state", this.state);
  }

  componentDidMount() {
    console.log("didmount");
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.settings) {
  //     console.log(nextProps);
  //     const { youtube } = nextProps.settings;

  //     this.setState({
  //       term: youtube.term,
  //       amount: youtube.amount,
  //       termUserVisible: youtube.visible.term,
  //       amountUserVisible: youtube.visible.amount
  //     });
  //   }
  // }

  render() {
    console.log("rener", this.props);
    // console.log("render state", this.state);
    const { settings } = this.state;

    if (this.props.settings) {
    } else {
      return "loading...";
    }

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Ustawienia</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Domyślna fraza"
                  name="term"
                  value={settings.term}
                  onChange={this.onChange}
                  //   error={errors.term}
                />
              </div>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Domyślna ilość rekordów"
                  name="amount"
                  value={settings.amount}
                  onChange={this.onChange}
                  //   error={errors.amount}
                />
              </div>
              <div className="form-group">
                <div className="label label-default mr-4">Widoczność</div>
                <div className="custom-control custom-checkbox mb-3 mt-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="termUserVisible"
                    onChange={this.onChange}
                    checked={settings.termUserVisible}
                    id="termUserVisible"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="termUserVisible"
                  >
                    wyszukiwarka fraz
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-dark float-right">
                Zapisz
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
  settings: state.setting.settings.youtube
});

export default connect(
  mapStateToProps,
  { getSettings, updateSettings }
)(SettingForm);
