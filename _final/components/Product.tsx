import Image from "next/image";

type Props = {
  name: string;
  thumbnailUrl: string;
};

export function Product({ name, thumbnailUrl }: Props) {
  return (
    <div className="bg-white shadow-lg">
      <Image
        src={thumbnailUrl}
        width={200}
        height={150}
        alt=""
        objectFit="cover"
      />

      <div className="p-2 border-gray-100 border-t">
        <p className="block text-lg text-gray-900 truncate">{name}</p>
      </div>
    </div>
  );
}
