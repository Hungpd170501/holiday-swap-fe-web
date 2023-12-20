'use client';
import useLoginModal from '@/app/hooks/useLoginModal';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Heading from '../Heading';
import InputComponent from '../input/Input';
import Modal from './Modal';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { BiArrowBack } from 'react-icons/bi';
import useDeactiveResortModal from '@/app/hooks/useDeactiveResortModal';
import useMaintanceResortModal from '@/app/hooks/useMaintanceResortModal';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ModalCreate from './ModalCreate';
import UploadImageCreateOwnership from './UploadImageCreateOwnership';

export default function ModalMaintanceResort() {
  const router = useRouter();
  const maintanceResortModal = useMaintanceResortModal();
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  const [file, setFile] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (isForgotPasswordModalOpen) {
    } else {
      signIn('credentials', { ...data, redirect: false }).then(async (callback) => {
        setIsLoading(false);
        if (callback?.ok) {
          toast.success('Logged in');
          router.refresh();
        }

        if (callback?.error) {
          toast.error('Invalid email or password');
        }
      });
    }
  };

  const toggleCreateAccountModal = useCallback(() => {
    setIsForgotPasswordModalOpen(false);
    maintanceResortModal.onClose();
  }, []);

  const handleDeleteImage = (image: any) => {
    setFile(file.filter((prev) => prev.size !== image.size));
  };

  const handeChangeNewImages = (image: any) => {
    if (image) {
      setFile((old) => [...old, image]);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <InputComponent
            register={register}
            label="Start date maintance"
            required={true}
            id="startDateMaintance"
            type="date"
            errors={errors}
          />
          <InputComponent
            register={register}
            label="End date maintance"
            required={true}
            id="endDateMaintance"
            type="date"
            errors={errors}
          />
        </div>
        <InputComponent
          register={register}
          label="Script"
          required={true}
          id="script"
          type="text"
          errors={errors}
        />
      </div>

      <div>
        <label className="pb-1">Report Image</label>
        <UploadImageCreateOwnership
          handeChangeNewImages={handeChangeNewImages}
          handleDeleteImage={handleDeleteImage}
          mutiple={true}
        />
      </div>
    </div>
  );

  return (
    <ModalCreate
      disabled={isLoading}
      isOpen={maintanceResortModal.isOpen}
      title={'Maintance Resort'}
      actionLabel={'Maintance'}
      onClose={maintanceResortModal.onClose}
      onSubmit={maintanceResortModal.onClose}
      body={bodyContent}
    />
  );
}
