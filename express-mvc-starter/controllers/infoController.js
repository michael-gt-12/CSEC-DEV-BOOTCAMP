// Logic for general information routes
exports.getHome = (req, res) => {
    res.json({ message: "Welcome to the Beginner Express MVC API!" });
};

exports.getAbout = (req, res) => {
    res.json({
        app: "Express MVC Starter",
        version: "1.0.0",
        description: "A clean backend-only starter project."
    });
};

exports.getContact = (req, res) => {
    res.json({
        email: "support@example.com",
        github: "https://github.com/yourusername"
    });
};

exports.getGreeting = (req, res) => {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    res.json({
        currentTime: new Date().toLocaleTimeString(),
        greeting: greeting
    });
};