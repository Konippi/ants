import {FC, memo} from "react";

const Header: FC = memo(function Header() {
    
    return (
        <header>
            <div className="fixed w-full h-16 bg-stone-900 text-white text-center flex items-center justify-center top-0">
                header
            </div>
            <div className="h-16"></div>
        </header>
    );
});

export default Header;
