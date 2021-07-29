import React, { Component } from 'react'


class FavoriteMovieList extends Component {
  render(){
    
    const users = this.props.user
    const profiles = this.props.profile
    const movies = this.props.movie
    
    //list all movies
    const movieList = Object.values(movies).map(movie => movie.name);
    console.log(movieList);
    const user_movie_list = profiles.map(profile => [users[profile.userID].name, movies[profile.favoriteMovieID].name]);
    console.log(user_movie_list);
    //{users[profile.userID].name};
    
    
    
    return (
      //<ol>
      //{movieList.map((movieName)=>(
      //<li>
        //<h2>{movieName}</h2>
      	
      	//<p>Liked By:</p>
      	//<ul>
      	  //<li>Nicholas Lain</li>
      	//</ul>
      //</li>
      //))}
  	  //</ol>
    )
  }
}
      
    
      
  	//return (
      //<ol>
      //{user_movie_ids.map((list) => (
    	//<li key = {list[0]}>
		  //{users[list[0]].name}'s favorite movie is {movies[list[1]].name} 
      	//</li>
      //))}
      //</ol>
    //)
      
      //<ol>
      //{profiles.map((profile) => (
    	//<li key = {profile.id}>
		  //{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name} 
      	//</li>
      //))}
      //</ol>

export default FavoriteMovieList