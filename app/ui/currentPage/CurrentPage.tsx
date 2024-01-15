import "./currentPage.css"

const CurrentPage = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='currentPage'>
            {children}
        </main>
    );
};

export default CurrentPage;