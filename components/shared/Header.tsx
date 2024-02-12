"use client";
import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Grid2X2,
  Heart,
  LayoutGrid,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/GetCartTotal";

const Header = () => {
  const router = useRouter();

  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  }
  return (
    <header className="flex sticky top-0 flex-col md:flex-row items-center bg-walmart px-10 py-7 space-x-5 z-50">
      <Link href="/" className=" mb-5 md:mb-0">
        <Image
          src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>

        <Link
          href="/"
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1 "
      >
        <input
          type="text"
          name="input"
          placeholder="Serch Everything..."
          className="flex-1 px-4 py-3 rounded-full rounded-r-none outline-none placeholder:text-sm text-black"
        />
        <button
          type="submit"
          className="flex items-center bg-yellow-400 rounded-full mr-1  cursor-pointer"
        >
          <Search className="px-2 h-10 w-10 font-bold" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href="/"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Recorder</p>
            <p>My Items</p>
          </div>
        </Link>

        <Link
          href="/"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          href="/basket"
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">
              {cart.length > 0 ? `${cart.length} items` : "No items"}
            </p>
            <p>{cart.length > 0 ? `${total} ` : 0}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
