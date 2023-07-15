import React, { useCallback, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { IconButton, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { data } from "./makeData";

const Example = () => {
  const [tableData, setTableData] = useState(() => data);

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue("username")}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
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
      accessorKey: "username",
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
        initialState={{ density: "compact", columnVisibility: { id: false } }}
        enableFullScreenToggle={false}
        columns={columns}
        data={tableData}
        enableColumnOrdering
        enableEditing
        enableRowNumbers
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

export default Example;
