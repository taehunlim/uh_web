import React from 'react';
import { IoIosClose } from 'react-icons/io';
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuSearch from "./MobileMenuSearch";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
    return (
        <div className={`offcanvas-mobile-menu ${activeStatus ? "active" : ""}`}>
            <div
                className="offcanvas-mobile-menu__overlay-close"
                onClick={() => getActiveStatus(false)}
            />
            <div className="offcanvas-mobile-menu__wrapper">
                <button
                    className="offcanvas-mobile-menu__close"
                    onClick={() => getActiveStatus(false)}
                >
                    <IoIosClose />
                </button>
                <div className="offcanvas-mobile-menu__content-wrapper">
                    <div className="offcanvas-mobile-menu__content">

                        <MobileMenuSearch/>
                        <MobileMenuNav getActiveStatus={getActiveStatus}/>

                        <div className="offcanvas-mobile-menu__middle">
                            <div className="lang-curr-style">
                                <span className="title">
                                    Choose Language
                                </span>
                                <select>
                                    <option value="ko">Korean</option>
                                    <option value="en">English</option>
                                </select>
                            </div>
                        </div>

                        {/*Widget*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
