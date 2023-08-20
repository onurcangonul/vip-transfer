import Headers from"../components/Header"
import { Box } from "@mui/material";
const Layout = ({ children }) => {
    return (
        <>
            <Headers />
            <main>
                <Box sx={{display:"flex" ,p:"20px"}}>
                    {children}
                </Box>
            </main>
        </>
    );
};
export default Layout;
