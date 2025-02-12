const ShoeCard = ({ imgURL, changeShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 max-sm:p-4 rounded-xl">
        <img
          src={imgURL.thumbnail}
          alt="shoe Collection"
          width={127}
          height={103}
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
