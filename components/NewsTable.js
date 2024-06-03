import Link from "next/link";

const NewsTable = ({ news, handleEdit, handleDelete }) => {
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
                News Title
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200 pl-2"
              >
                Last Updated
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200"
              >
                Link
              </th>
              <th
                scope="col"
                className="py-4 text-black font-extrabold text-md bg-gray-200 rounded-tr-lg pl-2"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {news &&
              news.map((news, index) => (
                <tr key={index}>
                  <th scope="row" className="py-2 pl-2">
                    {index + 1}
                  </th>
                  <td className="text-limit py-2">{news.news_title}</td>
                  <td className="py-2 pl-2">
                    {news.last_updated.slice(0, 10)}
                  </td>
                  <td className="text-limit py-2">
                    <Link href={`/blogs/${news.slug}`}>
                      {`https://dolphy.ca/blogs/${news.slug}`}
                    </Link>
                  </td>
                  <td className="flex">
                    <button
                      onClick={() => handleEdit(e, news.id)}
                      className="flex flex-col items-center"
                    >
                      <img src="/pen.svg" className="w-5 h-5" />
                      <span className="text-primary-grey text-xs font-medium hover:text-black">
                        Edit
                      </span>
                    </button>
                    <span className="mx-2"></span>
                    <button
                      onClick={(e) => handleDelete(e, news.id)}
                      className="flex flex-col items-center"
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

export default NewsTable;
