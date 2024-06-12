const DeveloperTable = ({ developers, handleEdit, handleDelete }) => {
  return (
    <div className="container">
      <div className="border-grey-200 border-2 rounded-lg mb-2">
        <table className="w-100 table-responsive text-black font-medium mb-0">
          <thead className="text-white bg-[#F1F1F1]">
            <tr className="bg-dark text-white">
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200 pl-2 rounded-tl-lg"
              >
                S.N
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                Developer Name
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                Image
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                Phone
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                Website Link
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
            {developers &&
              developers.map((developer, index) => (
                <tr key={index}>
                  <th scope="row" className="py-2 pl-2">
                    {index + 1}
                  </th>
                  <td className="py-2 px-2">{developer.name}</td>
                  <td className="py-2 px-2 text-limit">{developer.image}</td>
                  <td className="py-2 px-2">{developer.phone}</td>
                  <td className="py-2 px-2">{developer.website_link}</td>
                  <td className="py-2 px-2 flex">
                    <button
                      onClick={(e) => handleEdit(e, developer.id)}
                      className="flex flex-col mx-2 items-center"
                    >
                      <img src="/pen.svg" className="w-5 h-5" />
                      <span className="text-primary-grey text-xs font-medium hover:text-black">
                        Edit
                      </span>
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, preconstruction.id)}
                      className="flex flex-col mx-2 items-center"
                    >
                      <img src="/delete.svg" className="w-5 h-5" />
                      <span className="text-primary-grey text-xs font-medium hover:text-black">
                        Delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeveloperTable;
