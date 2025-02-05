import React from 'react'

export default function Last() {
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-start space-y-6 pt-20" style={{ fontFamily: 'Pacifico, cursive' }}>
            <h1 className="sm:text-6xl font-bold text-pink-500 drop-shadow-md tracking-wide text-center text-4xl">Thank you for spending your time, <br />see you soon.</h1>
            <div className="flex justify-center items-start">
                <img className="object-contain sm:w-[50rem] sm:h-[35rem] w-full h-[20rem]" src={"https://media3.giphy.com/media/WTS1u198Ld1ba/200.webp?cid=790b7611832wgv529q97zorkl48oderc39immx5lmxwkskfb&ep=v1_gifs_search&rid=200.webp&ct=g"} alt="..." />
            </div>
        </div>
    )
}