import QrScanner from 'qr-scanner';
import {useEffect, useRef, useState} from 'react';
import './QRScanner.css';

const QRScanner = ({onScan}) => {
    const videoElementRef = useRef(null);
    const [scanned, setScannedText] = useState('');

    useEffect(() => {
        const video = videoElementRef.current;
        const qrScanner = new QrScanner(
            video,
            (result) => {
                console.log('decoded qr code:', result);
                setScannedText(result.data);
                if (onScan) {
                    onScan(result.data);
                }
            },
            {
                returnDetailedScanResult: true,
                highlightScanRegion: true,
                highlightCodeOutline: true,
            }
        );
        qrScanner.start();
        console.log('start');

        return () => {
            console.log(qrScanner);
            qrScanner.stop();
            qrScanner.destroy();
        };
    }, []);

    // const qrScanner = new QrScanner(videoElement, (result) =>
    //   console.log('decoded qr code:', result)
    // );

    return (
        <div>
            <div className="videoWrapper">
                <video className="qrVideo" ref={videoElementRef}/>
            </div>
            <p className="scannedText">SCANNED: {scanned}</p>
        </div>
    );
};

export default QRScanner;
