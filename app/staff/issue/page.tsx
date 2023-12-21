import React from 'react';
import Issue from './Issue';
import GetListIssue from '@/app/actions/getListIssue';
import requireAuth from '@/app/libs/requireAuth';

export default async function IssuePage() {
  const issue = await GetListIssue();
  return requireAuth(<Issue issue={issue} />, [3]);
}
