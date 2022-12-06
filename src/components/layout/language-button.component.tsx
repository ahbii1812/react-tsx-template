import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageList = ["English", "中文"];

export default function LanguageButton() {
  const { i18n } = useTranslation();
  const getLanguageName = () => {
    if (localStorage.getItem("SelectedLanguage") === "cn") {
      return "中文";
    }
    if (localStorage.getItem("SelectedLanguage") === "en_US") {
      return "English";
    }
    return "English";
  };

  const [language, setLanguage] = useState(getLanguageName());

  const updateLanguage = (name: String) => {
    if (name === "中文") {
      i18n.changeLanguage("cn");
      localStorage.setItem("SelectedLanguage", "cn");

      return;
    }
    if (name === "English") {
      i18n.changeLanguage("en_US");
      localStorage.setItem("SelectedLanguage", "en_US");
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    updateLanguage(event.target.value as string);
  };

  return (
    <Box
      sx={{
        minWidth: "75px",
      }}
    >
      <FormControl fullWidth>
        <Select
          disableUnderline
          size="small"
          variant="standard"
          value={language}
          onChange={handleChange}
          sx={{
            color: "white",
            border: "0px",
            padding: "0px",
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          {LanguageList.map((item) => (
            <MenuItem key={item} value={item}>
              <Typography>{item}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
