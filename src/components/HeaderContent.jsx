"use client";
import FilterComponent from "./FilterComponent";

const HeaderContent = ({ pathname, data }) => {
  return (
    <article>
      <div className="flex justify-between">
        <p className="cyan-text  bg-similar-white rounded-xl font-bold inline-block px-8 py-4 ml-4  mt-2">
          {pathname === "/"
            ? "Homepage"
            : pathname === "/book-category"
            ? "All Books"
            : pathname === "/old-school-cartoons"
            ? "Old School Cartoons"
            : ""}
        </p>
        {pathname === "/" ? "" : <FilterComponent data={data} />}
      </div>
      <hr className="w-[96%] flex m-0 mx-auto mt-4 cyan-text" />
    </article>
  );
};

export default HeaderContent;
