import React, { useState } from 'react';
import BarcodeReader from 'react-barcode-reader';

interface BarcodeReaderProps {
    scanValue: (val:string) => void;
}

const BarcodeScanner = (props:BarcodeReaderProps) => {
    const [scannedData, setScannedData] = useState(null);

    const handleScan = (data: any) => {
        console.log(`Scanned data: ${data}`);
        setScannedData(data);
        props.scanValue(data);
        // Perform actions with the scanned data
    };

    const handleError = (err: any) => {
        console.error(err);
    };

    return (
        <div>
            <BarcodeReader
                onError={handleError}
                onScan={handleScan}
            />           
        </div>
    );
};

export default BarcodeScanner;