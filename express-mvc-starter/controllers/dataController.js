exports.handlePostData = (req, res) => {
    const receivedData = req.body;

    if (Object.keys(receivedData).length === 0) {
        return res.status(400).json({ error: "No data provided in request body" });
    }

    res.status(201).json({
        status: "Success",
        message: "Data received safely",
        data: receivedData
    });
};