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
                            <input type="text" className="form-input" placeholder='Full Name' />
                            <label htmlFor='name' className="form-label">Full name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-input" placeholder='email address' />
                            <label htmlFor="email" className="form-label">Email address</label>
                        </div>
                        <div className="form-group form-group-radio">
                            <div className="form-radio-group">
                                <input type="radio" className="form-radio-input" id="small" name="size" />
                                <label htmlFor="small" className="form-radio-label">
                                    <span className="form-radio-button"></span>
                                    Small tour group
                                </label>
                            </div>

                            <div className="form-radio-group">
                                <input type="radio" className="form-radio-input" id="large" name="size" />
                                <label htmlFor="large" className="form-radio-label">
                                    <span className="form-radio-button"></span>
                                    Large tour group
                                </label>
                            </div>
                        </div>
                        <div className="form-group form-group-btn ">
                            <span className="btn btn-green form-group-button">next step</span>
                        </div>

                    </form>
                </div>
                <div className="booking-empty"></div>
            </div>

        </div>
    )
}
