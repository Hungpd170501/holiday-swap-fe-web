import Header from "./components/Header";
import Banner from "./components/banner/Banner";
import Container from "./components/Container";
import TopDestination from "./components/TopDestination";
import TopApartment from "./components/TopApartment";
import Footer from "./components/Footer";
import getCurrentUser from "./actions/getCurrentUser";
import Provider from "./components/Provider";
import ClientOnly from "./components/ClientOnly";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <ClientOnly>
      <Header currentUser={currentUser} />
      <Container>
        <div className="pt-32 xl:px-9">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <Banner />
          </div>
          <TopDestination />
          <TopApartment />
        </div>
      </Container>
      <Footer />
    </ClientOnly>
  );
}
