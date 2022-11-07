import React from "react";
import Output from "./Output"

export default function MainApp () {

    const [formData, setFormData] = React.useState({
        FirstName: "",
        LastName: "",
        number: "",
        email: "",
        birth: "",
        favFood: "",
        aboutYou: ""
    })

    const [badge, setBadge] = React.useState([])

    function handleChange (e) {
        console.log(formData)

        const {value, name} = e.target
        setFormData(old => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    
    function handleSubmit (event) {
        event.preventDefault()

        setFormData({
            FirstName: "",
            LastName: "",
            number: "",
            email: "",
            birth: "",
            favFood: "",
            aboutYou: ""
        })
        
        setBadge (old => [ ...old, formData])
        // console.log(badge)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="FirstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.FirstName}
                    minLength={3}
                ></input>

                <input
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.LastName}
                    minLength={3}
                ></input>

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    minLength={3}
                ></input>

                <input
                    type="number"
                    name="number"
                    placeholder="Phone"
                    onChange={handleChange}
                    value={formData.number}
                    minLength={3}
                ></input>

                <input
                    type="text"
                    name="birth"
                    placeholder="Place of birth"
                    onChange={handleChange}
                    value={formData.birth}
                    minLength={3}
                ></input>

                <input
                type="text"
                name="aboutYou"
                placeholder="Tell us about you"
                onChange={handleChange}
                value={formData.aboutYou}
                minLength={3}
                disabled={formData.aboutYou}
                ></input>

                <button disabled={!formData.FirstName}>Submit</button>
            </form>
            <Output 
            badge={badge}/>
        </div>
    )
}