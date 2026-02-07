
export function Content() {
    return (
        <main >
            <div className="flex w-full items-center justify-center py-82">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-5xl font-bold text-white">SafeClick</h1>
                    <p className="text-white/50">Check your links before you click them, and stay safe online.</p>

                    <div className="flex w-full">
                        <input type="text" placeholder="Paste your link here" className="w-full px-4 py-2 rounded-l-lg text-white border border-gray-200" />
                        <button className="px-4 py-2 bg-orange-500 text-white rounded-r-lg cursor-pointer">Check</button>
                    </div>
                </div>
            </div>
        </main>
    )
}