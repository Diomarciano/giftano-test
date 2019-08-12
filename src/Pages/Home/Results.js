import React from "react";

const Results = props =>
  // <div>
  //   <h4>{props.title}</h4>
  //   <p>Publish Date & Time: {props.date}</p>
  //   <a href={props.url} target="_blank">Link To Article</a>
  //   <button onClick={() => props.handleSaveButton(props._id)}>Save</button>
  // </div>
  <div style={{ paddingTop: '10px' }}>
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
      <a href={props.url} target="_blank">
        <button className="btn btn-primary ">View Article</button>
      </a>
    </li>
  </div>

export default Results;
