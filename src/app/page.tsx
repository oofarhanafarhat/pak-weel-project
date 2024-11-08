import Image from "next/image";
import Hero from "./component/Hero/Hero";
import Feature from "./component/Feature/Feature"
import car1 from "../app/corolla/page"
import page from "../app/alto/page";
import car2 from "../app/honda/page";
import car3 from "../app/civic/page";
import details from "../app/login/page";
import thanks from "../app/thanks/page";


export default function Home() {
  return (
    <div>
      <Hero />
  <Feature/>
  


    </div>
  );
}
