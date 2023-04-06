import * as React from "react";

export default function TitlebarImageList() {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-1 mt-2 text-center rounded-lg`}
    >
      {itemData.map((i) => {
        return (
          <button
            className="lg:col-span-1 bg-green-600 bg-center bg-cover  rounded-lg py-7 md:py-12"
            style={{ backgroundImage: `url(${i.img})` }}
          >
            <h2 className="bold text-white bg-black/60 text-center">
              {i.title}
            </h2>
          </button>
        );
      })}
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    title: "Información",
  },
  {
    img: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Reservar",
  },
  {
    img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Experiencias",
  },
  {
    img: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=819&q=80",
    title: "Contacto",
  },
];
