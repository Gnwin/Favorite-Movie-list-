import React, { Component } from 'react'

import FavoriteMovieItem from './FavoriteMovieItem.js'


class FavoriteMovieList extends Component {
  render(){
    

    const users = this.props.user;
    const profiles = this.props.profile;
    const movies = this.props.movie;
    
   	const movieList = Object.values(movies).map(movie => movie.name);
    const userMovieList = profiles.map(profile => [users[profile.userID].name, movies[profile.favoriteMovieID].name]);

    
    return (
      <ol>
      {movieList.map((movieItem)=>(
      	<FavoriteMovieItem movieName = {movieItem} usersMoviesList = {userMovieList} />
	  ))}
      </ol>
    )
  }
}



export default FavoriteMovieList;