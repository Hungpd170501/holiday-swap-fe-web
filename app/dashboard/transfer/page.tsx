import GetCurrentUser from '@/app/actions/getCurrentUser';
import GetListMembership from '@/app/actions/getListMembership';
import TransferMoney from '@/app/components/dashboard/Transfer';

const Transfer: React.FC = async () => {
  const currentUser = await GetCurrentUser();
  const memberships = await GetListMembership();
  return <TransferMoney currentUser={currentUser} memberships={memberships} />;
};

export default Transfer;
