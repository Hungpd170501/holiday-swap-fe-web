'use client';
import React from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import useWriteBlogModal from '@/app/hooks/useWriteBlogModal';
import RichTextComponent from '../richtext/RicTextConponent';

const ModalWriteBlog = () => {
  const writeBlogModal = useWriteBlogModal();

  const bodyContent = (
    <div className="w-full">
      <RichTextComponent />
    </div>
  );

  return (
    <ModalBaseDetail
      body={bodyContent}
      isOpen={writeBlogModal.isOpen}
      onClose={writeBlogModal.onClose}
    />
  );
};

export default ModalWriteBlog;
