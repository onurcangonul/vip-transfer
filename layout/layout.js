import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/material";
const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main>
                <Box sx={{display:"flex"}}>
                    {children}
                </Box>
            </main>
        </>
    );
};
export default Layout;
