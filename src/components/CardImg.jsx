import BagIMg1 from "../assets/image-product-1.jpg"
import img1 from "../assets/image-product-1-thumbnail.jpg";
import img2 from "../assets/image-product-2-thumbnail.jpg";
import img3 from "../assets/image-product-3-thumbnail.jpg";
import img4 from "../assets/image-product-4-thumbnail.jpg";
function CardImg() {
  return (
    <div className="p-5">
      <div >
        <img
          className="w-[500px] h-[500px] rounded-xl object-cover"
          src={BagIMg1}
          alt="ssss"
        />
      </div>
      <div className="flex mt-8 gap-9">
        <img src={img1} alt=""className="w-24 rounded-xl object-cover" />
        <img src={img2} alt=""className="w-24 rounded-xl object-cover" />
        <img src={img3} alt=""className="w-24 rounded-xl object-cover" />
        <img src={img4} alt=""className="w-24 rounded-xl object-cover" />
      </div>
    </div>
  );
}

export default CardImg