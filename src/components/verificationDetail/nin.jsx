import avatarNotAvailable from "../../assets/images/not-available.jpg";

export default function NINVerificationDetail({ data }) {
  const keysToSkip = ["photo", "nin", "signature"];
  return (
    <>
      <div className="pt-2 pb-5">
        <img
          src={data?.data?.photo || avatarNotAvailable}
          alt="Person"
          // style={{ objectFit: "cover" }}
          className="h-[250px] w-[200px] rounded-lg"
        />
      </div>
      <div className="py-1">
        <span className="font-bold">NIN:</span> {data?.data?.nin || "N/A"}
      </div>
      {Object.entries(data?.data || {}).map(
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
