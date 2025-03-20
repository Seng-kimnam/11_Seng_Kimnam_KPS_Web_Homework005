"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const DetailComponent = ({ dataDetail }) => {
  const searchParams = useSearchParams();
  // get all query to set and validate on UI
  const type = searchParams.get("type");
  const name = searchParams.get("name");
  const title = searchParams.get("title");

  return (
    <>
      <section>
        <div className="pt-18 items-center px-32 flex font-bold dark-cyan-text">
          {/* Home Link */}
          <Link
            href={"/"}
            className="hover:text-white hover:bg-[#0B3954] transition-all duration-150 p-3 rounded-3xl group flex items-center space-x-2"
          >
            <i className="fa-brands fa-fort-awesome group-hover:rotate-12 group-hover:white group-hover:scale-110 transition-all duration-200"></i>
            <span>Home</span>
          </Link>

          {/* Arrow Icon */}
          <span className="mx-4 text-xl">
            <i className="fa-solid fa-arrow-right"></i>
          </span>

          {/* Book Category Link */}
          <Link
            className="group hover:text-white hover:bg-[#0B3954] transition-all duration-150 p-3 rounded-3xl flex items-center space-x-2"
            href={type === "book" ? "/book-category" : "/old-school-cartoons"}
          >
            <i className=" fa-solid fa-book group-hover:text-white group-hover:rotate-12 transition-all duration-200"></i>
            <span>{name}</span>
          </Link>

          {/* Arrow Icon */}
          <span className="mx-4 text-xl">
            <i className="fa-solid fa-arrow-right"></i>
          </span>

          {/* Book Title */}
          <p className="text-red-700 group flex items-center hover:bg-[#853c3c] transition-all duration-150 p-3 rounded-3xl  hover:text-white space-x-2">
            <i className="fa-solid fa-book-open group-hover:rotate-12 transition-all duration-200"></i>
            <span>{title}</span>
          </p>
        </div>

        <article className="flex mx-auto m-0 rounded-3xl  mt-20  w-[80%]  shadow-lg shadow-black self-center  min-h-screen bg-white  relative  ">
          <div className="self-center mx-10 ">
            <img
              className="absolute right-20 -top-28 hover:shadow-black hover:shadow-2xl hover:scale-110 transition-all duration-300  delay-100  rounded-3xl shadow-lg shadow-neutral-600 w-52 h-72"
              src={dataDetail.image}
              alt={
                type == "book" ? dataDetail?.book_title : dataDetail?.ct_title
              }
            />
            <div className="my-40 px-4 ">
              <h1 className="text-2xl dark-cyan-text font-bold">
                {type == "book" ? dataDetail?.book_title : dataDetail?.ct_title}
              </h1>
              <h3 className="dark-cyan-text">
                <p className="py-2">
                  by
                  <span className="cyan-text ml-2 font-bold text-xl  y-4">
                    {type == "book"
                      ? dataDetail.book_author
                      : dataDetail.ct_creator}
                  </span>
                </p>
              </h3>
              <p className="font-bold cyan-text">
                {type == "cartoon" ? (
                  <>
                    {" "}
                    <i className="fa-regular fa-eye"></i>{" "}
                    {dataDetail.view_count} times{" "}
                  </>
                ) : (
                  ""
                )}
                {type == "cartoon"
                  ? "|" + dataDetail.published_year.substring(0, 4)
                  : " "}
              </p>
              <p className="text-sm dark-cyan-text leading-6">
                {type == "book"
                  ? dataDetail.description
                  : dataDetail.ct_description}
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailComponent;
