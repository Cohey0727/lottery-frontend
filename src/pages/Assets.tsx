import Button, { ButtonProps } from "@mui/material/Button";
import { Merge } from "utils";

type BaseProps = Omit<ButtonProps, "variant">;
type OwnProps = {};
export type AssetsProps = Merge<BaseProps, OwnProps>;

const Assets: React.FC<AssetsProps> = (props) => {
  return (
    <Button variant="contained" {...props}>
      Assets
    </Button>
  );
};

export default Assets;
