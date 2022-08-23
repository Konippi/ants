import {FC, memo} from "react";

const Header: FC = memo(function Header() {
    
    return (
        <header className="fixed w-full h-16 bg-stone-900 text-white text-center flex items-center justify-center">
            header
        </header>
    );
});

export default Header;
