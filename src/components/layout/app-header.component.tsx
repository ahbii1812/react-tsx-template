import {
  AppBar,
  Box,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { color, PCMaxWidth } from "../theme/theme";
import HeaderButton from "./header-button.component";
import LanguageButton from "./language-button.component";
import MobileDrawerAppBar from "./mobile-app-drawer.component";

const CenterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const MaxWidthBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: PCMaxWidth,
  minHeight: "40px",
}));

const AppBarFlexEndBox = styled(Box)({
  height: "80px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

type HeaderProps = {
  children: any;
};

function AppHeader({ children }: HeaderProps) {
  const navigate = useNavigate();
  const location = window.location;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  const { t } = useTranslation();

  const PaddingX = isMobile ? "10px" : "50px";

  const renderLogo = () => (
    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
      LOGO
    </Typography>
  );

  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: color.primary,
          paddingLeft: PaddingX,
          paddingRight: PaddingX,
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
        elevation={0}
      >
        {!isMobile ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ maxWidth: PCMaxWidth, width: "100%" }}>
              <Grid container sx={{ alignItems: "center" }} spacing={5}>
                <Grid item xs={2}>
                  {renderLogo()}
                </Grid>
                <Grid item>
                  <HeaderButton
                    isCenter={false}
                    isSelected={
                      location.pathname.includes("home") ||
                      location.pathname === "/"
                    }
                    title={t("Home")}
                    onClick={() => navigate("/home")}
                  />
                </Grid>
                <Grid item>
                  <HeaderButton
                    isCenter={false}
                    isSelected={location.pathname.includes("listing")}
                    title={t("Listing")}
                    onClick={() => navigate("/listing")}
                  />
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <AppBarFlexEndBox>
                    <LanguageButton />
                  </AppBarFlexEndBox>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              paddingLeft: PaddingX,
              paddingRight: PaddingX,
              display: "flex",
              justifyContent: "space-between",
              height: "80px",
              alignItems: "center",
            }}
          >
            {renderLogo()}
            <MobileDrawerAppBar />
          </Box>
        )}
      </AppBar>
      <CenterBox
        sx={{
          paddingLeft: PaddingX,
          paddingRight: PaddingX,
          marginTop: "90px",
        }}
      >
        <MaxWidthBox>{children}</MaxWidthBox>
      </CenterBox>
    </Box>
  );
}

export default AppHeader;
