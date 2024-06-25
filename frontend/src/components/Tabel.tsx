import React, { useMemo } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Icon } from "@ailibs/feather-react-ts";

const Tabel = ({
  data,
  columns,
  showActions = false,
  onEdit = null,
  onDelete = null,
  currentPage,
  pageCount,
}) => {
  const tableColumns = useMemo(() => columns, [columns]);
  const tableData = useMemo(() => data, [data]);

  const table = useReactTable({
    columns: tableColumns,
    data: tableData,

    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  console.log(data, "ini data");

  return (
    <div className="overflow-x-auto p-2">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          {table.getHeaderGroups().map((headerEl) => {
            return (
              <>
                <tr key={headerEl.id}>
                  <th>no</th>
                  {headerEl.headers.map((headerCol) => {
                    return (
                      <>
                        <th>
                          {flexRender(
                            headerCol.column.columnDef.header,
                            headerCol.getContext()
                          )}
                        </th>
                      </>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr key={row.id}>
                <td>{i + 1}</td>
                {row
                  .getVisibleCells()
                  .map(
                    (cell) => (
                      console.log(cell.column.columnDef.cell, "inicell"),
                      (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      )
                    )
                  )}
                <td colSpan={columns.length + 1}>
                  <button className="btn btn-info btn-sm">Edit</button>
                  <button className="btn btn-error btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <div>not available data</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
