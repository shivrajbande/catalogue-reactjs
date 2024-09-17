
import {Box,Typography} from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material"
const   getRatings = (ratings) => {
    let totalRatings = 0;
    let weightedSum = 0;
    for (let rate in ratings) {
      totalRatings += ratings[rate];
      weightedSum += rate * ratings[rate];
    }
    const averageRating = (weightedSum / totalRatings).toFixed(2);
    const length = Math.round(averageRating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= length) {
        stars.push(<Star key={i} sx={{ color: "rgb(2, 48, 32)" }} />);
      } else {
        stars.push(<StarBorder key={i} sx={{ color: "grey" }} />);
      }
    }
    return (
      <Box display={"flex"}>
        {stars}
        <Typography>({totalRatings})</Typography>
      </Box>
    );
  };
  export default getRatings;