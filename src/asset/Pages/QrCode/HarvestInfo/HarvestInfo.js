import './HarvestInfo.css';

export default function HarvestInfo({harvest, harvestFindOne}) {
    const totalQuantity = harvest.reduce((sum, item) => sum + item.quantity, 0);

    const date = new Date(harvestFindOne.date);

    // Định dạng ngày tháng theo kiểu Việt Nam
    const formattedDate = date.toLocaleDateString('vi-VN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });


    return (
        <div>
            <main className="container" role="main" aria-label="Hồ sơ Thu hoạch sản phẩm">
                <header>

                    <div className="header-text">
                        <h1>Hồ sơ Thu hoạch</h1>
                        <p>Hồ sơ sản xuất và chế biến từ đàn cừu này</p>
                    </div>
                </header>

                <section className="top-stats"
                         aria-label="Thống kê tổng quát sản lượng, loại sản phẩm và tiêu chuẩn chất lượng">
                    <article className="stat-card" tabIndex="0">
                        <div className="stat-icon" aria-hidden="true" style={{color: '#059669'}}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <polyline points="3 17 9 11 13 15 21 7"/>
                                <polyline points="14 7 21 7 21 14"/>
                            </svg>
                        </div>
                        <div className="stat-text">
                            <p className="stat-title">Tổng sản lượng</p>
                            <p className="stat-value kg">{totalQuantity} <span
                                style={{fontWeight: 600, fontSize: '1rem'}}>kg</span></p>
                            <p className="stat-subtext">Tất cả sản phẩm</p>
                        </div>
                    </article>

                    <article className="stat-card" tabIndex="0">
                        <div className="stat-icon" aria-hidden="true" style={{color: '#2563eb'}}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="7" height="7" rx="1"/>
                                <rect x="14" y="3" width="7" height="7" rx="1"/>
                                <rect x="14" y="14" width="7" height="7" rx="1"/>
                                <rect x="3" y="14" width="7" height="7" rx="1"/>
                            </svg>
                        </div>
                        <div className="stat-text">
                            <p className="stat-title">Loại sản phẩm</p>
                            <p className="stat-value number">{harvest.length}</p>
                            <p className="stat-subtext">Sản phẩm khác nhau</p>
                        </div>
                    </article>

                    <article className="stat-card" tabIndex="0">
                        <div className="stat-icon" aria-hidden="true" style={{color: '#d97706'}}>
                            <svg stroke="currentColor" fill="none" strokeWidth="1.75" viewBox="0 0 24 24"
                                 strokeLinejoin="round" strokeLinecap="round">
                                <path d="M12 21l-2-5.196-5-2.5 5-1.5 2-5.804 2 5.804 5 1.5-5 2.5z"/>
                            </svg>
                        </div>
                        <div className="stat-text">
                            <p className="stat-title">Tiêu chuẩn chất lượng</p>
                            <p className="stat-value premium">Cao cấp</p>
                            <p className="stat-subtext">Chất lượng nhất quán</p>
                        </div>
                    </article>
                </section>

                {/* Phần harvest-info ở đây bạn có thể tách thành component riêng, nhưng tạm thời giữ nguyên để sửa lỗi */}
                <section className="harvest-list" aria-label="Danh sách các sản phẩm thu hoạch">
                    <article className="harvest-card" tabIndex="0">
                        <div className="harvest-info">
                            <header className="harvest-header">
                                <h2 className="harvest-title">{harvestFindOne.name}</h2>
                                <div className="meta-item">
                                    <span className="meta-label">{formattedDate}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">{harvestFindOne.quantity} kg</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">1 hình ảnh</span>
                                </div>
                                <span className="badge">Cao cấp</span>
                            </header>
                            <div className="harvest-stats">
                                <div className="harvest-stat kg">
                                    <p className="value">{harvestFindOne.quantity}</p>
                                    <p className="label">KG</p>
                                </div>
                                <div className="harvest-stat premium">
                                    <p className="value">Cao cấp</p>
                                    <p className="label">Cấp độ</p>
                                </div>
                                <div className="harvest-stat orange">
                                    <p className="value">{date.getDate()}</p>
                                    <p className="label">{date.toLocaleDateString('vi-VN', { month: 'long' })}</p>
                                </div>
                                <div className="harvest-stat">
                                    <p className="value">1</p>
                                    <p className="label">Hình ảnh</p>
                                </div>
                            </div>
                        </div>
                        <div className="harvest-image-container" aria-hidden="true">
                            <img
                                src={harvestFindOne.images[0].path}
                                alt="Cánh đồng rộng mùa đông"
                                onError={(e) => {
                                    e.target.style.backgroundColor = '#ddd';
                                    e.target.alt = 'Hình ảnh không hiển thị được';
                                }}
                            />
                        </div>
                    </article>

                    {/* Bạn có thể lặp lại cấu trúc trên cho các mục khác tương tự */}
                </section>
            </main>
        </div>
    );
}
