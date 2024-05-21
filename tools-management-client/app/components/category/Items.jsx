import Image from "next/image";
import Link from "next/link";

const Items = ({ item }) => {
  return (
    <Link href={`/tools/${item.url}`}>
      <div className="bg-white p-4 rounded-xl cursor-pointer shadow-sm">
        <Image
          src={item.image.url}
          width={600}
          height={500}
          alt={item.name}
          className="object-cover h-40"
        />
        <p className="text-center font-semibold text-xl mt-5 line-clamp-1">{item.name}</p>
      </div>
    </Link>
  );
};

export default Items;
