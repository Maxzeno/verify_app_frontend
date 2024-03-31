import avatarNotAvailable from "../../assets/images/not-available.jpg";

export default function BVNVerificationDetail({ data }) {
  return (
    <>
      <div className="pt-2 pb-5">
        <img
          src={data?.data?.base64Image || avatarNotAvailable}
          alt="Person"
          className="h-[200px] w-[200px] rounded-lg"
        />
      </div>
      <div className="py-1">
        <span className="font-bold">BVN:</span> {data?.data?.bvn || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Last Name:</span>{" "}
        {data?.data?.lastName || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">First Name:</span>{" "}
        {data?.data?.firstName || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">Middle Name:</span>{" "}
        {data?.data?.middleName || "N/A"}
      </div>

      <div className="py-1">
        <span className="font-bold">Date of Birth:</span>{" "}
        {data?.data?.dateOfBirth || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Genger:</span> {data?.data?.gender || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Phone number 1:</span>{" "}
        {data?.data?.phoneNumber1 || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">Phone number 2:</span>{" "}
        {data?.data?.phoneNumber2 || "N/A"}
      </div>
    </>
  );
}
