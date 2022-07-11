import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { createStyles, Merge } from "utils";
import { Row } from "components/atoms";

type BaseProps = Omit<CardProps, "variant">;
type OwnProps = {};
export type LotteryCardProps = Merge<BaseProps, OwnProps>;

const LotteryCard: React.FC<LotteryCardProps> = (props) => {
  const { sx, ...cardProps } = props;
  const theme = useTheme();

  return (
    <Card
      elevation={8}
      component={Row}
      sx={{ ...styles.root, ...sx }}
      {...cardProps}
    >
      <CardMedia
        component="img"
        sx={styles.image}
        image="https://www.takarakujinet.co.jp/data/image/news/type055.jpg?20220630125815"
        alt="Live from space album cover"
      />
    </Card>
  );
};

const styles = createStyles({
  root: {
    backgroundColor: ({ palette }) => palette.secondary.main,
  },
  image: {
    width: "80%",
  },
});

export default LotteryCard;
