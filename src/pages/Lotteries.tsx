import Button, { ButtonProps } from "@mui/material/Button";
import { Column } from "components/atoms";
import { LotteryCard } from "components/organisms";
import { Merge } from "utils";
import { createStyles } from "utils";

type BaseProps = Omit<ButtonProps, "variant">;
type OwnProps = {};
export type LotteriesProps = Merge<BaseProps, OwnProps>;

const Lotteries: React.FC<LotteriesProps> = (props) => {
  return (
    <Column sx={styles.root}>
      <Column sx={styles.inner}>
        {Array(10)
          .fill(null)
          .map(() => (
            <LotteryCard sx={styles.card} />
          ))}
      </Column>
    </Column>
  );
};

const styles = createStyles({
  root: {
    overflowX: "hidden",
    overflowY: "auto",
    height: "100%",
    width: "100%",
  },
  inner: {
    overflowY: "show",
    p: 2,
  },
  card: {
    my: 1,
  },
});

export default Lotteries;
