import React, {useState} from "react";
import {RiMenuLine} from 'react-icons/ri';
import summary from "../images/agreement.png";
import TexToSpeech from "../images/text-to-speech.png";
import Translation from "../images/languages.png";
import {BsPen, IoLanguageSharp, FiMic} from 'react-icons/fa';

function Sidebar() {
    const sidabarCollapsed = localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = useState(sidabarCollapsed ? false : true);

    const handleToggler = () => {
        if(isExpanded) {
            setIsExpanded(false);
            localStorage.setItem('sidebar-collapsed', true);
            return;
        }
        setIsExpanded(true);
        localStorage.setItem('sidebar-collapsed');
    }


    return(
        <div className={isExpanded ? "Sidebar" : "Sidebar collapsed"}>
            <div className="sidebar-header">
                <RiMenuLine className="sidebar-icon" onClick={handleToggler} />
                <h1 className="sidebar-logo">Clickl</h1>
            </div>
            <div className="sidebar-items">
                <div className="item">
                    <img src={summary} className="sidebar-icon" alt="Summary" height="50px" />
                    <span className="sidebar-text">Summary</span>
                </div>
                <div className="item">
                    <img src={Translation} className="sidebar-icon" alt="Summary" height="50px" />
                    <span className="sidebar-text">Translation</span>
                </div>
                <div className="item">
                    <img src={TexToSpeech} className="sidebar-icon" alt="Summary" height="50px" />
                    <span className="sidebar-text">Text To Speech</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;