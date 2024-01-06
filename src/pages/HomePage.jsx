import { CategoryList } from "../components/CategoryList";

export const HomePage = () => {
  return (
    <div className="container max-w-4xl mx-auto flex justify-center items-center flex-wrap py-10 mt-5 sm:mt-0 sm:p-5">
      <CategoryList />{" "}
    </div>
  );
};
