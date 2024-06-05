import { Icon } from "@ailibs/feather-react-ts";
const Tabel = () => {
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
                <th></th>
                <td>Name</td>
                <td>Job</td>
                <td>company</td>
                <td>location</td>
                <td>Last Login</td>
                <td>Favorite Color</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>

              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Carroll Group</td>
                <td>China</td>
                <td>8/15/2020</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Marjy Ferencz</td>
                <td>Office Assistant I</td>
                <td>Rowe-Schoen</td>
                <td>Russia</td>
                <td>3/25/2021</td>
                <td>Crimson</td>
              </tr>
              <tr>
                <th>5</th>
                <td>Yancy Tear</td>
                <td>Community Outreach Specialist</td>
                <td>Wyman-Ledner</td>
                <td>Brazil</td>
                <td>5/22/2020</td>
                <td>Indigo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tabel;
