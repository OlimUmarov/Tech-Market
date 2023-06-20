import { ProductCard } from "./ProductCard";
import { products } from "../../api/products";
import { Carousel } from "@mantine/carousel";

type Props = {
  title: string;
};

const productsList = products.map((product) => {
  return (
    <Carousel.Slide>
      <ProductCard product={product} />
    </Carousel.Slide>
  );
});

export const ProductList = ({ title }: Props) => {
  return (
    <div className="h-full w-full mt-8 mb-8">
      <h1 className="text-xl font-semibold pb-4">{title}</h1>
      <Carousel
        height={450}
        slideSize="25%"
        slideGap="xs"
        bg="#FFFFFF"
        loop
        align="start"
        slidesToScroll={4}
      >
        {productsList}
      </Carousel>
    </div>
  );
};
