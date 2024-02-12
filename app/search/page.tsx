import FilterProduct from "@/components/shared/FilterProduct";
import Product from "@/components/shared/Product";
import fetchSearch from "@/lib/fetchSearch";
import React from "react";

interface Props {
  searchParams: {
    q: string;
  };
}

const SearchPage = async ({ searchParams: { q } }: Props) => {
  const results = await fetchSearch(q);

  return (
    <div className="p-10">
      <p className="text-3xl font-bold mb-2">Results for {q}</p>
      <p className="mb-5 text-gray-400">
        {results?.content.total_results
          ? results?.content.total_results
          : "5555+"}
        results
      </p>
      <div className="flex items-start justify-start space-x-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {results?.content.organic.map((product, i) => (
            <React.Fragment key={product.product_id + i}>
              <Product product={product} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
