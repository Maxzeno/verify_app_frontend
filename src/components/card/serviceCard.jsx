import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, body, to, soon = false }) {
  return (
    <Link
      to={to}
      className="bg-white rounded-lg m-1 p-0 hover:m-0 hover:p-1 cursor-pointer hover:text-blue-500"
    >
      <div className="p-10">
        <div className="flex justify-between">
          <span className="font-thin text-2xl">{title}</span>
          <span className="flex items-center">
            {soon && (
              <span className="mr-2 bg-indigo-500 text-white p-1 rounded-full text-xs">
                soon
              </span>
            )}
            <ArrowRight />
          </span>
        </div>
        <div className="font-thin text-sm pt-4">{body}</div>
      </div>
    </Link>
  );
}
