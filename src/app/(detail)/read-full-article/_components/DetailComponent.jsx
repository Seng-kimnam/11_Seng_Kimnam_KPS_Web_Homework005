import { getArticleByIdType } from "@/service/article.service";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const DetailComponent = async ({ params }) => {
  const searchParams = useSearchParams();

  // ("use server");
  const getType = searchParams.get("book" || "cartoon");

  const getName = searchParams.get("name");

  const getTitle = searchParams.get("title");

  const detail = await getArticleByIdType(params.id, getType);

  return (
    <>
      <section>
        <div className="pt-18 px-32 flex font-bold dark-cyan-text">
          <Link href={"/"}>
            <i className="fa-brands fa-fort-awesome"></i> Home
          </Link>
          &nbsp; &gt; &nbsp;
          <Link href={"/book-category"}>
            <i className="fa-solid fa-book"></i> {getName}
          </Link>
          &nbsp; &gt; &nbsp;
          <p className="text-red-700">
            <i className="fa-solid fa-book-open"></i> {getTitle}
          </p>
        </div>
        <article className="flex mx-auto m-0 rounded-3xl  mt-20  w-[80%]  shadow-lg shadow-black self-center  min-h-screen bg-white  relative  ">
          <div className="self-center mx-10 ">
            <img
              className="absolute right-20 -top-28 hover:shadow-black hover:shadow-2xl hover:scale-110 transition-all duration-300  delay-100  rounded-3xl shadow-lg shadow-neutral-600 w-52 h-72"
              src={
                getType == "book" ? detail?.book.image : detail?.cartoon.image
              }
              alt={
                getType == "book"
                  ? detail?.book.book_title
                  : detail?.cartoon.ct_title
              }
            />
            <div className="my-40 px-4 ">
              <h1 className="text-2xl dark-cyan-text font-bold">
                {getType == "book"
                  ? detail?.book.book_title
                  : detail?.cartoon.ct_title}
              </h1>
              <h3 className="dark-cyan-text">
                <p className="py-2">
                  by
                  <span className="cyan-text font-bold text-xl  y-4"></span>
                </p>
              </h3>

              <p className="text-sm dark-cyan-text leading-6">{""}</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailComponent;
