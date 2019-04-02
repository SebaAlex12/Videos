import React, { Component } from "react";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";
import { getSettings, updateSettings } from "../../actions/settingActions";

class SettingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId,
      term: "songs",
      amount: 15,
      termUserVisible: true,
      amountUserVisible: true,
      childrenProtectionOn: false,
      childrenProtectionOff: false,
      termChildrenVisible: false,
      amountChildrenVisible: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      userId: this.state.userId ? this.state.userId : false,
      term: this.state.term ? this.state.term : false,
      amount: this.state.amount ? this.state.amount : false,
      termUserVisible: this.state.termUserVisible
        ? this.state.termUserVisible
        : false,
      amountUserVisible: this.state.amountUserVisible
        ? this.state.amountUserVisible
        : false,
      childrenProtectionOn: this.state.childrenProtectionOn
        ? this.state.childrenProtectionOn
        : false,
      childrenProtectionOff: this.state.childrenProtectionOff
        ? this.state.childrenProtectionOff
        : false,
      termChildrenVisible: this.state.termChildrenVisible
        ? this.state.termChildrenVisible
        : false,
      amountChildrenVisible: this.state.amountChildrenVisible
        ? this.state.amountChildrenVisible
        : false
    };
    this.props.updateSettings(data);
  }

  onChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }

  componentDidMount() {
    this.props.getSettings();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.settings) {
      console.log(nextProps);
      const { youtube } = nextProps.settings;
      this.setState({
        term: youtube.term,
        amount: youtube.amount,
        termUserVisible: true,
        amountUserVisible: true,
        childrenProtectionOn: youtube.childrenProtectionOn,
        childrenProtectionOff: youtube.childrenProtectionOff,
        termChildrenVisible: youtube.termChildrenVisible,
        amountChildrenVisible: youtube.amountChildrenVisible
      });
    }
  }

  render() {
    // console.log("rener", this.props);

    if (this.props.settings.youtube) {
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
                  value={this.state.term}
                  onChange={this.onChange}
                  //   error={errors.term}
                />
              </div>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Domyślna ilość rekordów"
                  name="amount"
                  value={this.state.amount}
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
                    checked={this.state.termUserVisible}
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
              <div className="form-group">
                <div className="custom-control custom-checkbox mb-3 mt-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="amountUserVisible"
                    onChange={this.onChange}
                    checked={this.state.amountUserVisible}
                    id="amountUserVisible"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="amountUserVisible"
                  >
                    Zmiana liczby wyświetlanych rekordów
                  </label>
                </div>
              </div>
              <div className="card-header bg-info text-white">
                Ustawienia dla dzieci - under construction
              </div>
              <div className="card-body" />
              <div className="form-group">
                <span className="label label-default mr-4">
                  Blokada uprawnień
                </span>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-secondary active">
                    <input
                      type="radio"
                      name="childrenProtectionOn"
                      checked={this.state.childrenProtectionOn}
                      value={this.childrenProtectionOn}
                      onChange={this.onChange}
                      id="childrenProtectionOn"
                      autoComplete="off"
                      checked
                    />{" "}
                    Włącz
                  </label>
                  <label className="btn btn-secondary">
                    <input
                      type="radio"
                      name="childrenProtectionOff"
                      checked={this.state.childrenProtectionOff}
                      value={this.childrenProtectionOff}
                      onChange={this.onChange}
                      id="childrenProtectionOff"
                      autoComplete="off"
                    />{" "}
                    Wyłącz
                  </label>
                </div>
                <div className="form-group">
                  <div className="label label-default mr-4">Widoczność</div>
                  <div className="custom-control custom-checkbox mb-3 mt-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="termChildrenVisible"
                      onChange={this.onChange}
                      checked={this.state.termChildrenVisible}
                      id="termChildrenVisible"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="termChildrenVisible"
                    >
                      wyszukiwarka fraz
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox mb-3 mt-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="amountChildrenVisible"
                      onChange={this.onChange}
                      checked={this.state.amountChildrenVisible}
                      id="amountChildrenVisible"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="amountChildrenVisible"
                    >
                      Zmiana liczby wyświetlanych rekordów
                    </label>
                  </div>
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
  settings: state.setting.settings,
  state: state
});

export default connect(
  mapStateToProps,
  { getSettings, updateSettings }
)(SettingForm);
