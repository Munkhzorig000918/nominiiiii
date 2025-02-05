import { useRouter } from "next/router";
import { useState } from "react";

export default function StepOne() {
    const router = useRouter()
    const today = new Date().toISOString().split('T')[0];

    const [showToast, setShowToast] = useState(false);
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedTime, setSelectedTime] = useState(null)

    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleMoveOn = () => {
        if (!selectedDate || !selectedTime) {
            setShowToast(true)
        } else {
            setShowToast(false)
            router.push(`/steptwo?date=${selectedDate}&time=${selectedTime}`)
        }
    }
    
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-start space-y-6 pt-20" style={{ fontFamily: 'Pacifico, cursive' }}>
            <h1 className="sm:text-6xl font-bold text-pink-500 drop-shadow-md tracking-wide text-center text-4xl">Are you free on ...</h1>
            <p className="mb-10 text-xl text-pink-500 drop-shadow-md tracking-wide text-center">(select a date)</p>
            <div className="flex items-center space-x-6">
                <p>Which day:</p>
                <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
            <div className="flex items-center space-x-6">
                <p>Which time:</p>
                <input
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                />
            </div>
            <button 
                onClick={handleMoveOn}
                className="sm:px-6 sm:py-3 bg-pink-400 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-pink-500 hover:shadow-lg active:scale-95 px-4 py-2"
            >Next</button>
            {showToast && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg">
                    Please select a date!
                </div>
            )}
        </div>
    )
}
