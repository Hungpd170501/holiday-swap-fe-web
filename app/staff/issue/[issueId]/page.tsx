import requireAuth from '@/app/libs/requireAuth';
import React from 'react';
import IssueDetail from './IssueDetail';
import GetIssueById from '@/app/actions/getIssueById';

interface IParams {
  issueId: string;
}

export default async function IssueDetailPage({ params }: { params: IParams }) {
  const issueDetail = await GetIssueById(params);
  return requireAuth(<IssueDetail issueDetail={issueDetail} params={params} />, [3]);
}
