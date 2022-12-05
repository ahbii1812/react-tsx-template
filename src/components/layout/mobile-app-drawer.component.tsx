import React, { useState } from "react";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { color } from "../theme/theme";
import HeaderButton from "./header-button.component";
import Spacer from "../spacer.component";
import LanguageButton from "./language-button.component";
import { useTranslation } from "react-i18next";

function MobileDrawerAppBar() {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isTablet = useMediaQuery(
    theme.breakpoints.down(900) && theme.breakpoints.up("sm")
  );
  const navigate = useNavigate();

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box>
      <IconButton
        sx={{ color: "white", padding: "0px" }}
        size="large"
        onClick={() => {
          handleOpenDrawer();
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: isTablet ? "35%" : "70%",
            minWidth: "300px",
            backgroundColor: color.primary,
          },
        }}
      >
        <Grid container paddingX="20px" spacing={3}>
          <Grid item xs={12}>
            <Spacer size="l" position="top" />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <LanguageButton />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Spacer size="xl" position="top" />
          </Grid>
          <Grid item xs={12}>
            <HeaderButton
              isCenter={true}
              isSelected={location.pathname.includes("home")}
              title={t("Home")}
              onClick={() => {
                navigate("/home");
                setOpenDrawer(false);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <HeaderButton
              isCenter={true}
              isSelected={location.pathname.includes("listing")}
              title={t("Listing")}
              onClick={() => {
                navigate("/listing");
                setOpenDrawer(false);
              }}
            />
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}

export default MobileDrawerAppBar;
