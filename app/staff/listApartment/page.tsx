import requireAuth from '@/app/libs/requireAuth';
import ListApartment from "./ListApartment";

export default function ListApartmentPage() {
    return requireAuth(
        <ListApartment />, [3]
    )
}