import Image from "next/image";
import Hero from "../components/Hero"
import FoodItems from "@/components/FoodItems";
import Popular from "@/components/Popular";
import Fotter from "@/components/Fotter";
import PopularFood from "@/components/PopularFood";
import Pockets from "@/components/Pockets";
export default function Home() {
  return (
  <>
  <Hero/>
  <FoodItems/>
  <Popular/>
  <PopularFood/>
  <Pockets/>
  <Fotter/>
  </>
  );
}
