import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ListingScreen() {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography>{t("This is Listing")}</Typography>
    </Box>
  );
}
