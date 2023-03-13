import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open, setOpen}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Rate:</p>
                <input type="number" min='0' max='5' placeholder='0' />
            </Typography>
            <Typography variant='p' id="modal-modal-description" sx={{ mt: 2 }}>
                <p>Comment:</p>
                <input type="text" placeholder='Write your comments' />
            </Typography>
            <button type='submit'>Add</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}