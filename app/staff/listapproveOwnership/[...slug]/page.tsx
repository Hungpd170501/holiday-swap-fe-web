import React from 'react';
import DetailOwnershipApprove from './DetailOwnershipApprove';
import GetApproveOwnershipById from '@/app/actions/getApproveOwnershipById';

interface IParams {
  slug: any[];
}

export default async function DetailOwnershipApprovePage({ params }: { params: IParams }) {
  const approveDetail = await GetApproveOwnershipById(params);
  return <DetailOwnershipApprove approveDetail={approveDetail} />;
}
