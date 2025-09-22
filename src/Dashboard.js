import React, { useState, useContext } from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import ColorSettingsPanel from "./ColorSettingsPanel";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const { theme, customColors } = useContext(ThemeContext);

  const [rows, setRows] = useState([
    { id: 1, name: "User One", status: "Active" },
    { id: 2, name: "User Two", status: "Inactive" },
    { id: 3, name: "User Three", status: "Active" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAddRow = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }
    setRows([...rows, { id: rows.length + 1, name: form.name, status: form.status }]);
    setForm({ name: "", email: "", phone: "", status: "Active" });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dynamic Dashboard 🎨
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} style={{ padding: 20 }}>
        <Grid item xs={12} md={3}>
          {/* <Sidebar /> */}
        </Grid>

        <Grid item xs={12} md={9}>
          <ColorSettingsPanel />

          {/* Form */}
          {/* <Paper
            sx={{ p: 2, mb: 3 }}
            style={{ backgroundColor: customColors.formBg, color: customColors.formText }}
          >
            <Typography variant="h6" gutterBottom>
              Add New User
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: customColors.formText } }}
                  InputProps={{ style: { color: customColors.formText } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: customColors.formText } }}
                  InputProps={{ style: { color: customColors.formText } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: customColors.formText } }}
                  InputProps={{ style: { color: customColors.formText } }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  select
                  fullWidth
                  label="Status"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: customColors.formText } }}
                  InputProps={{ style: { color: customColors.formText } }}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={handleAddRow}
                  style={{
                    backgroundColor: customColors.buttonBg,
                    color: customColors.buttonText,
                  }}
                >
                  Add to Table
                </Button>
              </Grid>
            </Grid>
          </Paper> */}

          {/* Table */}
          {/* <Paper style={{ backgroundColor: customColors.tableBg }}>
            <Table>
              <TableHead style={{ backgroundColor: customColors.tableRow }}>
                <TableRow>
                  <TableCell style={{ color: customColors.tableText }}>ID</TableCell>
                  <TableCell style={{ color: customColors.tableText }}>Name</TableCell>
                  <TableCell style={{ color: customColors.tableText }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} style={{ backgroundColor: customColors.tableRow }}>
                    <TableCell style={{ color: customColors.tableText }}>{row.id}</TableCell>
                    <TableCell style={{ color: customColors.tableText }}>{row.name}</TableCell>
                    <TableCell style={{ color: customColors.tableText }}>{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
