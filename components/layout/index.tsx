import { LayoutProps } from "../../models/layout";
import Header from "../Header";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout