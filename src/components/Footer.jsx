import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-slate-950 border-t border-slate-900 text-center">
            <p className="text-slate-500 text-sm">
                Copyright &copy; {new Date().getFullYear()} All rights reserved | Benjamin Olufemi
            </p>
        </footer>
    );
};

export default Footer;
