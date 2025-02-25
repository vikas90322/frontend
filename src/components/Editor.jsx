import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const Editor = ({ setPreview, setLoading }) => {
  const [text, setText] = useState("# Hello, Markdown!");

  const handleChange = async (e) => {
    const newText = e.target.value;
    setText(newText);
    setLoading(true);
    try {
      const { data } = await axios.post("https://back-markdown-editor.vercel.app/convert", { markdown: newText });
      setPreview(data.html);
    } catch (error) {
      console.error("Error converting markdown:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setPreview("");
  };

  return (
    <Box sx={{ backgroundColor: "#1e1e1e", borderRadius: 1, padding: 2, height: "100%" }}>
      <TextField
        label="Enter Markdown"
        multiline
        rows={11}
        fullWidth
        value={text}
        onChange={handleChange}
        sx={{
          backgroundColor: "#333",
          color: "white",
          borderRadius: "8px",
          "& .MuiInputBase-root": {
            color: "#fff",
            padding: "10px",
          },
          "& .MuiOutlinedInput-root": {
            borderColor: "white",
            "&:hover fieldset": {
              borderColor: "skyblue",
            },
            "&.Mui-focused fieldset": {
              borderColor: "skyblue",
            },
          },
          "& .MuiFormLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "skyblue",
            },
          },
        }}
      />
      <Button variant="contained" color="error" sx={{ marginTop: 2 }} onClick={handleClear}>
        Clear
      </Button>
    </Box>
  );
};

export default Editor;
