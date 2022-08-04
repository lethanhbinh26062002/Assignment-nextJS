import { LayoutProps } from "../../models/layout";
import Header from "../Header";

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="px-8">
            {children}
        </div>
    )
}

export default Layout