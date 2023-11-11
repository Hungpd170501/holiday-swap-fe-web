import requireAuth from '@/app/libs/requireAuth';
import DashBoardAdmin from '../../components/admin/DashBoardAdmin';

export default function DashboardAdminPage() {
  return requireAuth(
    <div>
      <DashBoardAdmin />
    </div>,
    [1]
  );
}
