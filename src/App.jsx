import { useState } from "react";
import Actions from "./Actions"
import List from "./List"
import Title from "./Title"
import data from "./data.js"

function App() {
    const [leftItems, setLeftItems] = useState(data);
    const [rightItems, setRightItems] = useState([]);
    const [leftCheckedItems, setLeftCheckedItems] = useState([]);
    const [rightCheckedItems, setRightCheckedItems] = useState([]);

    const handleToggle = (item, list) => {
        if (list === 'right') {
            const currentIndex = rightCheckedItems.indexOf(item);
            const newCheckedItems = [...rightCheckedItems];

            if (currentIndex === -1) {
                newCheckedItems.push(item);
            } else {
                newCheckedItems.splice(currentIndex, 1);
            }
            setRightCheckedItems(newCheckedItems);
        } else if (list === 'left') {
            const currentIndex = leftCheckedItems.indexOf(item);
            const newCheckedItems = [...leftCheckedItems];

            if (currentIndex === -1) {
                newCheckedItems.push(item);
            } else {
                newCheckedItems.splice(currentIndex, 1);
            }
            setLeftCheckedItems(newCheckedItems);
        } else {
            return;
        }
    };

    const moveItems = (direction) => {
        if (direction === 'left') {
            setLeftItems(leftItems.concat(rightCheckedItems));
            setRightItems(rightItems.filter((item) => rightCheckedItems.indexOf(item) === -1));
            setRightCheckedItems([]);
        } else if (direction === 'right') {
            setRightItems(rightItems.concat(leftCheckedItems));
            setLeftItems(leftItems.filter((item) => leftCheckedItems.indexOf(item) === -1));
            setLeftCheckedItems([]);
        } else {
            return;
        }
    };

    return (
        <div className="flex items-center flex-col bg-teal-400 h-[100vh]">
            <Title />
            <div className="flex w-full h-[50%] mt-20 items-center justify-center">
                <List data={leftItems} name={'left'} handleToggle={handleToggle} />
                <Actions moveItems={moveItems} />
                <List data={rightItems} name={'right'} handleToggle={handleToggle} />
            </div>
        </div>
    )
}

export default App