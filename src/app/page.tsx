import Image from "next/image";
import NewYear from "./components/NewYear";
export default function Home() {
    return (
        <main className="w-screen h-screen bg-purple-300">
            <NewYear />
        </main>
    );
}
