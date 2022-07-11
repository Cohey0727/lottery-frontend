import { useEffect, useMemo, useState } from "react";
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

export const useStyles = <S extends Record<string, SxProps>, Args>(
  styleFunc: (args: Args) => S,
  args: Args
) => {
  return useMemo(() => styleFunc(args), [args]);
};
