import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PopularMovies from "../pages/PopularMovies/PopularMovies";
import MovieDeTails from "../pages/MovieDetails/MovieDetails"
import MovieDetails from "../pages/MovieDetails/MovieDetails";


const Router = () => {
    
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path={"/"} component={PopularMovies}/>
              <Route exact path={"/movie/:path"} component={MovieDetails}/>
          </Switch>
        </BrowserRouter>
    )
  }
  
  export default Router