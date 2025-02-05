"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        imageUrl,
        description,
        category->{title},
        inventory,
        tags,
        badge
      }`;

      const fetchedProducts = await client.fetch(query);

      // Filter out duplicates and remove specific products by title
      const uniqueProducts = fetchedProducts
        .filter(
          (product, index, self) =>
            index ===
            self.findIndex(
              (p) => p.title === product.title && p.imageUrl === product.imageUrl
            )
        )
        .filter(
          (product) =>
            product.title !== "SleekSpin" && product.title !== "Luxe Armchair"
        );

      setProducts(uniqueProducts);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-4xl m-12 md:text-xl leading-tight font-title text-center font-bold mb-4">
        Our Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-start"
          >
            <Link href={`/product/${product._id}`}>
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.title || "Product"}
                  width={280}
                  height={280}
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              ) : (
                <Image
                  src="/placeholder-image.png"
                  alt="Placeholder"
                  width={300}
                  height={300}
                  className="product-image"
                />
              )}
              <h2 className={`ml-3 mt-2`}>{product.title}</h2>
            </Link>

            <div className="flex justify-between items-center w-full mt-4">
              <p className="text-xl font-bold text-gray-800">
                ${product.price}
              </p>
              {product.imageUrl && (
                <Image
                  src="/images/AddCartbg.png"
                  alt="Thumbnail"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
            </div>
          </div>
        ))}
      </div>

    </>
  );
}
