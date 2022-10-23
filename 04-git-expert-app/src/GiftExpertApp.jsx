import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;

    setCategories([...categories, NewCategory]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
