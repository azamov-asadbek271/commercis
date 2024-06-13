import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ItemNull, removeItem } from "../features/counter/CounterSlice";
function New({ cartItem }) {
    const dispatch = useDispatch()
  const { image, sum, summa, count } = cartItem[0];
const RemoveItemTheCart = () => {
  dispatch(removeItem({ image }));
  dispatch(ItemNull())
};
  return (
    <div className="mt-6 ">
      <div className="flex gap-3">
        <img src={image} alt="" className="h-10 w-10" />
        <div>
          <h4 className="text-sm ">Fall Limited Edition Sneakeras</h4>
          <div className="flex gap-1 text-slate-400">
            <p>${sum}</p>x<p>{count}</p>=
            <p className="font-bold text-black">${summa}</p>
          </div>
        </div>
        <button onClick={RemoveItemTheCart}>
          <MdDelete className="text-xl" />
        </button>
      </div>
      <button className="btn btn-wide mt-5 bg-orange-400 text-white">
        Checkout
      </button>
    </div>
  );
}

export default New;
