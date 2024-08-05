export default async function getSingleTool(slug) {
  const result = await fetch(
    process.env.BACKEND_URL + "/tool/getSingleTool/" + slug,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  return result.json();
}
