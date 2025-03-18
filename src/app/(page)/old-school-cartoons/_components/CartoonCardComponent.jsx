import Link from "next/link";

const CartoonCardComponent = ({ CartoonLists }) => {
  return (
    <article className="grid-cols-3 my-20 grid place-items-center    mx-auto  gap-y-20">
      {CartoonLists?.map(
        ({ id, ct_title, view_count, published_year, image }) => (
          <Link
            href={{
              pathname: `/read-full-article/${id}`,
              query: {
                type: "cartoon",
                title: ct_title,
                name: "Old school cartoon",
              },
            }}
          >
            <div key={id} className="text-center h-[400px] w-60 ">
              <img
                className="h-80 w-60 hover:scale-110 transition-all duration-300  delay-100 hover:mb-4 hover:shadow-black rounded-3xl shadow-lg shadow-neutral-600"
                src={image}
                alt={ct_title}
              />
              <h3 className="font-bold text-xl mt-4 dark-cyan-text line-clamp-1">
                {ct_title}
              </h3>
              <p className="font-bold cyan-text">
                <i className="fa-regular fa-eye"></i> {view_count} times |{" "}
                {published_year?.substring(0, 4)}
              </p>
            </div>
          </Link>
        )
      )}
    </article>
  );
};

export default CartoonCardComponent;
