import { Search } from "lucide-react";

const TopSearchComponent = () => {
  return (
    <div className="flex   justify-center  my-10  ">
      <form className="relative w-[90%] ">
        {/* search button */}
        <button className="cursor-pointer flex m-0 mx-auto self-center justify-center items-center content-center">
          <Search className="w-6 h-6 text-gray-300 text-primary-text absolute top-3 left-4" />
        </button>

        {/* search input */}
        <input
          type="text"
          placeholder="Search Book or Category"
          className="min-w-full focus:ring-cyan-800 focus:ring-3 bg-white py-3 pl-14 pr-5 rounded-3xl h-12 border-1"
        />
      </form>
    </div>
  );
};

export default TopSearchComponent;
