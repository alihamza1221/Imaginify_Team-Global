import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {

    return (
        <aside className="sidebar">
            <div className="flex flex-col size-full gap-4">
                <Link href="/" className="sidebar-logo">
                    <Image
                        src=""
                        alt="logo"
                        width={180}
                        height={28}
                    />
                </Link>
            </div>
        </aside>
    )
}