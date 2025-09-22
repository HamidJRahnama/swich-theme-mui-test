// AssetForm.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import useThemeStore from "../../store/useThemeStore";

const assetTypes = [
  { value: "hardware", label: "Hardware" },
  { value: "software", label: "Software" },
  { value: "license", label: "License" },
];

const AssetForm = () => {
    const formColors = useThemeStore((state) => state.components.form);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    acquisitionDate: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Asset:", formData);
    alert("Asset submitted! Check console for data.");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        background: formColors.background, 
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ color: formColors.text }} 
      >
        Asset Form
      </Typography>

      <TextField
        label="Asset Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{
          background: formColors.input,
          color: formColors.text,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: formColors.border,
            },
            "&:hover fieldset": {
              borderColor: formColors.text,
            },
          },
        }}
      />

      <TextField
        label="Asset Type"
        name="type"
        select
        value={formData.type}
        onChange={handleChange}
        required
        sx={{
          background: formColors.input,
          color: formColors.text,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: formColors.border,
            },
            "&:hover fieldset": {
              borderColor: formColors.text,
            },
          },
        }}
      >
        {assetTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={3}
        sx={{
          background: formColors.input,
          color: formColors.text,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: formColors.border },
            "&:hover fieldset": { borderColor: formColors.text },
          },
        }}
      />

      <TextField
        label="Acquisition Date"
        name="acquisitionDate"
        type="date"
        value={formData.acquisitionDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        sx={{
          background: formColors.input,
          color: formColors.text,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: formColors.border },
            "&:hover fieldset": { borderColor: formColors.text },
          },
        }}
      />

      <FormControlLabel
        control={
          <Switch
            checked={formData.active}
            onChange={handleChange}
            name="active"
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: formColors.button,
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: formColors.button,
              },
            }}
          />
        }
        label="Active"
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: formColors.button, color: "#fff" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AssetForm;
