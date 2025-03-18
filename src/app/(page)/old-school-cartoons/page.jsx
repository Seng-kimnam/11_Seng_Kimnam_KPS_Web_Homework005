import CartoonCardComponent from "./_components/CartoonCardComponent";
import { getAllCartoonService } from "@/service/cartoon.service";
import SpecificContentHeader from "@/components/SpecificContentHeader";

const OldSchoolCartoon = async () => {
  const CartoonLists = await getAllCartoonService();
  return (
    <>
      <SpecificContentHeader />
      <CartoonCardComponent CartoonLists={CartoonLists} />
    </>
  );
};
export default OldSchoolCartoon;
