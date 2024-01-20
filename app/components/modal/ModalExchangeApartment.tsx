'use client';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import InputComponent from '../input/Input';
import UploadImageCreateOwnership from './UploadImageCreateOwnership';
import { Modal, Button, Label, Select } from 'flowbite-react';
import ModalCreate from './ModalCreate';
import useExchangeApartmentModal from '@/app/hooks/useExchangeApartmentModal';
import axios from 'axios';
import { format } from 'date-fns';

export default function ModalExchangeApartment() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const exchangeApartmentModal = useExchangeApartmentModal();
  const ownershipUser = exchangeApartmentModal.ownershipUser;
  const [ownershipData, setOwnershipData] = useState<any>();
  const [ownershipId, setOwnershipId] = useState<any>();
  const [availableTimeData, setAvailableTimeData] = useState<any>();
  const [availableTimeId, setAvailableTimeId] = useState<any>();

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

  useEffect(() => {
    if (ownershipUser && !ownershipData) {
      setOwnershipData(ownershipUser);
    }

    if (ownershipData && !ownershipId) {
      setOwnershipId(ownershipData.content[0].id);
    }
  }, [ownershipData, ownershipUser, ownershipId]);

  const handleChangeOwnershipId = (value: any) => {
    setOwnershipId(value);
  };

  const handleChangeAvailableTimeId = (value: any) => {
    setAvailableTimeId(value);
  };

  useEffect(() => {
    if (ownershipId) {
      const fetchAvailableTimeByCoOwnerId = async () => {
        const rs = await axios.get(
          `https://holiday-swap.click/api/v1/available-times/co-owner/${ownershipId}?pageNo=0&pageSize=999&sortDirection=asc&sortBy=id`
        );

        if (rs) {
          setAvailableTimeData(rs.data);
        }
      };
      fetchAvailableTimeByCoOwnerId();
    }
  }, [ownershipId]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center gap-y-4">
        <div>
          <Label value="Selection apartment" />
          <Select
            id="roomId"
            value={availableTimeId}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleChangeOwnershipId(e.target.value)
            }
          >
            {ownershipData?.content.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.property.propertyName} | {item.roomId}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label value="Selection available time" />
          <Select
            id="availableTimeId"
            value={availableTimeId}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleChangeAvailableTimeId(e.target.value)
            }
          >
            {availableTimeData?.content.map((item: any) => (
              <option key={item.id} value={item.id}>
                {format(new Date(item.startTime), 'dd/MM/yyyy')} -{' '}
                {format(new Date(item.endTime), 'dd/MM/yyyy')}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label value="Selection available time" />
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
