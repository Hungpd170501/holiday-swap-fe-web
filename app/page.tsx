import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/banner/Banner";
import Container from "./components/Container";
import TopDestination from "./components/TopDestination";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="pt-32 xl:px-9">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <Banner />
          </div>
          <TopDestination />
        </div>
      </Container>
    </>
  );
}
