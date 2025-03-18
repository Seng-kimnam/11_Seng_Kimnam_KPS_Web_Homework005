import BookCardComponent from "./_components/BookCardComponent";
import { getAllBookService } from "@/service/book.service";
import SpecificContentHeader from "@/components/SpecificContentHeader";

const BookCategory = async () => {
  const BookLists = await getAllBookService();
  return (
    <>
      <div className="">
        <SpecificContentHeader />
        {/* <FilterComponent /> */}
      </div>

      <BookCardComponent BookLists={BookLists} />
    </>
  );
};

export default BookCategory;
