import { ProductContent } from "@/types/productTypes";

function fetchProduct(url: string) {
  const username = process.env.OXILABS_USERNAME;
  const password = process.env.OXILABS_PASSWORD;

  const newUrl = new URL(`https://www.walmart.com${url}`);

  const body = {
    source: "universal_ecommerce",
    url: newUrl.toString(),
    geo_location: "United States",
    parse: true,
  };

  const response = fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
    },
    next: {
      revalidate: 60 * 60 * 24, // refresh the cache every 1 day
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) return;
      const result: ProductContent = data.results[0];

      const product = result.content;

      return product;
    })
    .catch((err) => console.log(err));

  return response;
}

export default fetchProduct;
