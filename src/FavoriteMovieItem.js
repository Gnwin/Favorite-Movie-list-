import React, { Component } from 'react'

class FavoriteMovieItem extends Component {
  render(){
    
    const movieTitle = this.props.movieName;
    const favoritedList = this.props.usersMoviesList;
    let favoritedListArr =  favoritedList.filter(favoritedMovieItem => movieTitle === favoritedMovieItem[1]);
    console.log(movieTitle);
    console.log(favoritedListArr);
    
   
    return (
      <li>
      	<h2>{movieTitle}</h2>
		<p>Liked By:</p>
		<ul>
      	{favoritedListArr.map((favoritedListItem)=>(
          <li>{favoritedListItem[0]}</li>
    	))}
		</ul>
  	  </li>
    )
  }
}

export default FavoriteMovieItem