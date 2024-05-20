export default async function getTools() {
  const result = await fetch(process.env.BACKEND_URL + "/tool/getTools", {
    next: {
      revalidate: 10,
    },
  });

  return result.json();
}
