"use client";
import { sidebarList } from "@/data/navItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarComponent = () => {
  const pathname = usePathname();
  return (
    <aside
      id="separator-sidebar"
      className="w-80 transition-transform sticky min-h-screen top-0 left-0  bg-white -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="px-3 py-4  border-[#0B3954]  border-r-2 ">
        <article className="text-center font-rubik font-medium">
          <img
            className="rounded-full w-32 h-32 flex m-0 mx-auto "
            src="https://i.pinimg.com/736x/f3/68/89/f36889ad33f839388d42773a6059880b.jpg"
            alt=""
          />
          <h2 className="text-xl text-[#0B3954] py-2">Ching Chang </h2>
          <p className="text-[#087E8B] text-lg">ChingChang@gmail.hrd</p>
        </article>
        <ul className="space-y-2 font-medium mt-4">
          {/* map sidebar list from data folder  instead override the tag*/}
          {sidebarList.map(({ id, label, href, icon }) => (
            <li className="text-center w-full" key={id}>
              <Link
                href={id < 4 ? href : "#"}
                style={
                  pathname === href
                    ? { backgroundColor: "#0B3954", color: "white" }
                    : {}
                }
                className=" text-center flex items-center p-2 text-[#0B3954] hover:font-bold  rounded-lg hover:text-white hover:bg-[#0B3954] group"
              >
                <span className="text-[#C81D25]">{icon}</span>
                <span className="ms-3">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* --------------------------------------- */}
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-[#0B3954] transition duration-75 rounded-lg bg-[#F5F7F8]  group"
            >
              <i className="fa-solid fa-gear"></i>
              <span className="ms-3">Setting </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBarComponent;
