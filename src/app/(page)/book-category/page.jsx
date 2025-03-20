import BookCardComponent from "./_components/BookCardComponent";
import { getAllBookService } from "@/service/book.service";
import SpecificContentHeader from "@/components/SpecificContentHeader";
import { getBookCategoryService } from "@/service/category.service";

const BookCategory = async () => {
  const BookLists = await getAllBookService();
  const BookCategory = await getBookCategoryService();
  return (
    <>
      <div className="">
        <SpecificContentHeader data={BookCategory} />
        {/* <FilterComponent /> */}
      </div>

      <BookCardComponent BookLists={BookLists} />
    </>
  );
};

export default BookCategory;
