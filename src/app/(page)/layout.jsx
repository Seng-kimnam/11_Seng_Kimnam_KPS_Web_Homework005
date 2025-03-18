import ContentComponent from "@/components/ContentComponent";
import SideBarComponent from "@/components/SideBarComponent";
import TopSearchComponent from "@/components/TopSearchComponent";

export default function PageLayout({ children }) {
  return (
    <>
      <section className="flex">
        <article>
          <SideBarComponent />
        </article>

        {/* Main content */}
        <article className="flex-1 flex flex-col  mx-auto m-0 ">
          <TopSearchComponent />

          {/* Child content wrapper */}
          <ContentComponent children={children} />
        </article>
      </section>
    </>
  );
}
