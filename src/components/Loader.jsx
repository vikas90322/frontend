import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <ClipLoader color="#fff" size={50} />
    </Box>
  );
};

export default Loader;
