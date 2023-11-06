import { useState } from "react";

const AccordionItem = ({ text, title, number }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <span className="number">{number}</span>
            <span className="title ">{title}</span>
            <span className="icon ">{isOpen ? "+" : "-"}</span>
            {isOpen && <span className="content-box ">{text}</span>}
        </div>
    );
};

export default AccordionItem;
