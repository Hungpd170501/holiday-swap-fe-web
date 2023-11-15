'use client';
import React from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import useWriteBlogModal from '@/app/hooks/useWriteBlogModal';
import RichTextComponent from '../richtext/RicTextConponent';

const ModalWriteBlog = () => {
  const writeBlogModal = useWriteBlogModal();

  const bodyContent = (
    <div className="w-full">
      <div>
        <RichTextComponent />
      </div>
      <div className="flex flex-row items-end justify-end my-3">
        <button className="bg-common text-white px-5 py-2 rounded-md hover:bg-blue-600">
          Post
        </button>
      </div>
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
