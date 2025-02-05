import { useRouter } from "next/router";

export default function StepOne() {
    const router = useRouter()
    
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center space-y-20" style={{ fontFamily: 'Pacifico, cursive' }}>
            {/* <h1 className="text-6xl font-bold text-pink-500 drop-shadow-md tracking-wide text-center">I appreciate your time</h1> */}
            <div className="flex justify-center items-start">
                <img className="object-contain sm:w-[35rem] sm:h-[35rem] w-[20rem] h-[20rem]" src={"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXE0YzAyMzlkeG80OTVpeXM0YnZmN3ZydzA1cXZtczVsaHNxdjd0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/edFF9tEQEjVAMkDO3W/giphy.gif"} alt="..." />
            </div>
            <button onClick={() => router.push("/stepone")} className="sm:px-6 sm:py-3 bg-pink-400 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-pink-500 hover:shadow-lg active:scale-95 px-4 py-2">Let&apos;s move on</button>
        </div>
    )
}
