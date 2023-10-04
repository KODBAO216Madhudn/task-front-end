import { Divider } from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Sidebar = () => {
  return (
    <div>
          <div style={{ height: "90vh", backgroundColor: "#ADD8E6" }}>
            <div
              style={{
                display: "flex",
                marginLeft: "10px",
                height: "40px",
                alignItems: "center",
              }}
            >
              <span>
                <AcUnitIcon />
              </span>
              <span style={{ marginLeft: "10px" }}>Menu 1</span>
            </div>
            <Divider />
          </div>
    </div>
  );
};

export default Sidebar;
