export default async function getCategories() {
  const result = await fetch(
    process.env.BACKEND_URL + "/category/getCategory",
    {
      next: {
        revalidate: 10,
      },
    }
  );

  return result.json();
}
