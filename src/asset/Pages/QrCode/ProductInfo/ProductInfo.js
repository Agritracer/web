import './ProductInfo.css'; // nếu là file CSS


export default function ProductInfo({product, productInfo, harvestFindOne}) {

    console.log(product)
    return (
        <div>
            <section className="product-detail" aria-label="Chi tiết sản phẩm sợi len cao cấp">
                <div className="gallery" aria-label="Bộ ảnh sản phẩm">
                    <div className="main-image-container">

                        <img
                            src={harvestFindOne.images[0].path}
                            alt="Bình và chai thủy tinh đầy sữa tươi trên bàn gỗ ngoài trời, nền cây xanh tự nhiên mờ"
                            id="main-image"
                        />

                    </div>

                    <div className="thumbnails" role="list" aria-label="Ảnh thu nhỏ sản phẩm">
                        {harvestFindOne.images.map((image, i) => (
                            <div role="listitem" className="thumbnail active" tabIndex="0" aria-current="true">
                                <img
                                    src={image.path}
                                    alt="Bình và chai thủy tinh đầy sữa tươi trên bàn gỗ ngoài trời, nền cây xanh tự nhiên mờ"
                                />
                            </div>
                        ))}


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
