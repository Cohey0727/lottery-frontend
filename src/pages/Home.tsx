import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Column, Expanded } from "components/atoms";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { createStyles } from "utils";

type BottomAction = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  label: string;
  path: string;
};

const bottomActions: BottomAction[] = [
  {
    Icon: ReceiptIcon,
    label: "Lottery",
    path: "/lotteries",
  },
  {
    Icon: FavoriteIcon,
    label: "Assets",
    path: "/assets",
  },
  {
    Icon: RestoreIcon,
    label: "History",
    path: "/histories",
  },
  {
    Icon: AccountBalanceWalletIcon,
    label: "My Page",
    path: "/mypage",
  },
];

const Home = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (
    <Column sx={styles.root}>
      <Expanded sx={styles.body}>
        <Outlet />
      </Expanded>
      <BottomNavigation
        showLabels
        sx={styles.footer}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(bottomActions[newValue].path);
        }}
      >
        {bottomActions.map(({ label, Icon }) => (
          <BottomNavigationAction
            key={label}
            color="red"
            sx={styles.navigation}
            label={label}
            icon={<Icon />}
          />
        ))}
      </BottomNavigation>
    </Column>
  );
};

const styles = createStyles({
  root: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundColor: ({ palette }) => palette.primary.main,
  },
  body: {
    overflow: "hidden",
  },
  footer: {
    flex: 0,
  },
  navigation: {
    backgroundColor: ({ palette }) => palette.primary.main,
    color: "white",
    "& .Mui-selected": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
});

export default Home;
