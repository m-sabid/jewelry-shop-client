import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DashboardHeader from "../../../Components/Shared/DashboardHeader";
import useAdmin from "../../../hooks/useAdmin";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddClasses = () => {
  const { adminName, adminEmail } = useAdmin();
  const { handleSubmit, register, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      // Add adminEmail and adminName to the data object
      const requestData = {
        ...data,
        adminEmail,
        adminName,
      };

      // Make a POST request to the endpoint
      const response = await axiosSecure.post("/api/products", requestData);
      if (response.data.success) {
        // Admin data was successfully added
        Swal.fire("Success", "Added A Class Successfully", "success");
        reset();
      } else {
        // Failed to add the Admin data
        Swal.fire("Error", "Failed to add Admin data", "error");
      }
    } catch (error) {
      console.error("Error adding Admin data:", error);
      Swal.fire("Error", "Internal Server Error", "error");
    }
  };

  return (
    <>
      <DashboardHeader title={"Add Product"} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 p-4 my-10 mx-5 rounded-xl"
      >
        <div className="mb-4">
          <label htmlFor="title" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            id="title"
            className="input input-bordered w-full"
            {...register("title", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="form-label">
            Product Image
          </label>
          <input
            type="link"
            id="image"
            className="input input-bordered w-full"
            {...register("image", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="adminName" className="form-label">
            Admin Name
          </label>
          <input
            type="text"
            id="adminName"
            className="input input-bordered w-full"
            value={adminName}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="adminEmail" className="form-label">
            Admin Email
          </label>
          <input
            type="email"
            id="adminEmail"
            className="input input-bordered w-full"
            value={adminEmail}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="form-label">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="input input-bordered w-full"
            {...register("quantity", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="input input-bordered w-full"
            {...register("price", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="btn bg-primary text-secondary hover:text-gray-600"
        >
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddClasses;