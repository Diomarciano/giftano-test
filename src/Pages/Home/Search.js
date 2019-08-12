import React from "react";

const Search = props =>
  <div className>
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form onSubmit={props.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="topic"><b>Topic</b></label>
                <input onChange={props.handleTopicChange} placeholder="ex Sport" type="text" className="form-control" id="topic" aria-describedby="emailHelp" required />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="start-year"><b>Start Date(YYYYMMDD)</b></label>
                    <input type="number" minLength="1" placeholder="ex: 20090403" onChange={props.handleStartYearChange} className="form-control" id="start-year" required />
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="end-year"><b>End Date(YYYYMMDD)</b></label>
                      <input type="number" minLength="1" placeholder="ex: 20100403" onChange={props.handleEndYearChange} className="form-control" id="end-year" required />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-lg btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br /><br />

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            {props.renderArticles()}
          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </div>

export default Search