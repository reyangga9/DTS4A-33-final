import React from "react";
import Card from "@mui/material/Card";
import "./Heroes.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Typography } from "@mui/material";
import { useHeroStatsQuery } from "../services/dota2heroes";
import { Box } from "@mui/system";

export const Heroes = () => {
  const { data, error, isLoading } = useHeroStatsQuery();

  return (
    <>
      <Box
        className="heroesContainer"
        sx={{
          mt: 2,
          mx: "auto",
          display: "grid",
          gap: 4,
          mb: 2,
        }}
      >
        {error ? (
          <>Ada error di sini nih ...</>
        ) : isLoading ? (
          <>Loading data dulu yah ...</>
        ) : (
          data.map((data) => (
            <Box className="container">
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://cdn.cloudflare.steamstatic.com${data.img}`}
                  alt={data.localized_name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.localized_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </Card>
            </Box>
          ))
        )}
      </Box>
    </>
  );
};
