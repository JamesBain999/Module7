import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CustomCard from "./CustomCard";
import RecipeReviewCard from "./RecipeReviewCard";
import ChartsOverviewDemo from "./BarChart";
import MUIForm from "./MuiForm";
;
// layout cards in a grid
export default function BasicGrid() {
  // Outermost Grid is a container
  return (
    <>
      <MUIForm></MUIForm>
      <Grid container spacing={2} my={2}>
        <Grid item xs={2}>
          {" "}
          <RecipeReviewCard></RecipeReviewCard>
        </Grid>
        <Grid item xs={4}>
          <CustomCard buttonText={'HELLO'}></CustomCard>
          <CustomCard buttonText={'NOOOOOOO'}></CustomCard>
        </Grid>
        <Grid item xs={2}>
          <ChartsOverviewDemo></ChartsOverviewDemo>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  ); // 4 + 2 + 2 + 4 = 12, so grid will be 4 columns on one row
}
// ++ Create some different Cards and lay them out in a Grid
// see https://mui.com/material-ui/react-grid/ for more options
