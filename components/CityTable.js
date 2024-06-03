const CityTable = ({ cities, handleEdit, handleDelete }) => {
  return (
    <div className="container">
      <div className="border-grey-200 border-2 rounded-lg mb-2">
        <table className="w-100 table-responsive text-black font-medium mb-0">
          <thead className="text-white bg-[#F1F1F1]">
            <tr>
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
                City Name
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200 pl-2 rounded-tr-lg"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cities &&
              cities.map((city, index) => (
                <tr>
                  <td scope="row" className="py-2 pl-2">
                    {index + 1}
                  </td>
                  <td className="py-2">{city.name}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        handleEdit(e, city.id);
                      }}
                      className="flex"
                    >
                      <img src="/pen.svg" className="w-5 h-5" />
                      <span className="text-primary-grey text-xs font-medium">
                        Edit
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

export default CityTable;
