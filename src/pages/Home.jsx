import { useState } from "react";
import { Container, Grid, Typography, Box, CircularProgress } from "@mui/material";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

const Home = () => {
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Markdown Editor
      </Typography>
      <Grid container spacing={3} direction={{ xs: "column", sm: "row" }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ height: "98%" }}>
            <Editor setPreview={setPreview} setLoading={setLoading} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ 
            height: "98%", 
            overflowY: "auto", 
            maxHeight: "400px", 
            backgroundColor: "#f5f5f5", 
            padding: 2, 
            borderRadius: 1, 
            border: "1px solid #ccc" 
          }}>
            {loading ? <CircularProgress sx={{ display: "block", margin: "auto" }} /> : <Preview preview={preview} />}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
