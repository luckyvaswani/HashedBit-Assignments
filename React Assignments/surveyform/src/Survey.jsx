import React, { useState } from 'react';
import './App.css'
function SurveyForm() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);

    const handleChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedAnswer(`You have Selected  ${selectedAnswer}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Which is Your Favourite Language ? </h2>
            <div>
                <input
                    type="radio"
                    value="Java"
                    checked={selectedAnswer === 'Java'}
                    onChange={handleChange}
                />Java
                <input
                    type="radio"
                    value="Python"
                    checked={selectedAnswer === 'Python'}
                    onChange={handleChange}
                />
                Python
                <input
                    type="radio"
                    value="JavaScript"
                    checked={selectedAnswer === 'JavaScript'}
                    onChange={handleChange}
                />
                JavaScript
                <input
                    type="radio"
                    value="C++"
                    checked={selectedAnswer === 'C++'}
                    onChange={handleChange}
                />
                C++
            </div><br />
            <button type="submit" >
                Submit
            </button>
            <p> <b><u>{submittedAnswer}</u></b></p>
        </form>
    );
}

export default SurveyForm;
