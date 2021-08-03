import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {

    const [formFields, setFormFields] = useState({
        location: ''
    });

    const onLocationChange = (event)=>{
        setFormFields({
            ...formFields,
            name: event.target.value
        })
    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        // props.addStudentCallback({
        //     nameData: formFields.name,
        //     emailData: formFields.email
        // })

        // setFormFields({
        //     name: '',
        //     email: '',
        // })
    };


    return (
        <form onSubmit = {onFormSubmit}>
            <div>
                <label htmlFor="location">Location:</label>
                <input 
                    name="location" 
                    value={formFields.location} 
                    onChange={onNameChange} />
            </div>

            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

SearchForm.propTypes = {
    sendLocationCallback: PropTypes.func.isRequired
};

export default SearchForm;