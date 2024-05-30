import Link from "next/link";

const ListingTable = ({ preconstructions, handleDelete }) => {
  return (
    <div className="container">
      <table className="table table-striped table-responsive text-black font-medium">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">S.N</th>
            <th scope="col">Project Name</th>
            <th scope="col">City</th>
            <th scope="col">Project Status</th>
            <th scope="col">Project Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {preconstructions &&
            preconstructions.map((preconstruction, index) => (
              <tr key={index} className="my-3">
                <th scope="row">{index + 1}</th>
                <td>{preconstruction.project_name}</td>
                <td>{preconstruction.city.name}</td>
                <td>{preconstruction.status}</td>
                <td>{preconstruction.project_type}</td>
                <td>
                  <div className="flex">
                    <Link
                      href={"/admin/upload/" + preconstruction.id}
                      className="flex flex-col mx-2 items-center"
                    >
                      <img src="/pen.svg" className="w-5 h-5" />
                      <span className="text-primary-grey text-xs font-medium">
                        Edit
                      </span>
                    </Link>
                    <Link
                      href={`/pre-construction-homes/${preconstruction.city.name}/${preconstruction.slug}`}
                      onClick={(e) => handleView(e, preconstruction.id)}
                      className="flex flex-col mx-2 items-center"
                    >
                      <img src="/eye.svg" className="w-5 h-5" />
                      <span className="text-primary-grey text-xs font-medium">
                        View
                      </span>
                    </Link>
                    <button
                      onClick={(e) => handleDelete(e, preconstruction.id)}
                      className="flex flex-col mx-2 items-center"
                    >
                      <img src="/delete.svg" className="w-5 h-5" />
                      <span className="text-primary-grey text-xs font-medium">
                        Delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
