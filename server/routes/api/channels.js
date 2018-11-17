const express = require("express");
const router = express.Router();
const passport = require("passport");

// @route   GET api/channels/:number
// @desc    Get channels by number
// @access  Private
router.get("/:count/:start", (req, res) => {
  const data = [
    {
      _id: "1",
      channel_name: "SkyScanner",
      number_of_reservations: 4230,
      number_of_flights: 234,
      passengers: 2300,
      products_sold: 4.23,
      revenue: 24340,
      connection_types: ["NDC", "API"]
    },
    {
      _id: "2",
      channel_name: "Agoda.com",
      number_of_reservations: 4230,
      number_of_flights: 802,
      passengers: 2394,
      products_sold: 3,
      revenue: 234340,
      connection_types: ["API"]
    },
    {
      _id: "3",
      channel_name: "www.latam.com",
      number_of_reservations: 4230,
      number_of_flights: 802,
      passengers: 1890,
      products_sold: 1.4,
      revenue: 122340,
      connection_types: ["DIRECT"]
    },
    {
      _id: "4",
      channel_name: "AmadeusX",
      number_of_reservations: 4230,
      number_of_flights: 802,
      passengers: 200,
      products_sold: 1.23,
      revenue: 243340,
      connection_types: ["NDC", "API"]
    },
    {
      _id: "5",
      channel_name: "Sabre Beyond",
      number_of_reservations: 4230,
      number_of_flights: 802,
      passengers: 1890,
      products_sold: 1,
      revenue: 243340,
      connection_types: ["NDC", "API"]
    },
    {
      _id: "6",
      channel_name: "Amadeus",
      number_of_reservations: 4230,
      number_of_flights: 802,
      passengers: 12043,
      products_sold: 1,
      revenue: 324340,
      connection_types: ["GDC"]
    }
  ];

  res.json(data.slice(req.params.count * req.params.start, req.params.count));
});

module.exports = router;
