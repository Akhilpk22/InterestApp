
import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const [interest,setinterest]=useState(0)
  const [principle,setprinciple]=useState(0)
  const [rate,setrate]=useState(0)
  const [year,setyear]=useState(0)
   const [isPrincipleValid,setisPrincipleValid] =useState(true)
   const [isratevalid,setisratevalid] =useState(true)
   const [isyearvalid,setisyearvalid] =useState(true)
   
    const validateInput =(e)=>{
      // {key}=object destructuering 
      const {name,value}=e.target
      // logic  to check number validate - regular expersion 
      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name==="principle")
          {
          setprinciple(value)
          setisPrincipleValid(true)
        } 
        else if(name==="rate")
        {
          setrate(value)
          setisratevalid(true)
        }
        else 
        {
          setyear(value)
          setisyearvalid(true)
        }


      }else{
        if(name==="principle")
        {
          setprinciple(value)
          setisPrincipleValid(false)
        }
        else if(name==="rate")
        {
          setrate(value)
          setisratevalid(false)
        }
        else 
        {
          setyear(value)
          setisyearvalid(false)
        }

      }
    }
    const handleCalculate =(e)=>{
      e.preventDefault()
      if(!principle || !year || !rate){
        alert("please fill the form completey!!!")
      }else{
        setinterest(principle*year*rate/100)
      }
    }
    const handleReset=(e)=>{
      setinterest(0)
      setprinciple(0)
      setyear(0)
      setrate(0)
      setisPrincipleValid(true)
      setisyearvalid(true)
      setisratevalid(true)

    }


  return (
    <div style={{height:'95vh'}}  className='d-flex justify-content-center align-items-center w-100 '>
      <div style={{width:'500px'}} className="bg-light p-5 rounded">
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div style={{height:'150px'}} className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-dark rounded shadow">
          <h1>₹{''} {interest}</h1>
          <p className='fw-bolder'>Total simple interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate}>
          <div className="mb-3">
          <TextField className='w-100'id="outlined-basic" label="₹ principle amount " variant="outlined" value={principle || ""} 
          name='principle' onChange={(e)=>validateInput(e)}/>
          </div>
              {
                !isPrincipleValid &&
                <div className='mb-3 text-danger fw-bolder'>
                  *Invalid  user Input 
                </div>
              }

          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic" label="Rate of interest(p.a) %" variant="outlined" value={rate || ""} 
          name='rate' onChange={(e)=>validateInput(e)}/>
          </div>
           {
                !isratevalid &&
                <div className='mb-3 text-danger fw-bolder'>
                  *Invalid  user Input 
                </div>
              }

          <div className="mb-4">
          <TextField className='w-100' id="outlined-basic" label="Time period(yr)" variant="outlined" value={year || ""}
          name='year' onChange={(e)=>validateInput(e)} />
          </div>
            {
                !isyearvalid &&
                <div className='mb-3 text-danger fw-bolder'>
                  *Invalid  user Input 
                </div>
              }

          <Stack direction="row" spacing={2}>

            <Button type='submit' style={{height:'70px',width:'200px'}} variant="contained"
            disabled={isPrincipleValid && isyearvalid && isratevalid?false:true}>Calulate
            
            </Button>
            <Button style={{height:'70px',width:'200px'}} variant="outlined" onClick={handleReset}  >Reset</Button>
           </Stack>

        </form>

      </div>
    </div>
  );
}

export default App;
