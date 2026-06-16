const Contact = require('../models/contact-model');

const contactForm = async (req, res) => 
{

    try {
        const response = req.body;
        await Contact.create(response);
        res.status(201).json({ message: "Contact form submitted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error contact" });
    }
};

module.exports = { contactForm };