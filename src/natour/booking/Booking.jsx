import React from 'react'

export default function Booking() {
    return (
        <div className="section-booking">
            <div className="booking">

                <div className="booking-form">
                    <form className="form">
                        <h2 className="h-secondary">
                            start booking now
                        </h2>
                        <div className="form-group">
                            <input type="text" className="form-input"  placeholder='Full Name'/>
                            <label htmlFor='name' className="form-label">Full name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-input"  placeholder='email address'/>
                            <label For="email" className="form-label">Email address</label>
                        </div>
                        <div className="form-group">
                            <input type="radio" className="form-radio-input" id="small" name="size" />
                            <label For="small" className="form-label">
                                <span className="form-radio-button"></span>
                                small tour group
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="radio" className="form-radio-input" id="small" name="size" />
                            <label For="large" className="form-label">
                                <span className="form-radio-button"></span>
                                large tour group
                            </label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-green">next step</button>
                        </div>

                    </form>
                </div>
                <div className="booking-empty"></div>
            </div>

        </div>
    )
}
