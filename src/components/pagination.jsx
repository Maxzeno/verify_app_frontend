import { Link } from "react-router-dom";

function findClosestItems(list, currentItem) {
  // Calculate distances between items and the current item
  const distances = list.map((item) => ({
    item,
    distance: Math.abs(item - currentItem),
  }));

  // Sort the items based on distance
  distances.sort((a, b) => a.distance - b.distance);

  // Return the three closest items
  const closestItems = distances.slice(0, 3).map((entry) => entry.item);
  return closestItems.sort((a, b) => a - b);
}

export default function Pagination({
  currentPage,
  path,
  totalItems,
  itemsPerPage,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  const shortPage = findClosestItems(pages, currentPage);

  return (
    <nav className="mt-6">
      <ul className="flex justify-end">
        <li>
          <Link to={`${path}${1}`}>
            <button
              className={`px-4 py-2 mx-1 font-semibold focus:outline-none rounded ${
                currentPage == 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200"
              }`}
            >
              first
            </button>
          </Link>
        </li>
        {shortPage.map((page) => (
          <li key={page}>
            <Link to={`${path}${page}`}>
              <button
                className={`px-4 py-2 mx-1 font-semibold focus:outline-none rounded ${
                  currentPage == page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-200"
                }`}
              >
                {page}
              </button>
            </Link>
          </li>
        ))}
        <li>
          <Link to={`${path}${totalPages}`}>
            <button
              className={`px-4 py-2 mx-1 font-semibold focus:outline-none rounded ${
                currentPage == totalPages
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200"
              }`}
            >
              last
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
