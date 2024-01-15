import Link from "next/link";
import "./minimizeNavBar.css"

const MinimizeNavbar = ({pageName}: {pageName: string}) => {


    return (
        <Link href={`/${pageName}`} className="miniNavbar">
            <div>
            </div>
        </Link>

    );
};

export default MinimizeNavbar;