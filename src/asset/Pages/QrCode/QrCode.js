import {InputText} from "primereact/inputtext";
import React, {useEffect, useRef, useState} from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import HerdInfo from "./HerdInfo/HerdInfo";
import CulivationLogs from "./CultivationLogs/CultivationLogs";
import HarvestInfo from "./HarvestInfo/HarvestInfo";
import QRScanner from "./QRScanner/QRScanner";
import {Dialog} from "primereact/dialog";
import {Toast} from "primereact/toast";


export default function SizeDemo({idherd, herdname}) {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [isOpenQr, setOpenQr] = useState(false);
    const toast = useRef(null);

    const searchQrCode = async (value) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/qrcode/${value.input}` // Giả sử bạn muốn tìm kiếm theo mã QR
            );
            if (!response.ok) {
                setData([])
                notifyScannerQrcode("Server Error");
                throw new Error(`Server trả về lỗi: ${response.status}`);
            }
            const result = await response.json();
            setData(result); // Giả sử dữ liệu trả về là một mảng
            console.log(result);
            notifyScannerQrcode("Success");

        } catch (error) {
            console.error("Lỗi khi gửi dữ liệu:", error);
            notifyScannerQrcode("Error");
        }
    };

    const notifyScannerQrcode = (type) => {
        if (type === "Success") {
            toast.current.show({
                severity: "success",
                summary: "Thành công",
                life: 3000,
            });
        } else if (type === "Error") {
            toast.current.show({
                severity: "error",
                summary: "Lỗi xảy ra",
                life: 3000,
            });
        } else if (type === "Server Error") {
            toast.current.show({
                severity: "warn",
                summary: "Lỗi từ máy chủ",
                life: 3000,
            });
        }
    }

    const handleScanResult = async (dataQrcode) => {
        console.log("Kết quả từ QRScanner:", dataQrcode);
        setOpenQr(false);
        setInput(dataQrcode);
        await searchQrCode(dataQrcode);
    };

    const closeQRCode = () => {
        setOpenQr(false);
    };
    const qrScanner = isOpenQr ? <QRScanner onScan={handleScanResult}/> : null;

    return (<div className={idherd ? "" : "div_main"}>
        <Toast className="toast" ref={toast} />
        <Dialog
            header="Quét mã QRCode"
            style={{width: "50%"}}
            visible={isOpenQr}
            onHide={closeQRCode}
        >
            <div>{qrScanner}</div>
        </Dialog>
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
                <button
                    className="p-button p-component"
                    onClick={() => setOpenQr(true)}
                >
                    Quét QRCode
                </button>

            </div>
        </div>
        <div className="card">
            {data.product ? (<>
                <ProductInfo product={data.product} productInfo={data.productInfo}
                             harvestFindOne={data.harvestFindOne}/>
                <HerdInfo farm={data.farm} category={data.category} herd={data.herd}/>
                <CulivationLogs cultivationLogs={data.cultivationLogs}/>
                <HarvestInfo harvest={data.harvest} harvestFindOne={data.harvestFindOne}/>
            </>) : (<span>Không có dữ liệu.</span>)}
        </div>
    </div>);
}
