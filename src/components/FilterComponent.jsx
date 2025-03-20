"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

const FilterComponent = ({ data }) => {
  const [selectedName, setSelectedName] = React.useState(""); // Store selected name
  const router = useRouter();
  const pathname = usePathname();
  const handleSelect = (id) => {
    // Find the selected category by its id
    const selectedItem = data.find((item) => item.id === id);

    const path =
      pathname === "/book-category" ? "/book-category" : "/old-school-cartoons";
    const type = path === "/book-category" ? "query" : "genre";
    router.push(`${path}?${type}=${selectedItem.id}`);
    if (selectedItem) {
      setSelectedName(
        selectedItem.book_cate_name || selectedItem.cartoon_genre
      );
    }
  };

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={selectedName || "Filter By Categories"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {data?.map((element) => (
            <SelectItem key={element.id} value={element.id}>
              {element.book_cate_name || element.cartoon_genre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterComponent;
