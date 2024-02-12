"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FilterProduct = () => {
  const [selectedprice, setSelectedprice] = useState(0);
  const step = 100;
  const maxValue = 10000;
  return (
    <aside className="sticky left-0 top-[235px] w-[1300px] h-screen hidden xl:block space-y-5">
      <Accordion
        type="single"
        collapsible
        className="border broderborder-gray-200 rounded-md px-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <p className="text-lg font-bold"> Price</p>
          </AccordionTrigger>
          <AccordionContent>
            <form className="">
              <label className="block text-lg bg-walmart p-1 rounded-full text-white font-bold mb-4 pl-2">
                $ {selectedprice}
              </label>
              <input
                type="range"
                min={0}
                max={maxValue}
                value={selectedprice}
                onChange={(e: any) => setSelectedprice(e.target.value)}
                step={step}
                className="w-full"
              />
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/*  */}

      <Accordion
        type="single"
        collapsible
        className="border broderborder-gray-200 rounded-md px-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <p className="text-lg font-bold"> Brand</p>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>

      {/*  */}
      <Accordion
        type="single"
        collapsible
        className="border broderborder-gray-200 rounded-md px-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <p className="text-lg font-bold"> Subscription</p>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>

      {/*  */}

      <Accordion
        type="single"
        collapsible
        className="border broderborder-gray-200 rounded-md px-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <p className="text-lg font-bold"> Walmart Cash Offers</p>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>

      {/*  */}

      <Accordion
        type="single"
        collapsible
        className="border broderborder-gray-200 rounded-md px-2"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <p className="text-lg font-bold"> Availability</p>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default FilterProduct;
