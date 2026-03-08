import Products from "./products/page";
import Heropage from "./hero/page";
import Featurespage from "./features/page";
import Testimonialspage from "./testimonials/page";

export default function Home() {
  return (
    <>
      <Heropage />
      <Products />
      <Featurespage />
      <Testimonialspage />
    </>
  );
}
