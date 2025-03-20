import FilterComponent from "./FilterComponent";

const HeaderContent = ({ data }) => {
  return (
    <article>
      <div className="flex justify-between">
        <FilterComponent data={data} />
      </div>
      <hr className="w-[96%] flex m-0 mx-auto mt-4 cyan-text" />
    </article>
  );
};

export default HeaderContent;
