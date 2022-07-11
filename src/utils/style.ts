import {
  SxProps as BaseSxProps,
  SystemStyleObject as BaseSystemStyleObject,
} from "@mui/system";
import { Theme } from "@mui/material/styles";

export type SxProps = BaseSxProps<Theme>;
export type SystemStyleObject = BaseSystemStyleObject<Theme>;

export const createStyles = <S extends Record<string, SxProps>>(styles: S) => {
  return styles;
};
