import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";

const BookCardComponent = ({ BookLists }) => {
  return (
    <article className="grid grid-cols-2 place-items-center gap-y-36 mt-40 items-center justify-around gap-x-6 w-full ">
      {/* loop all book  */}
      {BookLists?.map(({ id, book_title, image, description }) => (
        <div
          key={id}
          className="w-[500px] rounded-4xl relative h-52 bg-similar-white grid-cols-2 grid"
        >
          <div>
            <img
              className="rounded-3xl hover:shadow-black hover:scale-110 transition-all duration-300  delay-100 hover:mb-4 shadow-lg shadow-neutral-600 absolute bottom-20 left-10 w-40 h-56"
              src={image}
              alt={book_title}
            />
            <Link
              href={{
                pathname: `/read-full-article/${id}`,
                query: {
                  type: "book",
                  title: book_title,
                  name: "book category",
                },
              }}
              className="rounded-3xl absolute top-36 left-10  dark-cyan-bg dark-cyan-text font-medium text-white hover:p-1 uppercase"
            >
              <InteractiveHoverButton>READ ARTICLE</InteractiveHoverButton>
            </Link>
          </div>
          <div className="self-center dark-cyan-text">
            <h2 className="text-2xl font-medium  ">{book_title}</h2>
            <p className="text-sm leading-6 w-52 line-clamp-4">{description}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default BookCardComponent;
