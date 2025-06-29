import './CultivationLogs.css'; // nếu là file CSS

export default function CultivationLogs({cultivationLogs}) {

    const convertDate = (dateStr) => {
        const date = new Date(dateStr);

        // Định dạng ngày tháng theo kiểu Việt Nam
        const formattedDate = date.toLocaleDateString('vi-VN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        return formattedDate;
    }
    return (<div>
        <main className='container' role="main" aria-label="Dòng thời gian Chăn nuôi">
            <section className="title-section">
                <h1>
                    <span className="title-icon" aria-hidden="true" title="icon thời gian chăn nuôi">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             aria-hidden="true" width="24" height="24" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h3l3 8 4-16 3 8h4"/>
                        </svg>
                    </span>
                    Dòng thời gian Chăn nuôi
                </h1>
                <p className="subtitle">Hồ sơ đầy đủ các hoạt động quản lý đàn cừu</p>
            </section>

            {cultivationLogs.map((item, index) => (
                <article className="timeline" aria-label="Mục timeline đầu tiên">
                    <div className="timeline-item" role="region" aria-labelledby="event1-title">
                        <div className="timeline-icon" aria-hidden="true" title="biểu tượng cây phát triển">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2.2"
                                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="18"
                                 height="18">
                                <path d="M12 22v-4M6 12a6 6 0 0112 0c0 3-3 6-6 6s-6-3-6-6z"></path>
                                <path d="M12 2a4 4 0 014 4c0 2-1 3-2 4"></path>
                            </svg>
                        </div>
                        <h2 id="event1-title">{item.name}</h2>
                        <div className="info-line" aria-label="Thông tin ngày tháng, thời tiết và nhiệt độ">
                            <span>
                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {convertDate(item.date)}
                              </span>
                        </div>

                        <p className="desc">{item.description}</p>
                        <div className="image-row">
                            {item.mediaUri.map((image, index) => (
                                <div className="image-preview" aria-label="Hình ảnh đồng cỏ phía đông">
                                    <img
                                        src={image.path}
                                        alt="Cánh đồng cỏ xanh rộng lớn gần các vách đá hướng ra đại dương với bầu trời trong xanh"
                                        onError="this.onerror=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e7a9fcbe-d492-44ac-be40-e18c56748c63.png';"
                                    />
                                </div>
                            ))}


                        </div>
                        <div className="image-count" aria-label="Số lượng hình ảnh kèm theo: 1 hình ảnh">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.8"
                                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="12.5" r="1.5"></circle>
                                <path d="M21 5l-5 7-4-4-5 7"></path>
                            </svg>
                            {item.mediaUri.length} hình ảnh
                        </div>
                    </div>
                </article>
            ))}



        </main>

    </div>)
}