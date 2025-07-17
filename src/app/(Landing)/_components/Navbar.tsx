export default function Navbar() {
    return(
        <>
            <div className="absolute z-30 top-0 left-0 right-0 bg-transparent">
                <header className="flex justify-between ml-20 mr-20 items-center p-8 text-white">
                    <h1 className="font-bold text-2xl">Factogen</h1>
                    <ul className="flex gap-4 font-medium">
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Signup</li>
                    </ul>
                </header>
            </div>
        </>
    )
}