export default async function getCategoryTools(id) {
  const result = await fetch(process.env.BACKEND_URL + "/tool/getCategoryTools/" + id, {
    next: {
      revalidate: 10,
    },
  });

  return result.json();
}
