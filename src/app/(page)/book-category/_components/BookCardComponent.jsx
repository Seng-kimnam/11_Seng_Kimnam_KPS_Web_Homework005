"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import TopSearchComponent from "@/components/TopSearchComponent";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BookCardComponent = ({ BookLists }) => {
  const [books, setBook] = useState();
  const searchParams = useSearchParams();
  const id = searchParams.get("query"); // query by type and id
  const title = searchParams.get("search"); // search by title
  console.log(title);

  useEffect(() => {
    let filterdBook = BookLists;

    if (title) {
      filterdBook = BookLists.filter((book) =>
        book.book_title.toLowerCase().includes(title.toLowerCase())
      );
      setBook(filterdBook);

      return;
    }
    if (id) {
      const filterBook = BookLists.filter((book) => book.book_cate_id == id);
      setBook(filterBook);
      return;
    }
    setBook(BookLists);
  }, [id, BookLists]);

  return (
    <>
      <article className="grid no-scrollbar mt-20 h-[500px] overflow-auto grid-cols-2 place-items-center gap-y-36  justify-around gap-x-6 w-full ">
        {/* loop all book  */}
        {books?.map(({ id, book_title, image, description }) => (
          <div
            key={id}
            className="w-[440px] rounded-4xl relative  h-52 mt-32 bg-similar-white grid-cols-2 grid"
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
                    name: "Book Category",
                  },
                }}
                className="rounded-3xl absolute top-36 left-10  dark-cyan-bg dark-cyan-text font-medium text-white hover:p-1 uppercase"
              >
                <InteractiveHoverButton>READ ARTICLE</InteractiveHoverButton>
              </Link>
            </div>
            <div className="self-center dark-cyan-text">
              <h2 className="text-2xl font-medium  ">{book_title}</h2>
              <p className="text-sm leading-6 w-52 line-clamp-4">
                {description}
              </p>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default BookCardComponent;
