import './Herd.css';

export default function HerdInfo({farm,category,herd}) {
    console.log(farm)
    return (
        <div>
            <div className="product-detail" role="main" aria-label="Thông tin Đàn cừu">
                <header>
                    <h1>Thông tin Đàn cừu</h1>

                </header>
                <section className="main-content">
                    <div className="images" aria-label="Ảnh Đàn cừu và trang trại">
                        <div className="main-image">
                            <img
                                src={herd.images[0].path}
                                alt="Ảnh chụp cận cảnh chân người đang đi trên sân ngoài trời vào buổi hoàng hôn với ánh sáng ấm áp"
                            />
                            <div className="dots" aria-label="Trình chiếu ảnh tham khảo" role="list">
                                <span className="active" role="listitem" aria-current="true"></span>
                                <span role="listitem"></span>
                                <span role="listitem"></span>
                            </div>
                        </div>

                        <div className="thumbnails" role="list" aria-label="Ảnh thu nhỏ lựa chọn">
                            {herd.images.map((image, i) => (
                                <div className="thumbnail selected" role="listitem" tabIndex="0"
                                     aria-label="Ảnh thu nhỏ 1, hình chân người đang đi trên sân ngoài trời">
                                    <img
                                        src={image.path}
                                        alt="Ảnh thu nhỏ chụp cận cảnh chân người đang đi trên sân ngoài trời"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>

                    <aside className="info" aria-label="Thông tin chi tiết Đàn cừu và Trang trại">
                        <section className="info-box" aria-labelledby="breed-heading">
                            <h2 id="breed-heading">Đàn Cừu {herd.name} </h2>

                            <div className="top-info" role="group" aria-label="Thông tin nhanh về đàn cừu">
                                <div className="small-info-card small-info-people" aria-label="Số lượng cừu">
                                    <svg className="small-info-icon" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M7 21v-2a4 4 0 0 1 3-3.87"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <div>
                                        <div style={{fontSize: '0.75rem', color: '#2d3748'}}>Số lượng</div>
                                        <div style={{fontWeight: 700, fontSize: '1.05rem'}}>{herd.member_count}</div>
                                    </div>
                                </div>

                                <div className="small-info-card small-info-ribbon" aria-label="Giống cừu Romney">
                                    <svg className="small-info-icon" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                                        <path d="M15 7v2a4 4 0 0 1-8 0V7"/>
                                    </svg>
                                    <div>
                                        <div style={{fontSize: '0.75rem', color: '#2d3748'}}>Giống</div>
                                        <div style={{fontWeight: 700, fontSize: '1.05rem'}}>{category.name}</div>
                                    </div>
                                </div>

                                <div className="small-info-card small-info-calendar"
                                     aria-label="Thông tin thành lập">
                                    <svg className="small-info-icon" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6"/>
                                        <line x1="8" y1="2" x2="8" y2="6"/>
                                        <line x1="3" y1="10" x2="21" y2="10"/>
                                    </svg>
                                    <div>
                                        <div style={{fontSize: '0.75rem', color: '#2d3748'}}>vị trí</div>
                                        <div style={{fontWeight: 700, fontSize: '1.05rem'}}>{herd.location}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="location" aria-label="Vị trí của trang trại">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                     strokeLinejoin="round" strokeLinecap="round" className="icon-location"
                                     aria-hidden="true">
                                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span> - {farm.address}</span>
                            </div>

                            <p>
                                {category.description}
                            </p>
                        </section>

                        <section className="info-box" aria-labelledby="farm-heading">
                            <h2 id="farm-heading">
                                <svg className="icon-building" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                                     strokeLinejoin="round" aria-hidden="true">
                                    <path d="M3 21V10l8-6 8 6v11"/>
                                    <path d="M9 21v-6h6v6"/>
                                    <path d="M9 10V8h6v2"/>
                                </svg>
                                Thông tin Trang trại
                            </h2>

                            <div className="farm-contact" aria-label="Thông tin liên hệ trang trại">
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                                         viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0Z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                    <span>{farm.name} - {farm.address}</span>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                                         viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2"/>
                                        <path d="M16 12a4 4 0 0 1-8 0c0-1.71 2-4 4-4s4 2.29 4 4Z"/>
                                        <path d="M2 17a16 16 0 0 0 7 3"/>
                                    </svg>
                                    <span>Diện tích: {farm.area}</span>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                                         viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2"/>
                                        <path d="M16 12a4 4 0 0 1-8 0c0-1.71 2-4 4-4s4 2.29 4 4Z"/>
                                        <path d="M2 17a16 16 0 0 0 7 3"/>
                                    </svg>
                                    <span>+64 3 456 7890 | info@meadowbrookfarm.co.nz</span>
                                </div>

                            </div>

                            <strong>Chứng nhận Trang trại</strong>

                            <div className="certifications" aria-label="Danh sách chứng nhận trang trại">
                                {['Chứng nhận Hữu cơ NZ', 'Phúc lợi động vật được chứng nhận', 'Trang trại Trung tính Carbon'].map((text, i) => (
                                    <div key={i} className="cert-badge" tabIndex="0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                             strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                                             viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 19l7-7 3 3-7 7-3-3Z"/>
                                            <path d="M15 7v2a4 4 0 0 1-8 0V7"/>
                                        </svg>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </aside>
                </section>
            </div>
        </div>
    );
}
