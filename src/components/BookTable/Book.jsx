import React from 'react'
import { images } from '../../constants'
import "./Book.css"

export default function Book() {
  return (
    <div className="colorlib-com-by-html">
            <div className="div-container">
                <div className="div-booking-content">
                    <div className="div-booking-form">
                        <form className="form">
                            <div className="heading">
                                <div className="booking-place-for">
                                    Booking place for your
                                    <br />
                                    dinner!
                                </div>
                            </div>
                            <div className="div-form-group">
                                <span className="overlap-group">
                                    <input className="text-wrapper"
                                    placeholder='Your Name' />
                                </span>
                            </div>
                            <div className="overlap-wrapper">
                                
                                <div className="overlap-group">
                                        <input className="text-wrapper"
                                        placeholder='Your phone number' />
                                    </div>
                                </div>
                            <div className="list">
                                <div className="item">
                                    <div className="div">Email</div>
                                </div>
                            </div>
                            <div className="item-wrapper">
                                <div className="item">
                                    <div className="div">Time</div>

                                </div>
                            </div>
                            <div className="div-form-radio">
                                <div className="label-select-your">Select Your Dining Space</div>
                                <div className="div-radio-item-list">
                                    <div className="label">
                                        <div className="text-wrapper-2">2</div>
                                    </div>
                                    <div className="span-radio-item">
                                        <div className="text-wrapper-3">Person</div>
                                        <div className="div-wrapper">
                                            <div className="text-wrapper-4">4</div>
                                        </div>
                                    </div>
                                    <div className="label-2">
                                        <div className="text-wrapper-2">6</div>
                                    </div>
                                    <div className="label-3">
                                        <div className="text-wrapper-2">8</div>
                                    </div>
                                    <div className="label-4">
                                        <div className="text-wrapper-2">10</div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-form-submit">
                                <div className="input">
                                    <div className="text-wrapper-5">Book now</div>
                                </div>
                                <p className="link-verify-your">Verify your booking info from your phone</p>
                            </div>
                        </form>
                    </div>
                    <div className="div-booking-image">
                        <img className="form-img-jpg" alt="Form img jpg" src={images.findus} />
                    </div>
                </div>
            </div>
        </div>
   
  )
}
