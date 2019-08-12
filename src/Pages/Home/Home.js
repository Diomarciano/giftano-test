import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import './home.css'
import API from "../../utils/api";
import Search from "./Search";
import Results from "./Results";

export class Home extends React.Component {
  state = {
    topic: "",
    loading: true,
    startYear: "",
    endYear: "",
    articles: [],
    error: ""
  }

  // A helper method for rendering one search results div for each article
  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
      />
    ));
  }

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }

  handleFormSubmit = (event) => {
    this.setState({ loading: true })
    event.preventDefault();
    API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
      .then((res) => {
        this.setState({ articles: res.data.response.docs, loading: false });
      })
      .catch((error => this.setState({ error, loading: false })))
  }

  render() {
    const { error } = this.state
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="container">
            {/* Jumbotron */}
            <div className="jumbotron">
              <h1 className="text-center">
                <strong>New York Times Article Search</strong>
              </h1>
            </div>
            {/* Search Form and Results Section */}
            {error ?
              <div className="alert alert-warning">
                Data yang Anda masukkan salah
              </div>
              :
              null
            }
            <Search handleTopicChange={this.handleTopicChange} handleStartYearChange={this.handleStartYearChange} handleEndYearChange={this.handleEndYearChange} handleFormSubmit={this.handleFormSubmit} renderArticles={this.renderArticles} />
          </div>
        </div>
      </div>
    )
  }
}