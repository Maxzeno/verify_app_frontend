import avatarNotAvailable from "../../assets/images/not-available.jpg";

export default function VNINVerificationDetail({ data }) {
  return (
    <>
      <div className="pt-2 pb-5">
        <img
          src={data?.nin_data?.photo || avatarNotAvailable}
          alt="Person"
          className="h-[200px] w-[200px] rounded-lg"
        />
      </div>
      <div className="py-1">
        <span className="font-bold">NIN:</span> {data?.nin_data?.nin || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">VNIN:</span> {data?.nin_data?.vnin || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Tracking ID:</span>{" "}
        {data?.nin_data?.trackingId || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Last Name:</span>{" "}
        {data?.nin_data?.surname || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">First Name:</span>{" "}
        {data?.nin_data?.firstname || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">Middle Name:</span>{" "}
        {data?.nin_data?.middlename || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">Date of Birth:</span>{" "}
        {data?.nin_data?.birthdate || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Genger:</span>{" "}
        {data?.nin_data?.gender || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Phone number:</span>{" "}
        {data?.nin_data?.telephoneno || "N/A"}
      </div>
    </>
  );
}
