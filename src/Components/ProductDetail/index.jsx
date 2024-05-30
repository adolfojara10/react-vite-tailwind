import "./styles.css";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div><XCircleIcon className="size-6" 
                onClick={context.closeProductDetail}
                /></div>
            </div>
        </aside>
    )
}

export default ProductDetail;