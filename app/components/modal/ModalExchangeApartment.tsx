'use client';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import InputComponent from '../input/Input';
import UploadImageCreateOwnership from './UploadImageCreateOwnership';
import { Modal, Button } from 'flowbite-react';
import ModalCreate from './ModalCreate';
import useExchangeApartmentModal from '@/app/hooks/useExchangeApartmentModal';

export default function ModalExchangeApartment() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const exchangeApartmentModal = useExchangeApartmentModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      startDateDeactive: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row hover:cursor-pointer hover:bg-zinc-100/80 hover:border-neutral-600 gap-x-3 w-full p-4 rounded-md border border-neutral-400 items-center">
          <input
            id="availableTime"
            type="radio"
            className="p-2 border border-neutral-400 rounded-full"
          />
          <div className="flex flex-col">
            <label className="text-lg font-bold" htmlFor="availableTime">
              Name property
            </label>
            <div>01/01/2024 - 03/01/2024</div>
          </div>
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Exchange apartment</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you want to do this?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-end">
          <Button color="blue" className="font-bold text-lg" onClick={handleSubmit(onSubmit)}>
            Continue
          </Button>
          <Button color="gray" className="text-lg" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  return (
    <ModalCreate
      disabled={isLoading}
      isOpen={exchangeApartmentModal.isOpen}
      title="Exchange Apartment"
      actionLabel={'Exchange'}
      onClose={exchangeApartmentModal.onClose}
      onSubmit={() => setOpenModal(true)}
      body={bodyContent}
    />
  );
}
