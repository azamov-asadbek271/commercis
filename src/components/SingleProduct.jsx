import { useSelector, useDispatch } from "react-redux";
import { addItem, decrement, editItem, increment } from "../features/counter/CounterSlice";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import img1 from "../assets/image-product-1-thumbnail.jpg";


function SingleProduct() {
  const sum = 125;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const data = {
    image:img1,
    count,
    summa: Number(sum) * count,
    sum,
  }
   
const addData = () => {
    dispatch(addItem({
        product: data,
    }))
    
}


  return (
    <div className=" py-20 w-[500px]">
      <h3 className="capitalize  text-orange-600 font-medium text-xl">
        sneaker company
      </h3>
      <h1 className="text-5xl mt-7 font-bold leading-none">
        Fall Limited Edition Sneakeras
      </h1>
      <p className=" mt-9 leading-loose">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ex
        incidunt adipisci, omnis quidem culpa totam laborum quae minima aliquam
        nostrum a optio corrupti voluptas modi laboriosam
      </p>
      <div className="mt-9 flex gap-5 items-center">
        <h2 className="font-bold text-2xl">${sum}</h2>
        <p className="bg-orange-200 px-2 rounded text-orange-600 text-base">
          50%
        </p>
      </div>
      <p className="mt-2 line-through text-slate-400 font-bold">$250</p>
      <div className="mt-9 flex gap-5">
        <div className="bg-slate-200 px-3 py-3 flex justify-between w-40 rounded-lg">
          <button
            aria-label="Decrement value"
            onClick={() => {
              if (count >= 1) {
                dispatch(decrement());
              }
            }}
          >
            <TiMinus className="text-xl text-orange-600" />
          </button>
          <span className="text-lg font-bold">{count}</span>

          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            <FaPlus className="text-xl text-orange-600" />
          </button>
        </div>
        <button
          className="btn btn-wide bg-orange-400 text-white h-14"
          onClick={addData}
        >
          <FiShoppingCart className="text-base" /> add to cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
