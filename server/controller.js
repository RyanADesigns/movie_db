const favoriteMoviesArray = [];

let id = 1;


module.exports = {

    // test(req, res){
    //     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
    // }

    create: (request, response) => { 
        const {title, description} = request.body;
        
        // In a real app, we would add this to a database.
        favoriteMoviesArray.push({ id, title, description });
        id++
        
        //// real app push line 12 to database 
        ///todo 
        
        
        response.status(200).send(favoriteMoviesArray);
},

    read: (request, response) => {
        
      response.status(200).send(favoriteMoviesArray);
  },

  readFavoriteQuery: (req, res) => {
      console.log('req.query', req.query)

      favoriteMoviesArray.search()

      res.status(200).send(movies)
  }

}