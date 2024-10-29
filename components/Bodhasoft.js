import React, { Fragment, useState } from 'react';

// Sample questions array
const questions = [
  {
  id: 1,
  question: 'What is the purpose of the "const" keyword in JavaScript?',
  options: ['To declare a variable with a constant value', 'To create a function', 'To handle errors', 'To define a loop']
  },
  {
  id: 2,
  question: 'What is the difference between "let" and "var" in JavaScript?',
  options: ['There is no difference', 'The scope of "let" is block-level, while the scope of "var" is function-level', 'The "let" keyword is used for declaring constants, while "var" is used for declaring variables', 'The "let" keyword is used for declaring variables, while "var" is used for declaring functions']
  },
  {
  id: 3,
  question: 'What is the purpose of the "map()" method in JavaScript?',
  options: ['To create a new array with transformed elements', 'To filter an array based on a condition', 'To perform a calculation on each element of an array', 'To sort an array in ascending order']
  },
  {
  id: 4,
  question: 'What is the purpose of the "filter()" method in JavaScript?',
  options: ['To create a new array with elements that pass a certain condition', 'To transform each element of an array', 'To perform a calculation on each element of an array', 'To sort an array in ascending order']
  },
  {
  id: 5,
  question: 'What is the purpose of the "forEach()" method in JavaScript?',
  options: ['To iterate over each element of an array and perform a function', 'To create a new array with transformed elements', 'To filter an array based on a condition', 'To sort an array in ascending order']
  },
  {
  id: 6,
  question: 'What is the purpose of the "arrow function" syntax in JavaScript?',
  options: ['To define a function in a more concise way', 'To declare a variable', 'To handle errors', 'To create a loop']
  },
  {
  id: 7,
  question: 'What is the purpose of the "Promise" object in JavaScript?',
  options: ['To handle asynchronous operations', 'To define a function', 'To declare a variable', 'To sort an array']
  },
  {
  id: 8,
  question: 'What is the purpose of the "async/await" syntax in JavaScript?',
  options: ['To handle asynchronous operations in a more readable way', 'To define a function', 'To declare a variable', 'To sort an array']
  }
  ];
export default function Bodhasoft() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Function to handle the selection of radio buttons
  const handleRadioChange = (questionId, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = [...prevSelectedOptions];
      const existingIndex = updatedOptions.findIndex(
        (item) => item.questionId === questionId
      );
      if (existingIndex !== -1) {
        updatedOptions[existingIndex].option = option;
      } else {
        updatedOptions.push({ questionId, option });
      }
      return updatedOptions;
    });
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='box scrollable'>
          {/* Loop through each question and create a details element */}
          {questions.map((item) => (
            <div className='modulebox' key={item.id}>
              <h3 className='head'>Module {item.id}</h3>
              <details>
                <summary className='summary-button'>unlock</summary>
                <div className='module'>
                  {item.options.map((option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name={`question${item.id}`}
                        id={`question${item.id}option${index}`}
                        onChange={() => handleRadioChange(item.id, option)}
                      />
                     
                      <label htmlFor={`question${item.id}option${index}`}>{option}</label>
                      <hr/>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>
        <div className='box'>
          <div className='compiler'>
            <div className='c-name'>
              <div className='c-box'>
                <h3 className='compiler-name'>Selected Options</h3>
                <button className='run-button'>Run</button>
              </div>
              <div className='c-box'>
                <div className='code-envirornment'>
                   <ul>
                  {selectedOptions.map((item, index) => (
                    <li key={index} className='selected-option'>{item.option}</li>
                  ))}
                </ul>
                </div>
             
                <button className='run-button'>Run</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
