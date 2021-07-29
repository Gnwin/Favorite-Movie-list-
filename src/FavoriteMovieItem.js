import React, { Component } from 'react'

class FavoriteMovieItem extends Component {
  render(){
    
    const movieName = this.props.movi;
    const userml = this.props.uml;
    let arr =  userml.filter((uml) => movieName === uml[1]);
    console.log(movieName);
    console.log(arr);
    
   
    return (
      <li>
      	<h2>{movieName}</h2>
		<p>Liked By:</p>
		<ul>
      	{arr.map((ar)=>(
          <li>{ar[0]}</li>
    	))}
		</ul>
  	  </li>
    )
  }
}

export default FavoriteMovieItem