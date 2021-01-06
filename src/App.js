import React from 'react';

import styles from './App.module.css'

import Cards from './Components/Cards/Cards.jsx';
import Chart from './Components/Chart/Chart.jsx';
import CountryPicker from './Components/CountryPicker/CountryPicker.jsx';

import { fetchData } from './api/index';

import coronaImage from './images/covid.png';

class App extends React.Component {
  state = { data: {}, country: '',};

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
  }

  //4
  handleCoutryChange = async (country) => {
    console.log(fetchData);
    console.log(country);
    //fetch the data
    const fetchedData = await fetchData(country);

    //set the state
    this.setState({data: fetchedData, country: country});
    
  }

  render(){
    const {data, country} = this.state;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt='COVID-19'/>
      <Cards data={data}/>
      <CountryPicker handleCoutryChange={this.handleCoutryChange}/> {/*4*/}
      <Chart data={data} confirmed={data.confirmed} recovered={data.recovered} deaths={data.deaths} lastUpdate={data.lastUpdate} country={country}/>
    </div>
  );
 }
}

export default App;
