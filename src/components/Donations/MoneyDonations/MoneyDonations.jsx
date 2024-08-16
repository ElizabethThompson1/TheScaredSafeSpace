import React, { useState } from "react";
import "./MoneyDonations.scss";

export const MoneyDonations = () => {
    const donationOptions = [
        { id: 5, amount: 25, label: "$25" },
        { id: 4, amount: 50, label: "$50" },
        { id: 3, amount: 100, label: "$100" },
        { id: 2, amount: 250, label: "$250" },
        { id: 1, amount: 500, label: "$500" },
    ];

    const [selectedOption, setSelectedOption] = useState(null);
    const [customAmount, setCustomAmount] = useState("");

    const handleSelectOption = (id) => {
        setSelectedOption(id);
        const selected = donationOptions.find(option => option.id === id);
        if (selected) {
            setCustomAmount(selected.amount);
        }
    };

    const handleInputChange = (e) => {
        setSelectedOption(null); // Deselect any selected option when manually entering amount
        setCustomAmount(e.target.value);
    };

    const handleSubmit = () => {
        if (customAmount) {
            console.log(`You selected to donate $${customAmount}`);
            // Future integration with payment processing
        } else {
            console.log("Please select or enter a donation amount.");
        }
    };

    return (
        <div className="box">
            <div className="group">
                <div className="div">
                    {donationOptions.map(option => (
                        <div
                            key={option.id}
                            className={`overlap ${selectedOption === option.id ? 'selected' : ''}`}
                            onClick={() => handleSelectOption(option.id)}
                        >
                            <div className="text-wrapper">{option.label}</div>
                        </div>
                    ))}
                </div>
                <div className="group-2">
                    <div className="text-wrapper-6">Other</div>
                    <input
                        type="number"
                        value={customAmount}
                        onChange={handleInputChange}
                        placeholder="Enter Amount"
                        className="input-amount"
                    />
                    <div className="frame" onClick={handleSubmit}>
                    <div className="text-wrapper-8">Submit</div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MoneyDonations;
