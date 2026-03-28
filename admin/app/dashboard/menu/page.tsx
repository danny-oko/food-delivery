import { DisplayCategories } from "./sections/categories";
import { Foods } from "./sections/foods";

type MenuPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const params = await searchParams;
  const raw = params.category;
  const categoryId = Array.isArray(raw) ? raw[0] : raw;

  return (
    <div className="min-h-full bg-[#F4F4F5]">
      <div className="flex justify-end px-6 pt-6 md:px-8 md:pt-8">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-neutral-200 shadow-sm ring-2 ring-white">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 px-6 pb-10 pt-4 md:px-8">
        <DisplayCategories />
        <Foods categoryId={categoryId} />
      </div>
    </div>
  );
}
