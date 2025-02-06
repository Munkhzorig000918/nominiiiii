import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [nope, setNope] = useState(false)

  const heyGirlLink = "https://media2.giphy.com/media/VUjOl3k7KvEHNsZ5Q6/200.webp?cid=ecf05e476yq1hi0mgoc4xk4ab0in0gv450yykf5xf0r34l5j&ep=v1_gifs_search&rid=200.webp&ct=g"
  const cryLink = "https://media3.giphy.com/media/10tD7GP9lHfaPC/200.webp?cid=790b7611qqgh0lvcsh4fh7s52gexvk7osprvhvesj2zmnca7&ep=v1_gifs_search&rid=200.webp&ct=g"
  const loadingLink = "https://media3.giphy.com/media/l3nWhI38IWDofyDrW/giphy.webp?cid=790b761197b9go31y4ao9mpzjyyah8277be8x302whcrd3nk&ep=v1_gifs_search&rid=giphy.webp&ct=g"

  useEffect(() => {
    handleTrack()
  }, [])

  const handleTrack = async () => {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          to: `m4gii.dev@gmail.com`,
      }),
    });
  }

  const handleNo = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setNope(true)
    setIsLoading(false)
  }
  
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-start space-y-6 pt-20" style={{ fontFamily: 'Pacifico, cursive' }}>
      <h1 className="mb-10 text-4xl sm:text-6xl font-bold text-pink-500 drop-shadow-md tracking-wide text-center">Wanna Date with me?</h1>
      <div className="flex items-center space-x-10 flex-row">
        <button onClick={() => router.push("/thanku")} className="sm:px-6 sm:py-3 bg-pink-400 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-pink-500 hover:shadow-lg active:scale-95 px-4 py-2">Yes</button>
        <button onClick={handleNo} className="sm:px-6 sm:py-3 bg-gray-800 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-gray-900 hover:shadow-lg active:scale-95 px-4 py-2">No</button>
      </div>
      <div className="flex justify-center items-start">
        <img className="object-contain sm:w-[35rem] sm:h-[35rem] w-[20rem] h-[20rem]" src={isLoading ? loadingLink : nope ? cryLink : heyGirlLink} alt="Dating theme GIF" />
      </div>
    </div>
  )
}
