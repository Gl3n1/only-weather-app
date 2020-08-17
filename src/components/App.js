import React, { useState } from "react";
import { TextField, Container, Button, Grid, Box } from "@material-ui/core";
import Dashboard from "./Dashboard";
import { getWeatherData, getMockData } from "../services/Http";
import { transformData } from "../utils/Transform";

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const handleChange = e => {
    setCity(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!city) {
      alert("Please enter a city!");
      return;
    }
    // fetch city
    fetchData(city);
  };

  const fetchData = async city => {
    if (!city) return;
    console.log(city);

    try {
      setLoading(true);

      const result = await getWeatherData(city);
      // const result = await getMockData();

      setWeatherData({
        ...weatherData,
        [city]: transformData(result)
      });
    } catch (err) {
      setLoading(false);
      setIsError(true);
      console.error(err);
    }
  };

  return (
    <div>
      <Container maxWidth="md">
        <header>
          <h1>The only weather app</h1>
        </header>
        <Box mb={5}>
          <form noValidate autoComplete="on" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="city"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Find
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <section>
          {/* weather response will go here */}
          <Dashboard
            loading={loading}
            isError={isError}
            weatherData={weatherData}
          />
        </section>
      </Container>
    </div>
  );
}

export default App;
