import { categorycard } from "@/data/category";
import Link from "next/link";

const CategoryCardComponent = () => {
  return (
    <>
      {categorycard.map(({ id, type, image, href }) => (
        <div key={id} className="m-20   relative group ">
          <div>
            <img
              className="rounded-4xl min-w-60 h-80 shadow-lg shadow-neutral-600"
              src={image}
              alt={type}
            />
            <p className="absolute top-4 px-6 z-20  font-medium py-1 rounded-3xl left-4 cyan-text bg-white">
              <i className="fa-solid fa-tag"></i> {type}
            </p>
            <Link
              href={href}
              className="absolute inset-0 backdrop-invert backdrop-opacity-10 cursor-pointer bg-black/50 bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-4xl"
            >
              <p className="text-3xl text-center w-40 leading-10 font-bold">
                View All Available {type}s
              </p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryCardComponent;
