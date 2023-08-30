import Image from "next/image";

type Props = { urlImg: string; title: string; subtitle: string };

export const CardService = (props: Props) => {
  return (
    <article className="min-w-[200px] max-w-[300px] flex flex-col items-center justify-center text-center gap-2">
      <figure className="w-full h-[250px] rounded-md">
        <Image
          src={props.urlImg}
          alt={props.title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </figure>
      <p className="text-2xl uppercase">{props.title}</p>
      <p className="">{props.subtitle}</p>
      <p className="cursor-pointer border-b-2 border-black">Descubre más</p>
    </article>
  );
};
