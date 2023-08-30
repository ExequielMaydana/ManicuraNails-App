import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  urlImage: string;
};

export const CardServices = (props: Props) => {
  return (
    <article className="cardService min-w-[200px] max-w-[250px] flex flex-col items-center justify-center text-center cursor-pointer">
      <figure className="w-[150px] bg-red-100 br_bgImage shadow-md">
        <Image
          width={400}
          height={100}
          src={props.urlImage}
          alt=""
          className="p-4"
        />
      </figure>
      <div className="w-full flex flex-col items-center text-center gap-1 pt-2">
        <span className="font-bold text-lg uppercase">{props.title}</span>
        <p className="text-sm">{props.subtitle}</p>
      </div>
    </article>
  );
};
