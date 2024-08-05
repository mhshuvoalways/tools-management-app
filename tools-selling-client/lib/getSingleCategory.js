export default async function getSingleCategory(url) {
  const result = await fetch(
    process.env.BACKEND_URL + "/category/getSingleCategory/" + url,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  return result.json();
}
