export default function FooterShortCore() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-2">
      <div className="my-box flex flex-wrap justify-center items-center py-2 mb-1">
        <div className="mr-2 ml-5">Copyright © {currentYear} BetaVerify</div>
      </div>
    </footer>
  );
}
