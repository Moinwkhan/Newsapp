function Contact() {
    return (
        <>
            <div className="container">
                <div className="main-content">
                    <h2>Contact Us</h2>
                    <p>Have a question or feedback? Send us a message.</p>
                    <div className="contact-form">
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>

                            <button id="btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
