import Card from './components/Card';
import ItemDate from './components/ItemDate';
import Item from './components/Item';
import './App.css';

function App() {

  // const itemOneName = "Nirma";
  // const itemTwoName = "SurfExcel";
  // const itemThreeName = "555";

  const response = [
    {
      itemName:"Nirma",
      itemDate:"21",
      itemMonth:"June",
      itemYear:"1998"
    },
    {
      itemName:"SurfExcel",
      itemDate:"22",
      itemMonth:"July",
      itemYear:"1999"
    },
    {
      itemName:"555",
      itemDate:"23",
      itemMonth:"August",
      itemYear:"2000"
    }
  ]

  return (
    <div>

    <Card>
      <Item name={response[0].itemName}>
        Hello Jee Me Hu Aapki First Element
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    </Card>



      {/* <Item name={response[0].itemName}>
        Hello Jee Me Hu Aapki First Element
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate> */}



      {/* <Item name={itemOneName}></Item>
      <ItemDate day='20' month='June' year='1998'></ItemDate>

      <Item name={itemTwoName}></Item>
      <ItemDate day='21' month='July' year='1999'></ItemDate>

      <Item name={itemThreeName}></Item>
      <ItemDate day='22' month='August' year='2000'></ItemDate> */}



      {/* <Item name='Nirma'></Item>
      <ItemDate day='20' month='June' year='1998'></ItemDate>

      <Item name='SurfExcel'></Item>
      <ItemDate day='21' month='July' year='1999'></ItemDate>

      <Item name='555'></Item>
      <ItemDate day='22' month='August' year='2000'></ItemDate> */}



      {/* <Item></Item>
      <ItemDate></ItemDate>

      <Item></Item>
      <ItemDate></ItemDate>

      <Item></Item>
      <ItemDate></ItemDate> */}
      <div className='App'>Hello Jee</div>
    </div>
  );
}

export default App;
