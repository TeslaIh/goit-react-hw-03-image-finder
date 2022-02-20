import React from "react";
import "./Searchbar.css";
import { nanoid } from "nanoid";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import { BiSearchAlt } from 'react-icons/bi';

class Searchbar extends React.Component {
  searchQueryId = nanoid();

  static propTypes = {
    state: propTypes.shape({
      searchQuery: propTypes.string.isRequired,
    }),
  };

  state = {
    searchQuery: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === "") {
      toast.error("Enter name of image!");
      return;
    }

    this.props.onSubmit(this.state.searchQuery.trim().toLowerCase());
    this.reset();
  };

  reset = () => {
    this.setState({
      searchQuery: "",
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
            <BiSearchAlt />
          </button>
          <label htmlFor={this.searchQueryId}>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              id={this.searchQueryId}
              name="searchQuery"
              value={this.state.searchQuery}
              onChange={this.handleInputChange}
              placeholder="Search images and photos"
            />
          </label>
        </form>
      </header>
    );
  }
}

export default Searchbar;
