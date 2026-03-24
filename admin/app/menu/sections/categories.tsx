"use client";
import CategoryChips from "@/components/category/CategoryChip";
import { useCategories } from "@/hooks/useCategories";

const CategoriesSection = () => {
  const { categories, loading, error } = useCategories();

  if (loading) return null;
  if (error) return <div>Failed to load categories</div>;

  return (
    <div className="container">
      <CategoryChips categories={categories} />
    </div>
  );
};

export default CategoriesSection;
