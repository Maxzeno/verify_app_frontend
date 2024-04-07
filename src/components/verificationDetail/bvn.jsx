export default function BVNVerificationDetail({ data }) {
  const keysToSkip = ["base64Image", "bvn"];

  return (
    <>
      <div className="pt-2 pb-5">
        <img
          src={"data:image/jpeg;base64," + data?.data?.base64Image}
          alt="Person"
          // style={{ objectFit: "cover" }}
          className="h-[250px] w-[200px] rounded-lg"
        />
      </div>
      <div className="py-1">
        <span className="font-bold">BVN:</span> {data?.data?.bvn || "N/A"}
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
