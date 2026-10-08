const Outlet = require("../models/Outlet");

// CREATE
exports.createOutlet = async (req, res) => {
  try {
    const outlet = await Outlet.create(req.body);

    res.status(201).json({
      success: true,
      data: outlet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
exports.getOutlets = async (req, res) => {
  try {
    const outlets = await Outlet.find();

    res.status(200).json({
      success: true,
      count: outlets.length,
      data: outlets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ONE
exports.getOutlet = async (req, res) => {
  try {
    const outlet = await Outlet.findById(req.params.id);

    if (!outlet) {
      return res.status(404).json({
        success: false,
        message: "Outlet not found",
      });
    }

    res.status(200).json({
      success: true,
      data: outlet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateOutlet = async (req, res) => {
  try {
    const outlet = await Outlet.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!outlet) {
      return res.status(404).json({
        success: false,
        message: "Outlet not found",
      });
    }

    res.status(200).json({
      success: true,
      data: outlet,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteOutlet = async (req, res) => {
  try {
    const outlet = await Outlet.findByIdAndDelete(req.params.id);

    if (!outlet) {
      return res.status(404).json({
        success: false,
        message: "Outlet not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Outlet deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};