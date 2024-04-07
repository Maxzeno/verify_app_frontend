import avatarNotAvailable from "../../assets/images/not-available.jpg";

export default function VNINVerificationDetail({ data }) {
  const keysToSkip = ["photo", "nin", "vnin", "signature"];

  return (
    <>
      <div className="pt-2 pb-5">
        <img
          src={data?.nin_data?.photo || avatarNotAvailable}
          alt="Person"
          className="h-[250px] w-[200px] rounded-lg"
        />
      </div>
      <div className="py-1">
        <span className="font-bold">NIN:</span> {data?.nin_data?.nin || "N/A"}
      </div>
      <div className="py-1">
        <span className="font-bold">VNIN:</span> {data?.nin_data?.vnin || "N/A"}
      </div>
      {Object.entries(data?.nin_data || {}).map(
        ([key, value]) =>
          !keysToSkip.includes(key) && (
            <div key={key} className="py-1">
              <span className="font-bold">{key.toUpperCase()}:</span>{" "}
              {value || "N/A"}
            </div>
          )
      )}
    </>
  );
}
