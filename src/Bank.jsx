import React, { useEffect, useState } from 'react'

const Bank = () => {
    const [amount, setAmount] = useState(0)
    const [flag, setFlag] = useState(false)
    const [balance, setBalance] = useState(localStorage.getItem("balance"))
    const [state, setState] = useState(0)
    function handleChange(e) {
        setAmount(e.target.value)
    }
    function handleDeposit() {
        setBalance(balance => parseFloat(balance) + parseFloat(amount))
    }
    useEffect(() => {
        localStorage.setItem("balance", balance)
    }, [balance, amount])
    function handleWithdraw() {
        if (balance - amount >= 0)
            setBalance(balance => parseFloat(balance) - parseFloat(amount))
    }
    function handleBalance(){
        const remaining = localStorage.getItem("balance")
        setState(remaining)
        setFlag(true)
        setTimeout(() => {
            setFlag(false)
        }, 5000);
    }
    return (
        <div>
            <h1>&#8377;
                {amount}</h1>
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control container my-3"
                    placeholder="Enter amount to deposit or withdraw"
                    value={amount}
                    onChange={handleChange}
                />
            </div>
            <div className="container ">
                <button type="button" className="btn btn-primary mx-3" onClick={() => handleDeposit()}>Add Money</button>
                <button type="button" className="btn btn-primary mx-3" onClick={() => handleWithdraw()} >Withdraw Money</button>
                <button type="button" className="btn btn-primary mx-3" onClick={() => handleBalance()} >Fetch Balance</button>
            </div>
            <br />
            <h4>Balance:&#8377;{flag?state:"****"}</h4>
        </div>
    )
}

export default Bank
