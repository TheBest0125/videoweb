import React, { useCallback, useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import axios from "axios";

const Users = () => {
  //data and fetching state
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const fetchData = async () => {
    if (!data.length) {
      setIsLoading(true);
    } else {
      setIsRefetching(true);
    }

    try {
      const response = await axios.post("api/users", {
        start: pagination.pageIndex * pagination.pageSize,
        size: pagination.pageSize,
        sorting,
        globalFilter,
        filters: columnFilters,
      });
      console.log(response.data);
      setData(response.data.data);
      setRowCount(response.data.total);
    } catch (error) {
      setIsError(true);
      console.error(error);
      return;
    }
    setIsError(false);
    setIsLoading(false);
    setIsRefetching(false);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  const handleDeleteRow = useCallback(
    async (row) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue("username")}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      const response = await axios.post("api/users/delete", {
        id: row.getValue("id"),
      });
      fetchData();
    },
    [data]
  );

  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "Id",
      enableColumnOrdering: false,
      enableEditing: false, //disable editing on this column
      enableSorting: false,
      size: 80,
    },
    {
      accessorKey: "name",
      header: "Username",
      enableColumnActions: false,
      size: 140,
    },
    {
      accessorKey: "email",
      header: "Email",
      enableColumnActions: false,
      size: 140,
    },
    {
      accessorKey: "product_number",
      header: "Product Number",
      enableColumnActions: false,
    },
    {
      accessorKey: "coinbase_account",
      header: "Coinbase Account",
      enableColumnActions: false,
      size: 100,
    },
    {
      accessorKey: "paypal_account",
      header: "Paypal Account",
      enableColumnActions: false,
      size: 100,
    },
  ]);

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          "mrt-row-actions": {
            muiTableHeadCellProps: {
              align: "center",
            },
            size: 120,
          },
        }}
        state={{
          columnFilters,
          globalFilter,
          isLoading,
          pagination,
          showAlertBanner: isError,
          showProgressBars: isRefetching,
          sorting,
        }}
        initialState={{ density: "compact", columnVisibility: { id: false } }}
        enableFullScreenToggle={false}
        columns={columns}
        data={data}
        enableColumnOrdering
        enableEditing
        enableRowNumbers
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        rowCount={rowCount}
        renderRowActions={({ row, table }) => (
          <div className="flex justify-center">
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </div>
        )}
      />
    </>
  );
};

export default Users;
