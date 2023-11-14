'use client';
import React from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import useWriteBlogModal from '@/app/hooks/useWriteBlogModal';

const ModalWriteBlog = () => {
  const writeBlogModal = useWriteBlogModal();

  const bodyContent = <div className="w-full"></div>;

  return (
    <ModalBaseDetail
      body={bodyContent}
      isOpen={writeBlogModal.isOpen}
      onClose={writeBlogModal.onClose}
    />
  );
};

export default ModalWriteBlog;
