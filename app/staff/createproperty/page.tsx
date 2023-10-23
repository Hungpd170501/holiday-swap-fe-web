import getPropertyType from "@/app/actions/getPropertyType";
import CreateProperty from "./CreateProperty";
import getPropertyView from "@/app/actions/getPropertyView";
import getInRoomAmenities from "@/app/actions/getInRoomAmenities";

export const metadata = {
  title: "Create Property",
};

export default async function CreatePropertyPage() {
  const propertyTypes = await getPropertyType();
  const propertyViews = await getPropertyView();
  const inRoomAmenities = await getInRoomAmenities();
  return (
    <CreateProperty
      propertyTypes={propertyTypes}
      propertyViews={propertyViews}
      inRoomAmenities={inRoomAmenities}
    />
  );
}
