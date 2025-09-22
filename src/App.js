
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import CustomTable from "./components/table/CustomTable";
import CustomColor from "./components/customColor/CustomColor";
import AssetForm from "./components/assetForm/AssetForm";

function App() {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Customizable Table
        </Typography>
        <CustomTable/>
        <br/>
        <hr/>
        <Typography variant="h4" align="center" gutterBottom>
          Customizable Form
        </Typography>
        <AssetForm/>

        <Box sx={{ mt: 3 }}>
          <CustomColor />
        </Box>
      </Container>
    </>
  );
}

export default App;
