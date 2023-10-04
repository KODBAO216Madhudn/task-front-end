import { Box, Snackbar } from "@mui/material";
import React from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessageNotifier = ({ message }) => {
  return (
    <Box sx={{ width: 100, height: 50 }}>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: 250, height: 50, alignItems:"center",  }}>{message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default MessageNotifier;
