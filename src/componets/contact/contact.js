import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send the form data to the Node.js server
        fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
            });
    };

    return (
        <section id="c" className="py-5 rounded">
            <div className="container" >
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="card" id='contact'>
                            <div className="card-body">
                                <h3 className="text-center mb-4">Contact Me</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 ">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            placeholder="Your Message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className='p-2'
                                            id='contact_button'
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
