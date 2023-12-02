import HomePage from './HomePage';
import GetListResort from './actions/getListResort';
import GetListResortForCreateOwner from '@/app/actions/getListResortForCreateOwner';

export default async function Home() {
  const listResort = await GetListResortForCreateOwner('0');
  return <HomePage listResort={listResort} />;
}
