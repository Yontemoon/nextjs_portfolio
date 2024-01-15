import CurrentPage from "../ui/currentPage/CurrentPage";
import MinimizeNavbar from "../ui/minimizeNavBar/MinimizeNavbar";
import MinimizeHeader from "../ui/minimizeHeader/MinimizeHeader";

const ProjectPage = () => {
    return (
        <div className="flex border-box w-screen h-screen">
            <MinimizeNavbar pageName="about"/>
            <CurrentPage>
                <main className="flex justify-center">
                    Project Page
                </main>
            </CurrentPage>
            <MinimizeNavbar pageName="contact"/>
            <MinimizeHeader/>
        </div>
    );
};

export default ProjectPage;