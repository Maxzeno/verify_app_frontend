import avatarNotAvailable from "../../assets/images/not-available.jpg";

export default function NINVerificationDetail({ data }) {
  return (
    <>
      <div className="pt-2 pb-5">
        <img
          src={data?.data?.photo || avatarNotAvailable}
          alt="Person"
          className="h-[200px] w-[200px] rounded-lg"
        />
      </div>
      <div className="py-1">
        <span className="font-bold">NIN:</span> {data?.data?.nin || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Tracking ID:</span>{" "}
        {data?.data?.trackingId || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Last Name:</span>{" "}
        {data?.data?.surname || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">First Name:</span>{" "}
        {data?.data?.firstname || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">Middle Name:</span>{" "}
        {data?.data?.middlename || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">Date of Birth:</span>{" "}
        {data?.data?.birthdate || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Genger:</span> {data?.data?.gender || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Phone number:</span>{" "}
        {data?.data?.telephoneno || "N/A"}
      </div>
    </>
  );
}
