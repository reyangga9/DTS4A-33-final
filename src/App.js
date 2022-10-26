import { Typography, Box } from "@mui/material";

import { Nav } from "./components/Nav";
import * as React from "react";

import { useEffect } from "react";
import { Heroes } from "./components/Heroes";

function App() {
  // const [datas, setDatas] = useState([]);
  // const getHeroes = async () => {
  //   // const heroes = await fetch("https://api.opendota.com/api/heroStats");
  //   // const value = await heroes.json();
  //   // const results = value.map((data) => {
  //   //   console.log(data);
  //   //   return data;
  //   // });
  //   // setDatas(results);
  // };

  useEffect(() => {
    // getHeroes();
  }, []);

  return (
    <>
      <Box sx={{ maxWidth: "1400px", m: "auto" }}>
        <Nav />
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">Dota 2 Heroes</Typography>
        </Box>
        {/* Dota 2 Heroes */}
        <Box
          sx={{
            backgroundColor: "#e5e0e0",
            mx: "auto",
            display: "flex",

            alignItems: "center",
          }}
        >
          <Box></Box>
          <Heroes></Heroes>
        </Box>
        {/* Kita akan tampilkan email dari user di sini */}
      </Box>
    </>
  );
}

export default App;
