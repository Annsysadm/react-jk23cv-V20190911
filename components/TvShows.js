import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import { store } from '../index'

export class TvShows extends Component {
    componentDidMount() {
        store.dispatch(itemsFetchData('https://api.themoviedb.org/3/tv/top_rated?api_key=a3985a26801867ab5587f3065e74d2b2'));
    }


    render() {
        if (this.props.hasError) {
            return <p>Error..</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
          <div className="container movies">
                <h1>TOP TV Shows (TMDb)</h1>
                {this.props.items.map((movie) => (
                  <div className="container posters">
                  <img src={'https://image.tmdb.org/t/p/w185'+movie.poster_path} />
                  <p  className='title'>{movie.name}</p>
                  <p  className='release_date'>release date: {movie.first_air_date}</p>
                  <p><span className='star'>&#10026;</span> {movie.vote_average}</p>
                  </div>
              ))}
          </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasError: state.itemsHasError,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);