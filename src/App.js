import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './App.css';

/* 
  Sample Data: 
  [ { PlaceId: 'STOC-sky',
      PlaceName: 'Stockholm',
      CountryId: 'SE-sky',
      RegionId: '',
      CityId: 'STOC-sky',
      CountryName: 'Sweden' },
    { PlaceId: 'ARN-sky',
      PlaceName: 'Stockholm Arlanda',
      CountryId: 'SE-sky',
      RegionId: '',
      CityId: 'STOC-sky',
      CountryName: 'Sweden' },
    { PlaceId: 'NYO-sky',
      PlaceName: 'Stockholm Skavsta',
      CountryId: 'SE-sky',
      RegionId: '',
      CityId: 'STOC-sky',
      CountryName: 'Sweden' },
    { PlaceId: 'BMA-sky',
      PlaceName: 'Stockholm Bromma',
      CountryId: 'SE-sky',
      RegionId: '',
      CityId: 'STOC-sky',
      CountryName: 'Sweden' },
    { PlaceId: 'VST-sky',
      PlaceName: 'Stockholm Vasteras',
      CountryId: 'SE-sky',
      RegionId: '',
      CityId: 'STOC-sky',
      CountryName: 'Sweden' } ];
  */ 

class App extends Component {

  componentWillMount() {
    fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${this.state ? this.state.city : 'Paris'}`, { headers: {
      "X-RapidAPI-Key": "5664466a8cmsh6d583c66d052ce0p15f49bjsn4d2a6186c3be"}}
  )
      .then(res => res.json())
      .then(json => {this.setState({ result: json })});
  }

  render() {

    if(this.state)
    {
      return (
        <div className="App">
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Place Name</TableCell>
              <TableCell align="right">Country Id</TableCell>
              <TableCell align="right">Region Id</TableCell>
              <TableCell align="right">City Id</TableCell>
              <TableCell align="right">Country Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.result.Places.map(row => (
              <TableRow key={row.PlaceId}>
                <TableCell component="th" scope="row">
                  {row.PlaceName}
                </TableCell>
                <TableCell align="right">{row.CountryId}</TableCell>
                <TableCell align="right">{row.RegionId}</TableCell>
                <TableCell align="right">{row.CityId}</TableCell>
                <TableCell align="right">{row.CountryName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      );
  }
  return <div/>;
  }
}

export default App;
