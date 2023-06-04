import { Divider, Radio, Table } from "antd";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
const columns = [
  {
    title: "Tên sách",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tác giả",
    dataIndex: "age",
  },
  {
    title: "Ngày mượn",
    dataIndex: "address",
  },
  {
    title: "Ngày trả",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
  {
    key: "2",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
  {
    key: "3",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
  {
    key: "4",
    name: "Trạng Quỳnh",
    age: "Nguyễn Du",
    address: "11/06/2023",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      // selectedRowKeys: ${selectedRowKeys},
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const BorrowListBook = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const handlePromissoryCart = () => {
    toast.success("Tạo phiếu thành công", {
      autoClose: 1000,
    });
  };
  return (
    <div className="bg-white">
      <div className="flex items-start py-[40px] gap-[30px] px-[200px]">
        <div className="w-[68%]">
          <h1 className="font-[700] text-[18px] mb-[20px]">List Books</h1>
          <div className="border-[1px] border-[#00000020] w-full rounded-[15px] px-[15px]">
            <div className="px-[35px] py-[15px]">
              <div className="flex items-center gap-[10px]">
                <input type="checkbox" />
                <label htmlFor="">Chọn tất cả</label>
              </div>
              <div className="w-full flex gap-[20px] pt-[20px] pb-[20px] justify-start border-b-[1px] border-[#00000020]">
                <input type="checkbox" />
                <div className="w-[100px]">
                  <img
                    src="https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_23.tar&file=0008231444-L.jpg"
                    alt=""
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="">
                  <h2 className="text-[16px] mt-2 font-[700] text-[#010101]">
                    The Lost World
                  </h2>
                  <h3 className="text-[14px] mt-1 font-[700] text-[#010101]">
                    <span>Michale Crichton</span>
                  </h3>
                </div>
                <div className="ml-[40px]">
                  <h2 className="text-[16px] mt-2 font-[700] text-[#010101]">
                    Số lượng :{" "}
                    <span className="text-[16px] text-slate-400">10</span>
                  </h2>
                </div>
                <div className="flex gap-1 cursor-pointer ml-[150px]">
                  <AiOutlineDelete className="text-[20px] text-red-500" />
                  <h1 className="text-[16px] text-blue-400">Xóa</h1>
                </div>
              </div>
              <div className="w-full flex gap-[20px] pt-[20px] pb-[20px] justify-start border-b-[1px] border-[#00000020]">
                <input type="checkbox" />
                <div className="w-[100px]">
                  <img
                    src="https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_23.tar&file=0008231444-L.jpg"
                    alt=""
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="">
                  <h2 className="text-[16px] mt-2 font-[700] text-[#010101]">
                    The Lost World
                  </h2>
                  <h3 className="text-[14px] mt-1 font-[700] text-[#010101]">
                    <span>Michale Crichton</span>
                  </h3>
                </div>
                <div className="ml-[40px]">
                  <h2 className="text-[16px] mt-2 font-[700] text-[#010101]">
                    Số lượng :{" "}
                    <span className="text-[16px] text-slate-400">10</span>
                  </h2>
                </div>
                <div className="flex gap-1 cursor-pointer ml-[150px]">
                  <AiOutlineDelete className="text-[20px] text-red-500" />
                  <h1 className="text-[16px] text-blue-400">Xóa</h1>
                </div>
              </div>
              <div className="w-full flex gap-[20px] pt-[20px] pb-[20px] justify-start border-b-[1px] border-[#00000020]">
                <input type="checkbox" />
                <div className="w-[100px]">
                  <img
                    src="https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_23.tar&file=0008231444-L.jpg"
                    alt=""
                    className="h-[100px] object-cover"
                  />
                </div>
                <div className="">
                  <h2 className="text-[16px] mt-2 font-[700] text-[#010101]">
                    The Lost World
                  </h2>
                  <h3 className="text-[14px] mt-1 font-[700] text-[#010101]">
                    <span>Michale Crichton</span>
                  </h3>
                </div>
                <div className="ml-[40px]">
                  <h2 className="text-[16px] mt-2 font-[700] text-[#010101]">
                    Số lượng :{" "}
                    <span className="text-[16px] text-slate-400">10</span>
                  </h2>
                </div>
                <div className="flex gap-1 cursor-pointer ml-[150px]">
                  <AiOutlineDelete className="text-[20px] text-red-500" />
                  <h1 className="text-[16px] text-blue-400">Xóa</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full rounded-[15px] overflow-hidden border-[1px] border-[#00000020]">
          <div className="px-[20px] py-[30px]">
            <h1 className="text-[18px] mt-4 font-medium text-[#010101]">
              Họ Và Tên : <span className="font-normal">Nguyễn Tiến Dũng</span>
            </h1>
            <h2 className="text-[18px] mt-4 font-medium text-[#010101]">
              CCCD : <span className="font-normal">012345678910</span>
            </h2>
            <h1 className="text-[18px] mt-4 text-[#010101] font-medium">
              Số Lượng : <span className="font-normal">30</span>
            </h1>
            <h1 className="text-[18px] mt-4 text-[#010101]">
              Ngày Mượn : <span className="font-normal">3/6/2023</span>
            </h1>
            <h1 className="text-[18px] mt-4 text-[#010101]">
              Ngày Trả : <span className="font-normal">3/6/2023</span>
            </h1>
            <h1 className="text-[18px] mt-4 text-[#010101] font-medium">
              Giá Mượn : <span className="font-normal">200.000 đ</span>
            </h1>
          </div>
          <button
            onClick={handlePromissoryCart}
            className="w-full py-[8px] bg-[#f51167] text-white font-semibold"
          >
            Tạo Phiếu
          </button>
        </div>
      </div>
    </div>
  );
};
export default BorrowListBook;
