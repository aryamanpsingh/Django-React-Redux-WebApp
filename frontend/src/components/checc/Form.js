import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addChecc } from "../../actions/checcs";

export class Form extends Component {
  state = {
    username: "",
    quantity: "",
    message: ""
  };

  static propTypes = {
    addChecc: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { username, quantity, message } = this.state;
    const checc = { username, quantity, message };
    this.props.addChecc(checc);
    this.setState({
      username: "",
      quantity: "",
      message: ""
    });
  };

  render() {
    const { username, quantity, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              className="form-control"
              type="text"
              name="quantity"
              onChange={this.onChange}
              value={quantity}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addChecc }
)(Form);
