import React from "react";

function Home() {
  return (
    <div className="container bg-violet">
      <h1 className="text-xl my-3 font-medium">Welcome John</h1>
      <span className="flex row my-4">
        <h4 className="text-xl font-medium">
          <i class="fa-solid fa-note-sticky mr-2 text-base"></i>My Notes
        </h4>
        <p className="font-sm my-2">Recently Viewed</p>
      </span>

      <div className="columns-3">
        <div className="basis-1/3 bg-white p-2 box-border  rounded shadow-2xl shadow-black/150">
          <span className="flex justify-between text-xl font-medium">
            <h2 className="mb-2">Feedbacks</h2>
            <span>
              <i className="fa-solid fa-pencil mr-3"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </span>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut
            vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam
            maecenas sed at vitae facilisis. .
          </p>
          <p>5 days ago</p>
        </div>
        <div className="basis-1/3 bg-white p-2 box-border rounded shadow-2xl shadow-black/150">
          <span className="flex justify-between text-xl font-medium">
            <h2 className="mb-2">Feedbacks</h2>
            <span>
              <i className="fa-solid fa-pencil mr-3"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </span>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut
            vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam
            maecenas sed at vitae facilisis. .
          </p>
          <p>5 days ago</p>
        </div>
        <div className="basis-1/3 bg-white p-2 box-border rounded shadow-2xl shadow-black/150">
          <span className="flex justify-between text-xl font-medium">
            <h2 className="mb-2">Feedbacks</h2>
            <span>
              <i className="fa-solid fa-pencil mr-3"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </span>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut
            vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam
            maecenas sed at vitae facilisis. .
          </p>
          <p>5 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
