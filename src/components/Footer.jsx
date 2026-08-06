import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} ALAMIN.dev. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;