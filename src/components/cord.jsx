import React, { Component } from "react";
import image from "../images/image-header-desktop.jpg";

class Cord extends Component {
  render() {
    return (
      <div className="container card-container">
        <div className="card-group">
          <div className="card card1">
            <div className="card-body">
              <h4 className="card-title">
                Get <span className="insights">insights</span> that help your
                business grow.
              </h4>
              <p className="card-text">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>10k+</th>
                    <th>314</th>
                    <th>12M+</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>COMPANIES</td>
                    <td>TEMPLATES</td>
                    <td>QUERIES</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card card2">
            <img className="card-img" alt="" src={image}></img>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cord;
