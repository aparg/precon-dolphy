import Link from "next/link";
import PageSelector from "./PageSelector";

const ListingTable = ({
  preconstructions,
  handleDelete,
  setPage,
  totalPages,
}) => {
  return (
    <div className="">
      <div className="border-grey-200 border-2 rounded-lg mb-2">
        <table className="w-100 table-responsive text-black font-medium mb-0">
          <thead className="text-white bg-[#F1F1F1]">
            <tr>
              {/* <th
                scope="col"
                className=" text-black font-bold text-sm bg-gray-200"
              >
                S.N
              </th> */}
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200 pl-2 rounded-tl-lg"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                City
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                Project Status
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                Project Type
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200 rounded-tr-lg"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {preconstructions &&
              preconstructions.map((preconstruction, index) => (
                <tr key={index}>
                  {/* <th scope="row">{index + 1}</th> */}
                  <td className="py-2 pl-2">{preconstruction.project_name}</td>
                  <td className="py-2">{preconstruction.city.name}</td>
                  <td className="py-2">{preconstruction.status}</td>
                  <td className="py-2">{preconstruction.project_type}</td>
                  <td className="py-2">
                    <div className="flex">
                      <Link
                        href={"/admin/upload/" + preconstruction.id}
                        className="flex flex-col mx-2 items-center"
                      >
                        <img src="/pen.svg" className="w-5 h-5" />
                        <span className="text-primary-grey text-xs font-medium hover:text-black">
                          Edit
                        </span>
                      </Link>
                      <Link
                        href={`/pre-construction-homes/${preconstruction.city.name}/${preconstruction.slug}`}
                        className="flex flex-col mx-2 items-center"
                      >
                        <img src="/eye.svg" className="w-5 h-5" />
                        <span className="text-primary-grey text-xs font-medium hover:text-black">
                          View
                        </span>
                      </Link>
                      <button
                        onClick={(e) => handleDelete(e, preconstruction.id)}
                        className="flex flex-col mx-2 items-center"
                      >
                        <img src="/delete.svg" className="w-5 h-5" />
                        <span className="text-primary-grey text-xs font-medium hover:text-black">
                          Delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex justify-end my-3 mx-3">
          <PageSelector
            numberOfPages={totalPages}
            setPage={setPage}
            batchSize={3}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingTable;
