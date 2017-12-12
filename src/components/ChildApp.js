import React,{Component} from 'react'
import logo from '../logo.svg';
import styles from'../App.css';
import axios from 'axios';
import {AddButton} from '../components/AddButton.js'



class ChildApp extends Component {


    constructor(props){
        super(props)
        
        this.state = {
          picture: '',
          userInput: '',
          results:[],
         favoriteMoviesArray: [],
         favoriteMoviesResults:[],
         active: false
        }
    
      //   const {
      //     results = {}
      // } = this.props///////////////////////////////////////////////////////////////////
    
        this.getMovies = this.getMovies.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getFaveMovies = this.getFaveMovies.bind(this);
        
      }
     
      handleClick(i) {
    
        axios.post('http://www.localhost:3005/api/movies', this.state.results[i])
        .then(response => {
          (console.log(response.data))
          this.setState({
             favoriteMoviesArray:response.data
    
          })
        })
      
      }
    
    
      storeInput(val){
        this.setState({
          userInput: val,
        })
      }
    
      getMovies(){
        const key = '2890908e9c7da4e156e1051860b4bad8';
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.state.userInput}`)
        .then(response => {
          console.log(response.data),
    
          this.setState({
            results: response.data.results.slice(0,5),
            active: true
            
          })
          
        })
      }
    
      getFaveMovies(){
        axios.get('http://localhost:3005/api/movies')
        .then(response => {
          console.log('my faves' + response.data)
    
          this.setState({
            favoriteMoviesResults: response.data
          })
    
    
        })
      }
    
      render() {
    const faveMoviesDisplay = this.state.favoriteMoviesResults.map((elem) => {
      return (
        <div className="favorites">
        <div>{elem.id}</div>
        <div className="">{elem.title}</div>
        </div>
      )
    })
    
    
        
    const moviesArray = this.state.results.map((elem, index) => {
          
             return    (<div className="jsx_containerdiv">
    
                        <div className={this.state.active ? styles["visible--active"] : styles["invisible"]}>
                          
                          <div className="MovieTitle">{elem.title}</div>
        
                          <div>Rating:{elem.vote_average}</div>
        
                           <img src={`https://image.tmdb.org/t/p/w300/` + elem.poster_path}/>
    
                          <div id="moviesArrayContainer"></div>
            
                           <AddButton handleClick={this.handleClick} index={index}/> 
                           
                           </div>
                     
                        </div>)
    
                  
                 
                    
        })
    
        return (
          <div className="App">
    
    
          <section className="centered_content">
    
            {/* <div>{this.state.active ? styles["visible--active"] : styles["invisible"]} put ternary class alterer so you can then add transition to smoothen render of videos</div> */}
    
            <section className="title_inputBox">
               <button className="My_5" onClick={this.getFaveMovies}>MY 5</button>
                 <h1>IDEAL MOVIE</h1>
                 <h4>What will you watch tonight?</h4>
    
                 
                 
                 <input onChange={e => this.storeInput(e.target.value)}/>
              
               <button className="movie_button" onClick={this.getMovies}>click for movies</button>
               
                
            </section>
    
    
              <div className="">
              
                 
              {moviesArray}
              </div>
    
              <div className="faves">
              {faveMoviesDisplay}
              </div>
              
            
    
              </section>
              
    
          </div>
        );
      }
    

    
    

}
export default ChildApp
