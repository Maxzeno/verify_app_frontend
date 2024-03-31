import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, body, to }) {
  return (
    <Link
      to={to}
      className="bg-white rounded-lg m-1 p-0 hover:m-0 hover:p-1 cursor-pointer hover:text-blue-500"
    >
      <div className="p-10">
        <div className="flex justify-between">
          <span className="font-thin text-2xl">{title}</span>
          <span>
            <ArrowRight />
          </span>
        </div>
        <div className="font-thin text-sm pt-4">{body}</div>
      </div>
    </Link>
  );
}
