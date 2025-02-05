import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function StepOne() {
    const router = useRouter()
    const [showToast, setShowToast] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const openModal = () => {
        if (!selectedLocation) {
            setShowToast(true)
            return
        }
        setShowToast(false)
        setIsModalOpen(true)
    };
    const closeModal = () => setIsModalOpen(false);
    const handleMoveOn = () => {
        if (!email) {
            setEmailError('Please enter your email')
            return;
        }
        setEmailError('')
        closeModal()
        sendEmail()
    }

    async function sendEmail() {
        const { date, time } = router.query
        const selectedDate = new Date(date);
        
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: email,
                name: 'Nominiii',
                date: selectedDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }),
                time: time,
                location: `${locations[selectedLocation]['name']} 💕`,
                locationUrl: locations[selectedLocation]['location']
            }),
        });
    
        const data = await response.json();
        if (data.message === 'Email sent successfully!') {
            setEmail("")
            router.push("/last")
        }
    }
    
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-start space-y-6 pt-20" style={{ fontFamily: 'Pacifico, cursive' }}>
            <h1 className="sm:text-6xl font-bold text-pink-500 drop-shadow-md tracking-wide text-center text-4xl">Where to meet?</h1>
            <p className="mb-10 text-xl text-pink-500 drop-shadow-md tracking-wide text-center sm:text-lg">(select your comfortable location)</p>
            <div className="w-full sm:w-2/3 grid grid-cols-2 gap-5 sm:grid-cols-3">
                <img onClick={() => setSelectedLocation("square")} className={`w-[20rem] cursor-pointer object-contain border-2 ${selectedLocation === 'square' ? 'border-pink-500' : 'border-transparent'} rounded sm:w-full`} src="https://meanwhileinmongolia.com/wp-content/uploads/2020/07/Sukhbaatar-Square.jpg" alt="square" />
                <img onClick={() => setSelectedLocation("hureelen")} className={`w-[20rem] cursor-pointer object-contain border-2 ${selectedLocation === 'hureelen' ? 'border-pink-500' : 'border-transparent'} rounded sm:w-full`} src="https://mongolia.gov.mn/uploads/editor/images/bf8f9fb5586ba2ebabbfb108717cfb0a.jpg" alt="hureelen" />
                <img onClick={() => setSelectedLocation("park")} className={`w-[20rem] cursor-pointer object-contain border-2 ${selectedLocation === 'park' ? 'border-pink-500' : 'border-transparent'} rounded sm:w-full`} src="https://news.mn/wp-content/uploads/2021/06/%D2%AE%D0%BD%D0%B4%D1%8D%D1%81%D0%BD%D0%B8%D0%B9-%D1%81%D0%BE%D1%91%D0%BB-%D0%B0%D0%BC%D1%80%D0%B0%D0%BB%D1%82%D1%8B%D0%BD-%D1%85%D2%AF%D1%80%D1%8D%D1%8D%D0%BB%D1%8D%D0%BD-%D1%81%D1%83%D1%80%D0%B2-18-of-23.jpg" alt="park" />
                <img onClick={() => setSelectedLocation("zaisan")} className={`w-[20rem] cursor-pointer object-contain border-2 ${selectedLocation === 'zaisan' ? 'border-pink-500' : 'border-transparent'} rounded sm:w-full`} src="https://montsame.mn/files/p1bkaue1eo17il1khf1g57qde1is41.jpg" alt="zaisan" />
                <img onClick={() => setSelectedLocation("sansar")} className={`w-[20rem] cursor-pointer object-contain border-2 ${selectedLocation === 'sansar' ? 'border-pink-500' : 'border-transparent'} rounded sm:w-full`} src="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/464566153_8743544485707290_5726995561134857118_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=daRzCgeGk1cQ7kNvgF6kYCe&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=Ab50gSTOZivO-tkOBpFcB32&oh=00_AYChwBq0Twy6rsciO_atlubkTyAoxWrQ5014r4GyxY_l6A&oe=67A8E29C" alt="sansar" />
                <img onClick={() => setSelectedLocation("ikhdelguur")} className={`w-[20rem] cursor-pointer object-contain border-2 ${selectedLocation === 'ikhdelguur' ? 'border-pink-500' : 'border-transparent'} rounded sm:w-full`} src="https://mongolia-guide.com/uploads/main/ulaanbaatar/places/state_department1.jpg" alt="ikhdelguur" />
            </div>
            <button onClick={openModal} className="sm:px-6 sm:py-3 bg-pink-400 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-pink-500 hover:shadow-lg active:scale-95 px-4 py-2">Confirm</button>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-6 sm:w-11/12 sm:p-4">
                        <div className='space-y-2'>
                            <p className='text-xl text-pink-500 drop-shadow-md tracking-wide sm:text-lg'>Enter your email:</p>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-transparent text-center focus:outline-none border rounded py-1 px-3' type='email' />
                            {emailError && <p className="text-red-500">{emailError}</p>}
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleMoveOn} className="sm:px-4 sm:py-2 bg-green-500 text-white rounded-full shadow-lg px-3 py-1">Send</button>
                            <button onClick={closeModal} className="sm:px-4 sm:py-2 bg-red-500 text-white rounded-full shadow-lg px-3 py-1">Back</button>
                        </div>
                    </div>
                </div>
            )}
            {showToast && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg">
                    Please select a location!
                </div>
            )}
        </div>
    )
}

