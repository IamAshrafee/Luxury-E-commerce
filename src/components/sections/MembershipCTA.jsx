import React from 'react'
import './MembershipCTA.css'

const MembershipCTA = () => {
    return (
        <section className="membership" id="membership">
            <div className="membership-bg"></div>
            <div className="container membership-container">
                <div className="membership-content glass-panel">
                    <h2>The Private <span className="gold-text">Circle</span></h2>
                    <p>Access to our rarest collections is reserved for members. Request an invitation to join.</p>

                    <form className="membership-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email Address" className="input-field" required />
                        <button type="submit" className="submit-btn">Request Access</button>
                    </form>
                    <p className="disclaimer">Limited availability. Application subject to review.</p>
                </div>
            </div>
        </section>
    )
}

export default MembershipCTA
