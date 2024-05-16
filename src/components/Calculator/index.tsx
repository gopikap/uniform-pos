import React, { useEffect, useState } from 'react';
import { StyledClearButton, StyledNumberButton } from '../Shared/Styles/TableStyle';
interface CalProps {
    onEqualClick?: () => void;
    currentNumber: (numVal:number) => void;
    isReset?:boolean
}
function Calculator(props:CalProps) {
    const [display, setDisplay] = useState('0');
    const [currentNumber, setCurrentNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [previousNumber, setPreviousNumber] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        if (props.isReset) {
            setCurrentNumber('');
            setPreviousNumber('');
        }
    },[props.isReset])

    useEffect(() => {
        props.currentNumber(parseFloat(currentNumber));
    },[currentNumber])
    
    // Function to handle keypress events
    const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key;
        if (/\d/.test(key)) {
            // Accumulate digits for two-digit numbers
            setInput((prevInput) => prevInput + key);
            handleButtonNumberClick(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            // Handle operator key press
            setInput((prevInput) => prevInput + key);
            //handleButtonOperatorClick(key);
        } else if (key === 'Enter' || key === '=') {
            // Handle Enter or equal key press
            setInput((prevInput) => prevInput + '=');
           // handleButtonEqualsClick();
        } else if (key === 'Escape' || key === 'c') {
            // Handle Escape or 'c' key press to clear
            setInput((prevInput) => prevInput + 'C');
            handleButtonClear();
        }
    };

    const handleClear = () => {
        setDisplay('0');
        var currentNum = currentNumber;
        if(currentNum !== '') {
            currentNum = currentNum.substring(0, currentNum.length - 1)     
        }
        setCurrentNumber(currentNum);
        setOperator('');
        setPreviousNumber(currentNum);
        setInput('');
    };

    // Add event listener when the component mounts
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const handleButtonNumberClick = (number: string) => {
        if (display === '0' && number !== '0' && previousNumber !== '') {
            var newNum = previousNumber + number;
            setDisplay(number);
            setCurrentNumber(newNum);
        } else if (operator) {
            setDisplay(number);
            setCurrentNumber(number);
            setOperator('');
        } else {
            setDisplay(currentNumber === '0' ? number : currentNumber + number);
            setCurrentNumber(currentNumber === '0' ? number : currentNumber + number);
        }        
    };

    const handleButtonOperatorClick = (newOperator: string) => {
        if (operator && currentNumber && previousNumber) {
            const result = calculateResult(
                parseFloat(previousNumber),
                parseFloat(currentNumber),
                operator
            );
            setDisplay(result.toString());
            setCurrentNumber(result.toString());
            setOperator(newOperator);
            setPreviousNumber(result.toString());
        } else {
            setOperator(newOperator);
            setPreviousNumber(currentNumber);
            setCurrentNumber('');
        }
    };

    const handleButtonEqualsClick = () => {
        //@ts-ignore
        props.onEqualClick()
    };

    const handleButtonClear = () => {
        setDisplay('0');
        setCurrentNumber('');
        setOperator('');
        setPreviousNumber('');
    };

    const calculateResult = (num1: number, num2: number, operator: string) => {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return num2;
        }
    };

    return (
        <div className="calculator">
            <div className="buttons">
                
                <div className="row">
                    <StyledNumberButton onClick={() => handleButtonNumberClick('1')}>1</StyledNumberButton>
                    <StyledNumberButton onClick={() => handleButtonNumberClick('2')}>2</StyledNumberButton>
                    <StyledNumberButton onClick={() => handleButtonNumberClick('3')}>3</StyledNumberButton>                    
                    {/* <StyledNumberButton onClick={() => handleButtonEqualsClick()}>=</StyledNumberButton> */}
                </div>
                <div className="row">
                    <StyledNumberButton onClick={() => handleButtonNumberClick('4')}>4</StyledNumberButton>
                    <StyledNumberButton onClick={() => handleButtonNumberClick('5')}>5</StyledNumberButton>                    
                    <StyledNumberButton onClick={() => handleButtonNumberClick('6')}>6</StyledNumberButton>
                </div>
                <div className="row">                    
                    <StyledNumberButton onClick={() => handleButtonNumberClick('7')}>7</StyledNumberButton>
                    <StyledNumberButton onClick={() => handleButtonNumberClick('8')}>8</StyledNumberButton>
                    <StyledNumberButton onClick={() => handleButtonNumberClick('9')}>9</StyledNumberButton>
                    
                </div>
                <div className='row'>
                    <StyledNumberButton onClick={() => handleButtonNumberClick('0')}>0</StyledNumberButton>
                    <StyledNumberButton onClick={() => handleClear()}>C</StyledNumberButton>
                    <StyledNumberButton onClick={() => handleButtonNumberClick('.')}>.</StyledNumberButton>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
