import AccordionItem from "./AccordionItem";

const Accordion = ({data}) => {
    console.log(data)
    return ( <div className="accordion">
       {data.map((item,i)=><AccordionItem number={i} text={item.text} key={i} title={item.title}/>)}
    </div> );
}
 
export default Accordion;