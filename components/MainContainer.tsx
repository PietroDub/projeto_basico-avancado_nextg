import NavBar from "./NavBar";
import Footer from "./Footer";

// tipando o children para React.ReactNode, que é o tipo mais genérico para elementos React
export default function MainContainer({ children }: { children: React.ReactNode }) {
    return (
        <body className="main-container min-h-screen">
            <NavBar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </body>
    );
}   