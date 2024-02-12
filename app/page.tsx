import GridOption from "@/components/shared/GridOption";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        <GridOption
          title="Sweets gifts for less"
          image="https://links.papareact.com/1dy"
          grisStyles=" h-full md:h-80 "
        />
        <GridOption
          title="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          grisStyles=" col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="https://links.papareact.com/szu"
          grisStyles=" row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          grisStyles=" h-64"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          grisStyles=" h-64 col-span-2"
        />
        <GridOption
          title="All you need for Match Day"
          image="https://links.papareact.com/m8e"
          grisStyles=" col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          grisStyles=" h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          grisStyles=" h-64"
        />
        <GridOption
          title="Shop Sports"
          image="https://links.papareact.com/sq2"
          grisStyles="h-64"
        />
        <GridOption
          title="Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          grisStyles=" h-64"
        />
        <GridOption
          title="Flash Deals"
          image="https://links.papareact.com/qx7"
          grisStyles="h-64 col-span-2"
        />
      </div>
    </main>
  );
}
