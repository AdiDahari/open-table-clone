import { PrismaClient } from "@prisma/client";
import Menu from "../components/Menu";
import RestaurantNavbar from "../components/RestaurantNavbar";

const prisma = new PrismaClient();

const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      Item: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.Item;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menuItems = await fetchItems(params.slug);
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavbar slug={params.slug} />
      <Menu menuItems={menuItems} />
    </div>
  );
}
