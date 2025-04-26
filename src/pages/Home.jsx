import { useRef } from "react";
import { Banner, VirtualTryOn, CategoryList, Footer, Trending } from "../components";

const Home = () => {
  const catRef = useRef(null);
  return (
    <>
      <Banner catRef={catRef} />
      <Trending />
      <VirtualTryOn/>
      <CategoryList catRef={catRef} />
      <Footer />
    </>
  );
};

export default Home;
