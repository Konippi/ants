import React, { FC,  memo,  ReactNode } from "react";
import { Header } from "../organisms";

type Props = {
    children: ReactNode;
}

const Layout: FC<Props> = memo(function Layout({children}: Props) {
    return (
        <>
            <Header />
            <main>
                <div>
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
});

export default Layout;