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
import { Link } from "react-router-dom";
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

const nodes = [
  {
    _id: "0",
    channel: "Operating System",
    slipType: "SETUP",
    created_at: "2020-02-14T23:00:00.000Z",
  },
];

export default function VerificationHistory() {
  const theme = useTheme([colorTheme, stripedTheme, marginTheme]);
  const token = localStorage.getItem("token");
  const [{ isLoading, apiData, serverError }] = useFetch(
    "getVerificationsByAuthUser",
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log("apidate", apiData);

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
                  <HeaderCell>Channel</HeaderCell>
                  <HeaderCell>Slip Type</HeaderCell>
                  <HeaderCell>Date</HeaderCell>
                </HeaderRow>
              </Header>

              <Body>
                {tableList.map((item, index) => (
                  <Row key={index} item={item}>
                    <Cell>{index + 1}</Cell>

                    <Cell>
                      <Link
                        to={`/detail/${item._id}`}
                        className="text-blue-700 hover:text-blue-500"
                      >
                        {item.channel}
                      </Link>
                    </Cell>
                    <Cell>{item.slipType}</Cell>
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
