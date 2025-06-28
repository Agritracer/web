import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {InputText} from "primereact/inputtext";
import ImageComponent from "../../../components/Images/Image.jsx";
import React, {useState} from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import HerdInfo from "./HerdInfo/HerdInfo";
import CulivationLogs from "./CultivationLogs/CultivationLogs";
import HarvestInfo from "./HarvestInfo/HarvestInfo";

export default function SizeDemo({idherd, herdname}) {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

   //  http://localhost:5000
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("API endpoint:", apiUrl);

    const searchQrCode = async (value) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/qrcode/${value.input}` // Giả sử bạn muốn tìm kiếm theo mã QR
            );
            if (!response.ok) {
                throw new Error(`Server trả về lỗi: ${response.status}`);
            }
            const result = await response.json();
            setData(result); // Giả sử dữ liệu trả về là một mảng
            console.log(result);
        } catch (error) {
            console.error("Lỗi khi gửi dữ liệu:", error);
        }
    };
    return (<div className={idherd ? "" : "div_main"}>
        {/* input tìm kiếm */}
        <div className="card">
            <div className="flex flex-wrap gap-2 align-items-center ">
                <h4 className="m-0">Nhập mã</h4>
                <span className="p-input-icon-left">
            <i className="pi pi-search"/>
            <InputText
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                placeholder="Tìm kiếm..."
            />
          </span>

                <button
                    className="p-button p-component"
                    onClick={() => {
                        searchQrCode({input});
                    }}
                >
                    Tìm
                </button>

            </div>
        </div>
        <div className="card">
            {data.product ? (<>
                    <ProductInfo product={data.product} productInfo={data.productInfo}/>
                    <HerdInfo info={data.product}/>
                    <CulivationLogs info={data?.product}/>
                    <HarvestInfo info={data?.product}/>
                </>
            ) : (
                <span>Không có dữ liệu.</span>
            )}
        </div>
    </div>);
}
