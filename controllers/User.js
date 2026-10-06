const User = require("../models/User.js");

exports.getcurrentUser = async (req, res) => {
    try {
        const userid = req.User; // Assuming req.User is set by authentication middleware
        
        const user = await User.findById(userid);
        return res.status(200).json({ success: true, user });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Failed to retrieve user data" });
    }
};