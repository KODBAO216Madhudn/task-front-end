import { Box, Snackbar } from "@mui/material";
import React from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ErrMessageNotifier = ({ message }) => {
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default ErrMessageNotifier;
