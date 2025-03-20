import CartoonCardComponent from "./_components/CartoonCardComponent";
import { getAllCartoonService } from "@/service/cartoon.service";
import SpecificContentHeader from "@/components/SpecificContentHeader";
import { getCartoonCategoryService } from "@/service/category.service";

const OldSchoolCartoon = async () => {
  const CartoonLists = await getAllCartoonService();
  const categoryCartoon = await getCartoonCategoryService();
  return (
    <>
      <SpecificContentHeader data={categoryCartoon} />

      <CartoonCardComponent CartoonLists={CartoonLists} />
    </>
  );
};
export default OldSchoolCartoon;
