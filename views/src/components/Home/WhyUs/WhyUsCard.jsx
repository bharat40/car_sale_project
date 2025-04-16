import React from "react";

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
      <p className=" text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        quisquam. Earum dignissimos temporibus neque, consequuntur cum id quia
        explicabo quam maiores laudantium, ea rem. Sequi delectus hic
        repudiandae velit nulla.
      </p>
    </div>
  );
};

export default WhyUsCard;
