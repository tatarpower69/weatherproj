const City = require("../models/City");
const axios = require("axios");
const { citySchema } = require("../middleware/validate");
const mongoose = require("mongoose");


exports.createCity = async (req, res, next) => {
  try {
    await citySchema.validateAsync(req.body);

    const city = await City.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json(city);
  } catch (err) {
    next(err);
  }
};

exports.getCities = async (req, res, next) => {
  try {
    const cities = await City.find({
      user: req.user._id,
    });

    res.json(cities);
  } catch (err) {
    next(err);
  }
};

exports.getCity = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const city = await City.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!city) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(city);
  } catch (err) {
    next(err);
  }
};


exports.updateCity = async (req, res, next) => {
  try {
    const city = await City.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      req.body,
      { new: true }
    );

    if (!city)
      return res.status(404).json({ message: "Not found" });

    res.json(city);
  } catch (err) {
    next(err);
  }
};

exports.deleteCity = async (req, res, next) => {
  try {
    const city = await City.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!city)
      return res.status(404).json({ message: "Not found" });

    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

exports.getWeather = async (req, res, next) => {
  try {
    const city = req.params.city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

    const response = await axios.get(url);

    res.json(response.data);
  } catch (err) {
    next(err);
  }
};
