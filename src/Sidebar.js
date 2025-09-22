import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Paper, Typography, Button } from "@mui/material";

export default function Sidebar() {
  const { customColors } = useContext(ThemeContext);

  return (
    <Paper
      style={{
        backgroundColor: customColors.sidebarBg,
        color: customColors.sidebarText,
        padding: 20,
        minWidth: 200,
      }}
    >
      <Typography variant="h6">Sidebar</Typography>
      <Button
        style={{
          backgroundColor: customColors.buttonBg,
          color: customColors.buttonText,
          marginTop: 10,
        }}
        fullWidth
      >
        Menu Item
      </Button>
    </Paper>
  );
}