const locations = {
    "square": {
        name: "Сүхбаатарын талбай",
        location: "https://www.google.com/maps/place/Sukhbaatar+Square,+Ulaanbaatar/@47.9186367,106.9151445,404m/data=!3m2!1e3!4b1!4m10!1m2!2m1!1ssukhbaatar+square!3m6!1s0x5d96924423920d8d:0x458ba9ebf806cbfd!8m2!3d47.9188416!4d106.9175883!15sChFzdWtoYmFhdGFyIHNxdWFyZZIBC3Rvd25fc3F1YXJl4AEA!16s%2Fg%2F11bw3fs8jr!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
    },
    "hureelen": {
        name: "ҮНДЭСНИЙ ЦЭЦЭРЛЭГТ ХҮРЭЭЛЭН",
        location: "https://www.google.com/maps/place/National+Park/@47.9003165,106.9414366,809m/data=!3m2!1e3!4b1!4m6!3m5!1s0x5d96917fe2daf83f:0xe1cb4220d40e873f!8m2!3d47.9003129!4d106.9440115!16s%2Fg%2F12jsg2_bh!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
    },
    "park": {
        name: "Улаанбаатар парк",
        location: "https://www.google.com/maps/place/Ulaanbaatar+Park/@47.9091712,106.8404774,12936m/data=!3m1!1e3!4m10!1m2!2m1!1sundesnii+park!3m6!1s0x5d9693003cb9fb7f:0x41a1a0b0557393c5!8m2!3d47.9091712!4d106.9166951!15sCg11bmRlc25paSBwYXJrWg8iDXVuZGVzbmlpIHBhcmuSAQRwYXJrmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJ5ZFVsNk1saDNFQUXgAQD6AQQIABAv!16s%2Fg%2F11y5gyvdyr!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
    },
    "zaisan": {
        name: "Zaisan Hill Complex",
        location: "https://www.google.com/maps/place/Zaisan+Hill+Complex/@47.8800888,106.9049307,3236m/data=!3m1!1e3!4m10!1m2!2m1!1szaisan+hill!3m6!1s0x5d9693c266e8655f:0x3b79d7be43321e10!8m2!3d47.8858106!4d106.9158024!15sCgt6YWlzYW4gaGlsbFoNIgt6YWlzYW4gaGlsbJIBDWV2ZW50X3BsYW5uZXLgAQA!16s%2Fg%2F11gfkdrs04!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
    },
    "sansar": {
        name: "Сансарын тунель",
        location: "https://www.google.com/maps?client=firefox-b-d&sca_esv=3e8fa11f411ec4ec&output=search&q=sansariin+tunel&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBv10Kbgy3ptSBM6mMfaz8zDVX4b2W1tiDkb3uUgOX2bJxrMxIOTDX_gXmWq_A0POERicHPPfPayt6GhdEhLRV4eyOgsTMSwdtcA2Pv1Z56VGpuwTyqDs_zof5gCRRSYCJQOlVYg&entry=mc&ved=1t:200715&ictx=111"
    },
    "ikhdelguur": {
        name: "Улсын Их Дэлгүүр",
        location: "https://www.google.com/maps/place/State+Department+Store/@47.9184376,106.873012,6467m/data=!3m1!1e3!4m10!1m2!2m1!1sikh+delguur!3m6!1s0x5d96925a7fe7a275:0xf5aeb8f7dc26e490!8m2!3d47.9168099!4d106.9063627!15sCgtpa2ggZGVsZ3V1cloNIgtpa2ggZGVsZ3V1cpIBEGRlcGFydG1lbnRfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjRObUZmYTFsbkVBReABAPoBBAgAECg!16s%2Fg%2F11r8gjnxg!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
    }
}