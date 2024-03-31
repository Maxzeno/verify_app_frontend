import {
  Body,
  Cell,
  Header,
  HeaderCell,
  HeaderRow,
  Row,
  Table,
} from "@table-library/react-table-library/table";

import FooterShortCore from "../../components/FooterShortCore";

import { useTheme } from "@table-library/react-table-library/theme";
import useFetch from "../../hooks/fetch.hook";

const colorTheme = {
  BaseRow: ``,
  Row: ``,
};

const stripedTheme = {
  BaseRow: `
        font-size: 14px;
      `,
  HeaderRow: `
        background-color: #ffffff;
      `,
  Row: `
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        }
      `,
};

const marginTheme = {
  BaseCell: `
        padding: 11px;
      `,
};

export default function PaymentHistory() {
  const theme = useTheme([colorTheme, stripedTheme, marginTheme]);
  const token = localStorage.getItem("token");
  const [{ isLoading, apiData, serverError }] = useFetch(
    "getPaymentsByAuthUser?limit=1000",
    { headers: { Authorization: `Bearer ${token}` } }
  );

  function formartDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  }

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Loading...</h1>;
  }

  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  return (
    <div>
      <div className="m-4">
        <Table
          data={{ nodes: apiData ?? [] }}
          theme={theme}
          layout={{ fixedHeader: true }}
        >
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  <HeaderCell>S/N</HeaderCell>
                  <HeaderCell>Amount</HeaderCell>
                  <HeaderCell>Channel</HeaderCell>
                  <HeaderCell>Confirmed</HeaderCell>
                  <HeaderCell>Date</HeaderCell>
                </HeaderRow>
              </Header>

              <Body>
                {tableList.map((item, index) => (
                  <Row key={index} item={item}>
                    <Cell>{index + 1}</Cell>

                    <Cell>{item.amount}</Cell>
                    <Cell>{item.channel}</Cell>
                    <Cell>{item.payment_confirmed ? "yes" : "no"}</Cell>
                    <Cell>{formartDate(item.created_at)}</Cell>
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </div>
      <FooterShortCore />
    </div>
  );
}
