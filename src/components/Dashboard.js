import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function Dashboard({ weatherData, loading, isError }) {
  const classes = useStyles();

  const cityRows = weatherData => {
    const cities = Object.keys(weatherData);

    return cities.map(cityName => {
      const { city, temp, humidity, pressure, windSpeed } = weatherData[
        cityName
      ];

      return (
        <TableRow key={city}>
          <TableCell component="th" scope="row">
            {city}
          </TableCell>
          <TableCell component="th" scope="row">
            {temp}
          </TableCell>
          <TableCell component="th" scope="row">
            {humidity}
          </TableCell>
          <TableCell component="th" scope="row">
            {pressure}
          </TableCell>
          <TableCell component="th" scope="row">
            {windSpeed}
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="medium" aria-label="a table">
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell>Temp</TableCell>
              <TableCell>Humidity</TableCell>
              <TableCell>Pressure</TableCell>
              <TableCell>Wind speed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cityRows(weatherData)}</TableBody>
        </Table>
        {loading && !isError ? <LinearProgress /> : null}
      </TableContainer>
    </React.Fragment>
  );
}
