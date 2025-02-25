import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";

const Preview = ({ preview }) => {
  const [delayedPreview, setDelayedPreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDelayedPreview(preview);
      setLoading(false);
    }, 500); // 1 second delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [preview]);

  return (
    <LazyLoadComponent>
      <Typography sx={{ fontSize: "0.9rem" }} color="primary">
        Live Preview
      </Typography>
      <Box
        sx={{
          backgroundColor: "#333",
          borderRadius: 1,
          padding: 2,
          minHeight: "100%",
          overflowY: "auto",
          border: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {loading ? (
          <ClipLoader color="#36d7b7" size={30} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: delayedPreview }} />
        )}
      </Box>
    </LazyLoadComponent>
  );
};

export default Preview;
