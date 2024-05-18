const Property = require('../models/Property');
const User = require('../models/User');
const nodemailer = require('nodemailer');

const addProperty = async (req, res) => {
  const { place, area, bedrooms, bathrooms, nearby } = req.body;
  const sellerId = req.user.id;
  try {
    const newProperty = new Property({ sellerId, place, area, bedrooms, bathrooms, nearby });
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProperties = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const properties = await Property.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProperty = async (req, res) => {
  const { id } = req.params;
  const { place, area, bedrooms, bathrooms, nearby } = req.body;
  try {
    const property = await Property.findByIdAndUpdate(
      id,
      { place, area, bedrooms, bathrooms, nearby },
      { new: true }
    );
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    await Property.findByIdAndDelete(id);
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const likeProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findById(id);
    property.likes += 1;
    await property.save();
    res.json({ likes: property.likes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const interestedInProperty = async (req, res) => {
  const { id } = req.params;
  const buyerId = req.user.id;
  try {
    const property = await Property.findById(id).populate('sellerId');
    const seller = property.sellerId;
    const buyer = await User.findById(buyerId);
    
    // Send email to seller
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: seller.email,
      subject: 'New interest in your property',
      text: `Buyer ${buyer.firstName} ${buyer.lastName} is interested in your property. Contact: ${buyer.email}, ${buyer.phoneNumber}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      } else {
        res.json({ message: 'Seller notified', sellerDetails: { email: seller.email, phoneNumber: seller.phoneNumber } });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProperty, getProperties, updateProperty, deleteProperty, likeProperty, interestedInProperty };
