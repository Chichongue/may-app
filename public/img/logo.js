//Cards
export const Card = ({ image, title }) => {
  return (
      <div className="bg-gray-200 p-4 rounded-lg shadow-md w-64 flex items-center justify-center flex-col text-black text-justify">
          <img src={image} alt={title} className="w-24 h-24 rounded-full mb-4" />
          <div className="text-justify">
              <h2 className="text-lg font-semibold text-center">{title}</h2>
              <p className="">
                  Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit
                  Sed nec sagittis dolor. Maecenas <br />
                  quam nunc, tincidunt quis facilisis ut
              </p>
          </div>
      </div>
  );
};





