import { useQuery } from "@tanstack/react-query";
import { FaChevronCircleRight } from "react-icons/fa";
import DashboardHeader from "../../../Components/Shared/DashboardHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllProductPage = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: products = [], refetch } = useQuery(["products"], async () => {
    const res = await axiosSecure.get(`/api/all-products`);
    return res.data;
  });

  console.log(products)

  const handleDelete = async (productId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/api/products/${productId}`);
        if (res.data.success) {
          refetch();
          Swal.fire("Deleted!", "The class has been deleted.", "success");
        }
      }
    } catch (error) {
      console.warn(error)
    }
  };

  return (
    <div>
      <DashboardHeader title={"All Products"} />

      <div className="mx-10 grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {products.map((res) => (
          <div key={res._id} className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={res.image} alt="Shoes" className="h-44 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-500">{res.title}</h2>                
                <hr />
                <ul className="my-2 bg-gray-100 p-3 rounded-md">
                  <li className="flex items-center gap-2 ml-2">
                    <FaChevronCircleRight /> <strong> Price: </strong>${res.price}
                  </li>
                  <li className="flex items-center gap-2 ml-2">
                    <FaChevronCircleRight /> <strong> Quantity: </strong>{res.quantity}
                  </li>
                </ul>
                <hr />
                <button className="btn bg-red-400 text-secondary" onClick={() => handleDelete(res._id)}>
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;