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
import { Link, useSearchParams } from "react-router-dom";
import EmptyCard from "../../components/EmptyCard";
import LoadingCard from "../../components/LoadingCard";
import Pagination from "../../components/pagination";
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

export default function VerificationHistory() {
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;

  const theme = useTheme([colorTheme, stripedTheme, marginTheme]);
  const token = localStorage.getItem("token");
  const [{ isLoading, apiData, serverError }] = useFetch(
    `getVerificationsByAuthUser?limit=10&page=${page}`,
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

  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  return (
    <div>
      <div className="overflow-auto">
        <div className="m-4 min-w-[500px]">
          <Table
            data={{ nodes: apiData?.data ?? [] }}
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
          {(apiData?.data?.length ?? 1) === 0 && <EmptyCard />}
          {isLoading && <LoadingCard />}
        </div>
      </div>

      <Pagination
        currentPage={page}
        path={"/verification-history?page="}
        itemsPerPage={10}
        totalItems={apiData?.count ?? 0}
      />
      <FooterShortCore />
    </div>
  );
}
