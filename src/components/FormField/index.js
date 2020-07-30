import React from 'react';

function FormField({ label, type, name, value, onChange }) {
    return (
        <div>
            <label>
                {label}: 
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                /> <br /><br />
            </label>
        </div>

    )
}

export default FormField;