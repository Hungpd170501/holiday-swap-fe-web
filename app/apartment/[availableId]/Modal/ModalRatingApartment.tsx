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
        footer={false}
      >
        <div style={{ height: '75vh' }} className="flex justify-around m-5 ">
          <div style={{ width: '30%' }} className="border mr-5">
            <div>
              <p>some contents...</p>
            </div>
          </div>
          <div style={{ width: '70%' }} className="border">
            <div>
              <p>some contents...</p>
              <p>some contents...</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalRatingApartment;
