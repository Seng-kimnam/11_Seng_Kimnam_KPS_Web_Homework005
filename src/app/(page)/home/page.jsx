import CategoryCardComponent from "@/components/CategoryCardComponent";
import SideBarComponent from "@/components/SideBarComponent";
import SpecificContentHeader from "@/components/SpecificContentHeader";
import TopSearchComponent from "@/components/TopSearchComponent";

const HomeComponent = () => {
  return (
    <section className="flex">
      <article>
        <SideBarComponent />
      </article>

      {/* Main content */}
      <article className="flex-1 flex flex-col  mx-auto m-0 ">
        <TopSearchComponent />

        {/* Child content wrapper */}

        <div className="bg-white w-[90%]  rounded-4xl mx-auto pt-6 pl-4">
          <SpecificContentHeader />
          <div className="flex justify-center items-center bg-white w-[90%] h-screen rounded-3xl mx-auto m-0">
            <CategoryCardComponent />
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomeComponent;
