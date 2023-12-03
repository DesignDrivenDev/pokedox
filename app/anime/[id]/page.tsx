import React from "react";
import Image from "next/image";
const fetchAnimeDetails = async (id: string) => {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}?order=popularity`
  );
  const data = response.json();
  return data;
};

const page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchAnimeDetails(params.id);

  return (
    <div className="max-w-5xl mx-auto w-11/12">
      <div className="text-center ">
        <h1 className="text-5xl font-bold py-4">{data.name}</h1>
        <div className="flex justify-center items-center ">
          <Image
            src={`https://shikimori.one/${data.image.original}`}
            alt={data.name}
            width={300}
            height={300}
            className="rounded"
          />
        </div>
        <div className="py-8">{data.description}</div>
      </div>
    </div>
  );
};

export default page;
