import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "./ActionDialog.css";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";

const ActionDialog = ({
  open,
  handleClose,
  handleEnter,
  closeText,
  enterText,
  titleContent,
  title,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <div className="d-main">
        <div className="d-heading">
          <div>
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_279_1093)">
                <path
                  d="M29 58C45.018 58 58 45.018 58 29C58 12.982 45.018 0 29 0C12.982 0 0 12.982 0 29C0 45.018 12.982 58 29 58ZM29 14.5C30.5066 14.5 31.7188 15.7121 31.7188 17.2188V29.9062C31.7188 31.4129 30.5066 32.625 29 32.625C27.4934 32.625 26.2812 31.4129 26.2812 29.9062V17.2188C26.2812 15.7121 27.4934 14.5 29 14.5ZM32.625 39.875C32.625 41.8801 31.0051 43.5 29 43.5C26.9949 43.5 25.375 41.8801 25.375 39.875C25.375 37.8699 26.9949 36.25 29 36.25C31.0051 36.25 32.625 37.8699 32.625 39.875Z"
                  fill="#D95767"
                />
              </g>
              <defs>
                <clipPath id="clip0_279_1093">
                  <rect width="58" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <DialogTitle id="max-width-dialog-title" className="d-title">
            {title}
          </DialogTitle>
        </div>

        <DialogContent className="d-title-content">
          <DialogContentText>{titleContent}</DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Button onClick={handleClose} color="default" variant="contained">
            {closeText}
          </Button>
          <Button
            onClick={handleEnter}
            color="secondary"
            variant="contained"
            style={{ backgroundColor: "rgb(217, 87, 103)" }}
          >
            {enterText}
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default ActionDialog;
