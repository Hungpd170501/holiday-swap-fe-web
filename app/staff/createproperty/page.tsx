import GetPropertyType from '@/app/actions/getPropertyType';
import CreateProperty from './CreateProperty';
import GetPropertyView from '@/app/actions/getPropertyView';
import GetInRoomAmenities from '@/app/actions/getInRoomAmenities';
import requireAuth from '@/app/libs/requireAuth';

export const metadata = {
  title: 'Create Property',
};

export default async function CreatePropertyPage() {
  const propertyTypes = await GetPropertyType();
  const propertyViews = await GetPropertyView();
  const inRoomAmenities = await GetInRoomAmenities();
  return requireAuth(
    <CreateProperty
      propertyTypes={propertyTypes}
      propertyViews={propertyViews}
      inRoomAmenities={inRoomAmenities}
    />,
    [3]
  );
}
