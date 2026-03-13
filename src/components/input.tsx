import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
  name?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  required = false,
  type = "text",
  defaultValue = "",
  name,
}) => {
  return (
    <Box component="div" sx={{ width: "100%", mb: 2 }}>
      <TextField
        name={name}
        required={required}
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        fullWidth
        variant="outlined"
        InputLabelProps={{ shrink: type === "date" ? true : undefined }}
        sx={{
          // 1. Container Height
          "& .MuiInputBase-root": {
            height: "46px",
            borderRadius: "8px",
          },
          // 2. Typed Text & Placeholder Styling
          "& .MuiInputBase-input": {
            color: "#111827", // text-gray-900
            fontSize: "0.875rem", // typed text size (text-sm)
            // Specific styling for the Placeholder
            "&::placeholder": {
              fontSize: "0.75rem", // Smaller placeholder (text-xs)
              opacity: 0.7,
              color: "#9ca3af", // text-gray-400
            },
          },
          // 3. Label (Floating text) Styling
          "& .MuiInputLabel-root": {
            fontSize: "0.85rem",
            color: "#6b7280",
            // top: "2px",
            "&.Mui-focused, &.MuiFormLabel-filled": {
              color: "#2fb08f",
              fontSize: "0.85rem",
            },
          },
          // 4. Border Focus Colors
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#d8dadc",
            },
            "&:hover fieldset": {
              borderColor: "#2fb08f",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2fb08f",
              borderWidth: "2px",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;
