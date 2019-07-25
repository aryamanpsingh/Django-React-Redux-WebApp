import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCheccs, deleteChecc } from "../../actions/checcs";

export class Checcs extends Component {
  static propTypes = {
    checcs: PropTypes.array.isRequired
  };
  componentDidMount() {
    this.props.getCheccs();
  }
  render() {
    return (
      <Fragment>
        <h2>Checcs</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.checcs.map(checc => (
              <tr key={checc.id}>
                <td>{checc.id}</td>
                <td>{checc.username}</td>
                <td>{checc.quantity}</td>
                <td>{checc.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteChecc.bind(this, checc.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  checcs: state.checc.checc
});
export default connect(
  mapStateToProps,
  { getCheccs, deleteChecc }
)(Checcs);
