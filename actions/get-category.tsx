import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    if (!id) {
      throw new Error("Category ID is required");
    }

    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch category.}`);
    }

    const category = await res.json();

    return category;
  } catch (error) {
    console.error("Error fetching category:", error); // Log any errors
    throw error;
  }
};

export default getCategory;
