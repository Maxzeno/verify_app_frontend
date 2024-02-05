import { Link } from "react-router-dom";

export default function AccountCard() {
  return (
    <div className="p-10 bg-white rounded-lg">
      <div className="font-thin text-2xl border-b pb-4">
        Pay into the account details below
      </div>
      <div className="font-thin text-sm pt-4">
        Account Number: 2111 444 2345
      </div>
      <div className="font-thin text-sm pt-4">
        Account Name: EMMANUEL LEUNAMME
      </div>
      <div className="font-thin text-sm py-4">Bank: UNITED BANK FOR AFRICA</div>

      <div className="font-thin text-1xl pt-4  border-t">
        PLEASE JOIN VERIFIER
      </div>
      <div className="font-thin text-1xl pt-2">
        <Link to="/lgoo" className="text-indigo-500 hover:text-[#ff6a6a]">
          WHATSAPP GROUP
        </Link>
      </div>
      <div className="font-thin text-1xl pt-2">
        After a successful transfer, share your proof of payment and the email
        address used during registration in our WhatsApp group.
      </div>
    </div>
  );
}
