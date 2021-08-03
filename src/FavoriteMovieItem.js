import React, { Component } from 'react'

class FavoriteMovieItem extends Component {
  render(){
    
    const movieTitle = this.props.movieName;
    const favoritedList = this.props.usersMoviesList;
    
    let favoritedListArr = favoritedList.filter(favoritedMovieItem => movieTitle === favoritedMovieItem[1]);

    return (
      <li>                 
      	<h2>{movieTitle}</h2>
		
    	{!favoritedListArr || favoritedListArr.length === 0 ? (
         <p>None of the current users liked this movie.</p>
      	) : (
          <div>
            <p>Liked By:</p>
            <ul>
      		  {favoritedListArr.map((favoritedListItem)=>(
          	    <li>{favoritedListItem[0]}</li>
    		  ))}
		    </ul>
		  </div>
        )}
  	  </li>
    )

  }
}

export default FavoriteMovieItem;