'use client';

import MenuItem from './MenuItem';
import SignOutMiddle from '@/app/libs/signOut';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { Fragment, useCallback, useState } from 'react';

interface UserMenuProps {
  currentUser?: Object | any | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleRouter = (route: string) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={toggleOpen} className="cursor-pointer flex items-center gap-3">
        <Image
          src={currentUser?.avatar || '/images/placeholder.jpg'}
          alt="Avartar"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="text-gray-400">{currentUser?.username}</div>
      </div>

      {isOpen ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-52 border border-gray-300 bg-white overflow-hidden right-20 top-[78px] text-sm">
          <div className="flex flex-col cursor-pointer">
            <Fragment>
              {(() => {
                if (currentUser?.role.roleId === 1) {
                  return <MenuItem onClick={() => handleRouter('/admin')} label="Dashboard " />;
                } else if (currentUser?.role.roleId === 2 || currentUser?.role.roleId === 4) {
                  return (
                    <Fragment>
                      <MenuItem onClick={() => handleRouter('/dashboard')} label="Dashboard" />
                      <MenuItem onClick={() => handleRouter('/recharge')} label="Recharge" />
                      <MenuItem
                        onClick={() => handleRouter('/dashboard/myBooking')}
                        label="My Booking"
                      />
                    </Fragment>
                  );
                } else if (currentUser?.role.roleId === 3) {
                  return (
                    <Fragment>
                      <MenuItem onClick={() => handleRouter('/staff')} label="Dashboard " />
                      <MenuItem
                        onClick={() => handleRouter('/staff/createresort')}
                        label="Create resort"
                      />
                      <MenuItem
                        onClick={() => handleRouter('/staff/createproperty')}
                        label="Create property"
                      />
                      <MenuItem
                        onClick={() => handleRouter('/staff/listapproveOwnership')}
                        label="Approve ownership"
                      />
                    </Fragment>
                  );
                }
              })()}
              <hr />
              <MenuItem onClick={() => SignOutMiddle()} label="Logout" />
            </Fragment>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default UserMenu;
