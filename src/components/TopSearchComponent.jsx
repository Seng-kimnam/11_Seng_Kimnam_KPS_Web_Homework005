"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const TopSearchComponent = ({ handleSearch }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchTitle = useRef(null);

  // handle value when input
  const handleChange = () => {
    const title = searchTitle.current.value;
    handleSearch(title);
  };

  // handle value when submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = searchTitle.current.value;

    const path =
      pathname === "/book-category" ? "/book-category" : "/old-school-cartoons";
    // const type = path === "/book-category" ? "query" : "genre";
    router.push(`${path}?search=${title}`);
  };
  return (
    <div className="flex   justify-center  my-10  ">
      <form className="relative w-[90%] " onSubmit={handleSubmit}>
        {/* search button */}
        <button className="cursor-pointer flex m-0 mx-auto self-center justify-center items-center content-center">
          <Search className="w-6 h-6 text-gray-300 text-primary-text absolute top-3 left-4" />
        </button>

        {/* search input */}
        <input
          onChange={handleChange}
          ref={searchTitle}
          type="text"
          placeholder="Search Book or Category"
          className="min-w-full focus:ring-cyan-800 focus:ring-3 bg-white py-3 pl-14 pr-5 rounded-3xl h-12 border-1"
        />
      </form>
    </div>
  );
};

export default TopSearchComponent;
