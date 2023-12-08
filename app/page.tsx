import HomePage from './HomePage';
import GetListApartment from './actions/getListApartment';
import GetListResort from './actions/getListResort';
import GetListResortForCreateOwner from '@/app/actions/getListResortForCreateOwner';

export default async function Home() {
  const listResort = await GetListResortForCreateOwner('0');
  const apartment = await GetListApartment();
  return <HomePage listResort={listResort} apartment={apartment} />;
}
