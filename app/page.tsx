import { Inter } from "@next/font/google";
import Header from "./components/Header";
import RestaurantCard from "./components/ReestaurantCard";
import { PrismaClient, Cuisine, Location, PRICE } from "@prisma/client";

export interface RestaurantCardType {
  id: Number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });

  return restaurants;
};

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id.toString()} restaurant={r} />
        ))}
      </div>
    </main>
  );
}
