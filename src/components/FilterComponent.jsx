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
  const router = useRouter();

  const pathname = usePathname();

  const path =
    pathname === "/book-category" ? "All Books" : "Old School Cartoons";
  const [selectedName, setSelectedName] = React.useState(path); // Default title

  const handleSelect = (id) => {
    // Find the selected category by its id
    const selectedItem = data.find((item) => item.id === id);

    if (selectedItem) {
      setSelectedName(
        selectedItem.book_cate_name || selectedItem.cartoon_genre
      );
      const segment =
        pathname === "/book-category"
          ? "/book-category"
          : "/old-school-cartoons";
      const type = segment === "/book-category" ? "query" : "genre";
      router.push(`${segment}?${type}=${selectedItem.id}`);
    }
  };

  return (
    <>
      {/* Dynamic Title */}
      <p className="cyan-text bg-similar-white rounded-xl font-bold inline-block px-8 py-4 ml-4 mt-2">
        {selectedName}
      </p>

      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a Category" />
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
    </>
  );
};

export default FilterComponent;
