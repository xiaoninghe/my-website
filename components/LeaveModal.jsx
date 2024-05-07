import { Button, Modal, Fade, Backdrop } from "@mui/material";

export default function LeaveModal({ url, open, handleOpen, handleClose }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div
          sx={{
            outline: "none",
          }}
        >
          <h2 id="transition-modal-title">
            Are you sure you want to leave this site?
          </h2>
          <p id="transition-modal-description">
            You are being redirected to {url}
          </p>
          <Button onClick={() => (document.location.href = url)}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </div>
      </Fade>
    </Modal>
  );
}
