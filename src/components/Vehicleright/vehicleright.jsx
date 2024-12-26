import React, { useState } from 'react'
import './vehicleright.css'
import { ChevronDown } from 'lucide-react';

const vehicleright = () => {
  const options = [
    'Karachi',
    'Ryk',
    'Islamabad',
    'Queta'
    ]
  const [value , setValue] = useState("")
  function handleClick(e){
    setValue(e.target.value);
    // console.log(e.target.value);
  }
  console.log(value);
 

  const options2 = [
    'Audi',
    'Swift',
    'Sports',
    'RR'
    ]
    const [value2 , setValue2] = useState("")
    function handleModel(e){
      setValue2(e.target.value);
      // console.log(e.target.value);
    }
    console.log(value2);

    const options3 = [
    'Karachi',
    'Ryk',
    'Islamabad',
    'Queta'
      ]
      const [value3 , setValue3] = useState("")
      function handleCity(e){
        setValue3(e.target.value);
        // console.log(e.target.value);
      }
      console.log(value3);

      const options4 = [
        'Karachi',
        'Ryk',
        'Islamabad',
        'Queta'
          ]
          const [value4 , setValue4] = useState("")
          function handleDocument(e){
            setValue4(e.target.value);
            // console.log(e.target.value);
          }
          console.log(value4);
          const options5 = [
            'Bank',
            'Account',
            'Paypal',
            'Debit Card'
              ]
              const [value5 , setValue5] = useState("")
              function handleTranmission(e){
                setValue5(e.target.value);
              }
              console.log(value5);

              const [condition, setCondition] = useState([]);
              function handleCondition(e) {
                const conditionType = e.target.value;
                setCondition((prevCondition) => [...prevCondition, conditionType]);
                
              }


              const [fuel, setFuel] = useState([]);
              function handleFuel(e) {
                const fuelType = e.target.value;
                setFuel((prevFuel) => [...prevFuel, fuelType]);
              }

          
            
              function printarray() {
                const arr = [];
                arr.push(value);
                arr.push(value2);
                arr.push(value3);
                arr.push(value4);
                arr.push(value5);
                arr.push(...condition);
                arr.push(...fuel);
                
                
                console.log(arr);
              }
            
              
    
  return (
    <div className='vehicleright-main'>
      <div className="dropdowns">
        <div className="make">
          <h4>Make</h4>
          <div className="dropdown1">
            
            <select name="Select Model" id="" className='Select-box1' value={value}  onChange={handleClick}>
            {
           options.map((option,i)=>(
            <option  key={i}>{option}</option>
           ))
        }
            </select>
          </div>
        </div>

        <div className="make">
          <h4>Model</h4>
          <div className="dropdown1">
          <select name="Select Model" id="" className='Select-box1' value={value2}  onChange={handleModel} >
          {
           options2.map((option,r)=>(
            <option  key={r}>{option}</option>
           ))
        }
            </select>
          </div>
        </div>
        <h4 className='price-range-pkr'>Price Range per day (pkr)</h4>
        <div className="min-max-price">
          <h6>50,000</h6>
          <h6>500M</h6>
        </div>
        <input type="range" className='range-input' />
        <p className='min-max'>Minimum range 50,000 Rs</p>
        <p className='min-max'>Maximum range 500M Rs</p>

        <div className="make">
          <h4>Registration City</h4>
          <div className="dropdown1">
          <select name="Select Model" id="" className='Select-box1' value={value3}  onChange={handleCity} >
          {
           options3.map((option,f)=>(
            <option  key={f}>{option}</option>
           ))
        }
            </select>
          </div>
        </div>

        <div className="make">
          <h4>Car Documents</h4>
          <div className="dropdown1">
          <select name="Select Model" id="" className='Select-box1' value={value4}  onChange={handleDocument} >
          {
           options4.map((option,f)=>(
            <option  key={f}>{option}</option>
           ))
        }
            </select>
          </div>
        </div>

        <div className="make">
          <h4>Transmission</h4>
          <div className="dropdown1">
          <select name="Select Model" id="" className='Select-box1' value={value5}  onChange={handleTranmission} >
          {
           options5.map((option,f)=>(
            <option  key={f}>{option}</option>
           ))
        }
            </select>
          </div>
        </div>
        <div className="make">
          <h4>Condition</h4>
          <div className="condition-btns">
            <div className="new-btn">
              <button className='new-btn-btn' onClick={handleCondition} value='New' >New</button>
            </div>
            <div className="new-btn">
              <button className='new-btn-btn' onClick={handleCondition} value='USED'>USED</button>
            </div>
          </div>
        </div>

        <div className="make">
          <h4>Fuel</h4>
          <div className="condition-btns">
            <div className="new-btn">
              <button className='new-btn-btn'  onClick={handleFuel} value='New'>New</button>
            </div>
            <div className="new-btn">
              <button className='new-btn-btn'onClick={handleFuel} value='USED'>USED</button>
            </div>
            <div className="new-btn">
              <button className='new-btn-btn'onClick={handleFuel} value='LPG'>LPG</button>
            </div>
            <div className="new-btn">
              <button className='new-btn-btn'onClick={handleFuel} value='CNG'>CNG</button>
            </div>
            <div className="new-btn">
              <button className='new-btn-btn'onClick={handleFuel} value='Electric'>Electric</button>
            </div>

          </div>
          <div className="new-btn">
            <button className='new-btn-btn' onClick={handleFuel} value='Hybrid'>Hybrid</button>
          </div>
        </div>

        <div className="apply-btn-div" onClick={printarray}>
          <button className='apply-btn' >Apply</button>
        </div>

      </div>
    </div>
  )
}

export default vehicleright
