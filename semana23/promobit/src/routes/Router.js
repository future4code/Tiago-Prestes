import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PopularMovies from "../pages/PopularMovies/PopularMovies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import { Header } from "../components/Header";


const Router = () => {
    
    return (
        <BrowserRouter>
        <Header/>
          <Switch>
              <Route exact path={"/"} component={PopularMovies}/>
              <Route exact path={"/movie/:path"} component={MovieDetails}/>
          </Switch>
        </BrowserRouter>
    )
  }
  
  export default Router