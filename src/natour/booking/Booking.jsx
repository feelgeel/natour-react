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
                            <label For="email" className="form-label">Email address</label>
                        </div>
                        <div class="form-group form-group-radio">
                            <div class="form-radio-group">
                                <input type="radio" class="form-radio-input" id="small" name="size" />
                                <label for="small" class="form-radio-label">
                                    <span class="form-radio-button"></span>
                                    Small tour group
                                </label>
                            </div>

                            <div class="form-radio-group">
                                <input type="radio" class="form-radio-input" id="large" name="size" />
                                <label for="large" class="form-radio-label">
                                    <span class="form-radio-button"></span>
                                    Large tour group
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="btn btn-green form-group-button">next step</span>
                        </div>

                    </form>
                </div>
                <div className="booking-empty"></div>
            </div>

        </div>
    )
}
