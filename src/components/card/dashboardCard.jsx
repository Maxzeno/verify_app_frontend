import useFetch from "../../hooks/fetch.hook";

export default function DashboardCard({ welcomeText }) {
  const token = localStorage.getItem("token");
  const [{ isLoading, apiData, serverError }] = useFetch("getUserAuth", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  return (
    <div className="h-60 bg-[#0c1e29] text-center mx-5 rounded-md">
      <div className="text-white font-thin text-4xl pt-20">
        {welcomeText} {apiData?.username || ""}!
      </div>
      <div className="text-white font-thin text-lg pt-7">
        Wallet Balance: ₦ {apiData?.accountBalance || "***"}
      </div>
    </div>
  );
}
