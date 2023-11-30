'use client';

import { Tooltip } from 'flowbite-react';
import React, { useEffect } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { BiHelpCircle } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  tooltipContent?: string;
  value?: any;
  valueRegister?: any;
  onChange?: (value: any) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  min?: number;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  errors: FieldErrors;
}

interface FormInputs {
  multipleErrorInput: string;
}

const InputComponent: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder = '',
  valueRegister,
  disabled,
  tooltipContent,
  formatPrice,
  value,
  required,
  min,
  register,
  setValue,
  onChange,
  errors,
}) => {
  const emailPattern =
    id === 'email'
      ? new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      : /^.*$/;
  return (
    <div className="w-full flex-col flex">
      {/* {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )} */}
      <div className="py-3 flex flex-row gap-1 items-center">
        <label>{label}</label>
        {tooltipContent && (
          <Tooltip content={tooltipContent}>
            <BiHelpCircle size={20} />
          </Tooltip>
        )}
      </div>
      <input
        id={id}
        disabled={disabled}
        {...register(id, {
          required: `${id} is required`,
          pattern: {
            value: emailPattern,
            message: id === 'email' ? 'Invalid email format' : '',
          },
        })}
        placeholder={placeholder}
        name={id}
        type={type}
        min={min}
        value={value}
        onChange={onChange}
        className={`peer p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:ring-0
        ${errors[id] ? 'border-red-400' : 'border-gray-400'} ${
          errors[id] ? 'focus:border-red-400' : 'focus:border-black'
        }`}
      />

      <div className="pt-1">
        <ErrorMessage
          errors={errors}
          name={id}
          render={({ message }) => <p className="text-sm text-rose-500">{message}</p>}
        />
      </div>
    </div>
  );
};

export default InputComponent;
