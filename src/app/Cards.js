const Cards = ({ title, imageUrl, description }) => {
  return (
    <div className="custom-button flex flex-col items-center border-2 rounded-lg bg-whitesmoke hover:text-gray-300">
      <img className="mx-auto mt-4 w-12 h-12" src={imageUrl} alt="" />
      <h3 className="text-center text-lg font-bold my-4">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default Cards;
