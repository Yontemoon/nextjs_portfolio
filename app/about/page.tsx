import React from 'react';
import MinimizeNavbar from '../ui/minimizeNavBar/MinimizeNavbar';
import CurrentPage from '../ui/currentPage/CurrentPage';
import MinimizeHeader from '../ui/minimizeHeader/MinimizeHeader';

const AboutPage = () => {
    return (
        <div className='flex border-box w-screen h-screen'>
            <CurrentPage>
                <div>
                    <p className='flex justify-center'>
                        About page
                    </p>
                </div>
            </CurrentPage>
            <MinimizeNavbar pageName='projects'/>
            <MinimizeNavbar pageName='contact'/>
            <MinimizeHeader/>
        </div>

    );
};

export default AboutPage;