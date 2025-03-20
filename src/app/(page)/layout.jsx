"use client";
import ContentComponent from "@/components/ContentComponent";
import SideBarComponent from "@/components/SideBarComponent";
import TopSearchComponent from "@/components/TopSearchComponent";
import { useState } from "react";

export default function PageLayout({ children }) {
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (title) => {
    setSearchTitle(title);
  };
  return (
    <>
      <section className="flex">
        <article>
          <SideBarComponent />
        </article>

        {/* Main content */}
        <article className="flex-1 flex flex-col  mx-auto m-0 ">
          <TopSearchComponent handleSearch={handleSearch} />

          {/* Child content wrapper */}
          <ContentComponent children={children} />
        </article>
      </section>
    </>
  );
}
