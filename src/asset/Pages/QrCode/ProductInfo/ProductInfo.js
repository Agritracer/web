import './ProductInfo.css'; // nếu là file CSS


export default function ProductInfo({product, productInfo}) {

    console.log(product)
    return (
        <div>
            <section className="product-detail" aria-label="Chi tiết sản phẩm sợi len cao cấp">
                <div className="gallery" aria-label="Bộ ảnh sản phẩm">
                    <div className="main-image-container">
                        <button className="arrow-btn left" aria-label="Ảnh trước" id="btn-prev" type="button">❮</button>
                        <img
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94625153-2efb-493e-bff2-7ccf4a5c9736.png"
                            alt="Bình và chai thủy tinh đầy sữa tươi trên bàn gỗ ngoài trời, nền cây xanh tự nhiên mờ"
                            id="main-image"
                        />
                        <button className="arrow-btn right" aria-label="Ảnh tiếp theo" id="btn-next" type="button">❯
                        </button>
                    </div>

                    <div className="thumbnails" role="list" aria-label="Ảnh thu nhỏ sản phẩm">
                        <div role="listitem" className="thumbnail active" tabIndex="0" aria-current="true">
                            <img
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58ae4b8b-2b45-486f-8a32-9ab3e847da86.png"
                                alt="Bình và chai thủy tinh đầy sữa tươi trên bàn gỗ ngoài trời, nền cây xanh tự nhiên mờ"
                            />
                        </div>
                        <div role="listitem" className="thumbnail" tabIndex="0">
                            <img
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbd16d01-dca0-47b8-8a31-07fd66beceaf.png"
                                alt="Cây cỏ phủ lớp sương sớm dưới ánh nắng mặt trời lúc bình minh"
                            />
                        </div>
                        <div role="listitem" className="thumbnail" tabIndex="0">
                            <img
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ed752b4-2ea2-4b0b-909f-7f72a0863698.png"
                                alt="Cô gái đứng giữa cánh đồng lúa mì vàng rực trong nắng chiều, mặt ánh lên niềm vui"
                            />
                        </div>
                    </div>
                </div>
                <div className="details">
                    <h2>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            style={{
                                verticalAlign: 'middle',
                                marginRight: '6px',
                                fill: '#059669',
                                width: '20px',
                                height: '20px',
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7m7-4v4m3 0H9m9 0a2 2 0 0 1 2 2m-2 6a2 2 0 0 1-2 2"/>
                        </svg>
                        Chi tiết sản phẩm
                    </h2>

                    <div className="product-info">
                        <div className="info-box weight">
                            <span className="label">Trọng lượng</span>
                            <span className="value">{product.net_weight} {product.unit}</span>
                        </div>
                        <div className="info-box price">
                            <span className="label">Giá</span>
                            <span
                                className="value">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {product.currency_unit}</span>
                        </div>
                    </div>

                    <p className="description"> {productInfo.description} </p>

                    <h2 className="certifications">
                        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                        </svg>
                        Chứng nhận & Chất lượng
                    </h2>

                    <div className="cert-tags">
                        <div className="cert-tag">Hữu cơ</div>
                        <div className="cert-tag">Phúc lợi động vật được chứng nhận</div>
                        <div className="cert-tag">Nông nghiệp bền vững</div>
                    </div>

                    <div className="guarantee" tabIndex="0">
                        <strong>Đảm bảo Truy xuất nguồn gốc</strong>
                        <p>
                            Sản phẩm này đi kèm với tài liệu truy xuất nguồn gốc hoàn chỉnh, đảm bảo tính minh bạch từ
                            trang trại đến sản phẩm hoàn thiện. Mọi bước của quy trình sản xuất đều được ghi lại và xác
                            minh.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
