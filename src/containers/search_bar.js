import React, {Component} from 'react';
import {fetchWeather} from '../actions/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {term: ''}
        this.onInputChange = this.onInputChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }
    onSearch(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});

    }

    render() {
        return (
            <form onSubmit={this.onSearch} className="input-group">
                <input
                    placeholder="search for weather"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button
                        type="submit"
                        className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)