import './HarvestInfo.css';

export default function HarvestInfo({harvestInfo}) {
    return (
        <div>
            <main className="container" role="main" aria-label="Hồ sơ Thu hoạch sản phẩm">
                <header>
                    <div className="header-icon" aria-hidden="true" title="Icon hộp">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                             strokeLinejoin="round" strokeLinecap="round">
                            <path
                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                            <line x1="12" y1="22.08" x2="12" y2="12"/>
                        </svg>
                    </div>
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
                            <p className="stat-value kg">1110 <span
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
                            <p className="stat-value number">2</p>
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
                                <h2 className="harvest-title">Len thô</h2>
                                <div className="meta-item">
                                    <span className="meta-label">5 tháng 3, 2024</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">660 kg</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">1 hình ảnh</span>
                                </div>
                                <span className="badge">Cao cấp</span>
                            </header>
                            <div className="harvest-stats">
                                <div className="harvest-stat kg">
                                    <p className="value">660</p>
                                    <p className="label">KG</p>
                                </div>
                                <div className="harvest-stat premium">
                                    <p className="value">Cao cấp</p>
                                    <p className="label">Cấp độ</p>
                                </div>
                                <div className="harvest-stat orange">
                                    <p className="value">5</p>
                                    <p className="label">Tháng 3</p>
                                </div>
                                <div className="harvest-stat">
                                    <p className="value">1</p>
                                    <p className="label">Hình ảnh</p>
                                </div>
                            </div>
                        </div>
                        <div className="harvest-image-container" aria-hidden="true">
                            <img
                                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af44d37f-d2ff-4857-b658-3171c2bd27f6.png"
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
