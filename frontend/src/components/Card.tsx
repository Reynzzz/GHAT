function Card() {
  return (
    <div className="card max-sm:w-[350px] md:h-[200px]  bg-gradient-to-r from-red-500 to-pink-500 ">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
