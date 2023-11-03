import React from 'react';
import RechargeCard from '../components/recharge/RechargeCard';
import Container from '../components/Container';
import requireAuth from '../libs/requireAuth';

export default function Recharge() {
  return requireAuth(
    <div>
      <div className="pt-20">
        <RechargeCard />
      </div>
    </div>,
    [2, 4]
  );
}
