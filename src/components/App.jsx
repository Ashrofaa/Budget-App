import React from 'react';
import Input from './Input';
import Item from './Item';
import Circles from './Circles';

export default function App() {

    const [itemsList, setItemsList] = React.useState([]);
    const [items, setItems] = React.useState({
        itemName: "",
        itemPrice: "",
        itemNumber: "",
        initBudget: ""
    });
    const [budget, setBudget] = React.useState(0);
    const [spent, setSpent] = React.useState(0);
    const [filled, setFilled] = React.useState(false);

    function handleClickAdd() {
        if (items.itemName === "" || items.itemNumber === "" || items.itemPrice === "") {setFilled(true)}
        else {
          setFilled(false)
          setItemsList(prevList => [...prevList, items]);
        }
    }

    React.useEffect(() => {
      var count = 0;
      itemsList.map(item => count+= (item.itemPrice*item.itemNumber)); 
      setSpent(count);
    }, [itemsList]);

    function handleClickBudget() {
        var newBudget = items.initBudget;
        setBudget(newBudget);
    }

    function handleClickReset() {
      setItems({
        itemName: "",
        itemPrice: "",
        itemNumber: "",
        initBudget: ""
      });
      setItemsList([]);
      setBudget(0);
      setSpent(0);
      setFilled(false);
    }

  return (
    <div className='container'>
      <div className='setup secDiv'>
        <div className='setupDiv'>
            <Input text="Enter your budget: " id="initBudget" type="number" fn={setItems} value={items.initBudget} />
            <button type='button' onClick={handleClickBudget} className='userBtn'>Set</button>
        </div>
        <div className='setupDiv'>
            <Input text="Enter item name: " id="itemName" type="text" fn={setItems} value={items.itemName} />
            <Input text="Enter item price: " id="itemPrice" type="number" fn={setItems} value={items.itemPrice} />
            <Input text="Enter number of items: " id="itemNumber" type="number" fn={setItems} value={items.itemNumber} />
            <button type='button' onClick={handleClickAdd} className='userBtn'>Add</button><br />
            {filled && <p>*Kindly fill all above fields</p>}
        </div>
      </div>
      <div className='initBudget secDiv'>
        {budget ? <h1>Your initial budget is: {budget} EGP</h1> : <h1>You haven't set your budget</h1>}
        <h1>You have spent a total of:</h1>
        <Circles spent={spent} budget={budget} />
        {(budget > 0) && ((spent > budget) ? <h1>You've exceeded your budget!</h1> : <h1>Your remaining budget is: {budget - spent} EGP</h1>)}
      </div>
      <div className='items secDiv'>
        <h2 className='detail detailMain'>Item</h2>
        <h2 className='detail detailMain'>Price</h2>
        <h2 className='detail detailMain'>No.</h2>
        <hr />
        {itemsList.map((item, index)=> <Item name={item.itemName} price={item.itemPrice} no={item.itemNumber} key={index} />)}
      </div>
      <div className='reset'>
        <button type='button' className='resetBtn' onClick={handleClickReset}><span>Reset</span></button>
      </div>
    </div>
  )
}
