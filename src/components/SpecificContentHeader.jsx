"use client";
import { usePathname } from "next/navigation";
import HeaderContent from "./HeaderContent";

const SpecificContentHeader = () => {
  const pathname = usePathname();
  // i use this component to avoid the 3 routes with "use client" because using usePathname might require it,
  // instead i use only "use client" in this component  only .
  return <HeaderContent pathname={pathname} />;
};

export default SpecificContentHeader;
