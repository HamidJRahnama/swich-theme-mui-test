import React, { useState } from "react";
import { Button, Modal, Box, Typography, TextField, Stack } from "@mui/material";
import useThemeStore from "../../store/useThemeStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  maxHeight: "80vh",
  overflowY: "auto",

};

const CustomColor = () => {
  const components = useThemeStore((state) => state.components);
  const setComponentColor = useThemeStore((state) => state.setComponentColor);
  const resetColors = useThemeStore((state) => state.resetColors);


  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState({ ...components });

  const handleOpen = () => {
    setColors({ ...components });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const applyColors = () => {
    for (let component in colors) {
      for (let key in colors[component]) {
        setComponentColor(component, key, colors[component][key]);
      }
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Customize Colors
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {Object.keys(colors).map((component) => (
            <div key={component} style={{ marginBottom: "1.5rem" }}>
              <Typography variant="h6" gutterBottom>
                {component.charAt(0).toUpperCase() + component.slice(1)} Colors
              </Typography>
              <Stack spacing={2} mb={2}>
                {Object.keys(colors[component]).map((key) => (
                  <TextField
                    key={key}
                    type="color"
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={colors[component][key]}
                    onChange={(e) =>
                      setColors({
                        ...colors,
                        [component]: {
                          ...colors[component],
                          [key]: e.target.value,
                        },
                      })
                    }
                    fullWidth
                  />
                ))}
              </Stack>
            </div>
          ))}

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button variant="contained" onClick={applyColors}>
              Apply
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
              <Button
    variant="text"
    color="error"
    onClick={() => {
      resetColors();
      handleClose();
    }}
  >
    Reset
  </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomColor;