import React from "react";
import axios from "axios";
// import styled from "styled-components";


export default class App extends React.Component {
  state = {
    missions: []
  }

  componentDidMount() {
    this.getMissions()
  }

  getMissions = () => {
    axios
        .get('https://api.spacexdata.com/v3/missions')
        .then((res) => {
          console.log(res.data)
          this.setState({missions: res.data})
        })
        .catch((err) => {
          console.log(err)
        })
  }

  render() {
    const missonsList = this.state.missions.map((mission) => {
      return (
        <div key={mission.mission_id}>
        <p><strong>Mission:</strong> {mission.mission_name}</p>
        <p>Fabricante: {mission.manufacturers.map((manufacturers) => <p>{manufacturers}</p>)}</p>
        <p>Detalhamento: {mission.description}</p>
        <a href={mission.wikipedia}>Link Wikipédia</a>
        <hr/>
        </div>
      )
    })
    return (
      <div>
      <h2>Missões da SpaceX</h2>
      {missonsList}
      </div>
    );
  }
    
  }

