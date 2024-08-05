import Image from "next/image";
import Link from "next/link";
import ButtonAddCard from "../common/button/ButtonAddCard";

const Items = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <Link href={`/tools/${item.slug}`}>
        <Image
          src={item.image.url}
          width={600}
          height={500}
          alt=""
          className="object-cover h-56"
        />
      </Link>
      <p className="font-semibold text-xl mt-5 line-clamp-1">{item.name}</p>
      <p className="opacity-70 line-clamp-2">{item.description}</p>
      <div className="flex justify-between items-center gap-1 mt-5">
        <p className="text-primary text-2xl">${item.price} per day</p>
        <ButtonAddCard tool={item} />
      </div>
    </div>
  );
};

export default Items;
