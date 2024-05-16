import { useEffect, useState } from "react";

export const BarcodeScannerOld = () => {
    const [barcodeDisplay, setBarcodeDisplay] = useState('No barcode displayed')
    let barcodeScan = "";
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.keyCode === 13 && barcodeScan.length > 3) {
                handleScan(barcodeScan)
                return
            }
            //skip shiftkey
            if (e.keyCode === 16) {
                return;
            }
            //push to keycode   
            barcodeScan += e.key
            setTimeout(() => {
                barcodeScan = ""
            }, 100)
        }
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }

    }, [])

    const handleScan = (barcode: string) => {
        setBarcodeDisplay(barcode);
    }

    return (
        <div>Barcode scan:  {barcodeDisplay}</div>
    )
}