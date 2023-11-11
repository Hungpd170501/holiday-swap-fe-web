import React, { useState } from 'react';
import { Modal } from 'antd';
import { Button } from '@material-tailwind/react';

const ModalRatingApartment: React.FC = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outlined" size="md">
        Show all 39 reviews
      </Button>

      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <div style={{ height: '75vh' }} className="flex justify-around  ">
          <div style={{ width: '30%' }} className="border">
            <p>some contents...</p>
          </div>
          <div style={{ width: '70%' }} className="border">
            <p>some contents...</p>
            <p>some contents...</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalRatingApartment;
