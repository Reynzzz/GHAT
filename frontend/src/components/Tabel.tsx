import { Icon } from "@ailibs/feather-react-ts";
import React from "react";
import ReactPaginate from "react-paginate";

export const Tabel = ({
  data,
  columns,
  pageCount,
  currentPage,
  onPageChange,
  actions,
}) => {
  // console.log(data);
  
  return (
    <>
      <div className="text-center pt-16 flex items-center justify-center gap-1">
        <Icon name="info" size={14} />
        <h4 className="max-sm:text-xs font-bold">
          lewat 15 menit dari jam masuk terhitung terlambat
        </h4>
      </div>

      <div className="flex justify-between pt-3 p-3">
        <div className="font-bold max-sm:text-sm text-blue-500">Hari ini</div>
        <div className="font-bold max-sm:text-sm text-blue-500">
          Lihat Semua
        </div>
      </div>

      <div className="pt-1 px-3 ">
        <div className="overflow-x-auto   max-sm:h-[80%] ">
          <table className="max-sm:table max-sm:table-xs  w-full table-pin-rows sm:table-xs table-pin-cols">
            <thead>
              <tr>
                {columns?.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
                {actions && <th>Aksi</th>}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column.key}>{item[column.key]}</td>
                  ))}
                  {actions && <td>{actions(item)}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            forcePage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Tabel;
