<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="icon" href="./files/logo.png">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">   
    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
</head>
<body class="contactbody">
    <nav>
        <img src="./files/logo.png" class="logo" alt="Logo" title="FirstFlight Travels">
        <ul class="navbar">
            <li>
                <a href="./index.html">Home</a>
                <a href="./index.html#locations">Locations</a>
                <a href="./index.html#package">Packages</a>
                <a href="./about.html">About Us</a>
                <a href="./contact.php">Contact Us</a>
            </li>
        </ul>
    </nav>

    <section class="contact">
        <div class="contact-form">
            <h1>Contact <span>Us</span></h1>
            <p>We are always out there to help you! Fill out the form given below and get a reply from us within 2 business days.</p>

            <!-- PHP Logic -->
            <?php
            $message = ''; // Message to display on the page

            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                // Database connection parameters
                $host = 'localhost';
                $user = 'root'; // Default MySQL user for XAMPP
                $password = 'pass'; // Replace with your MySQL root password
                $dbname = 'contact_form';

                // Create connection
                $conn = new mysqli($host, $user, $password, $dbname);

                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Collect and sanitize form data
                $name = htmlspecialchars($_POST['myname']);
                $email = htmlspecialchars($_POST['email']);
                $subject = htmlspecialchars($_POST['subject']);
                $msg = htmlspecialchars($_POST['message']);

                // Validation
                if (empty($name) || empty($email) || empty($subject) || empty($msg)) {
                    $message = "All fields are required.";
                } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $message = "Invalid email format.";
                } else {
                    // Insert data into database
                    $stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
                    $stmt->bind_param("ssss", $name, $email, $subject, $msg);

                    if ($stmt->execute()) {
                        $message = "Thank you for contacting us, $name. We will get back to you shortly!";
                    } else {
                        $message = "Error: Unable to submit your message. Please try again later.";
                    }
                    $stmt->close();
                }

                $conn->close();
            }
            ?>

            <!-- Display Success/Error Message -->
            <?php if (!empty($message)) { ?>
                <div class="message">
                    <p><?php echo $message; ?></p>
                </div>
            <?php } ?>

            <form action="" method="POST">
                <input type="text" name="myname" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your E-mail" required>
                <input type="text" name="subject" placeholder="What brings you here?" required>
                <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <input type="submit" value="Submit" class="submit-btn">
            </form>
        </div>
    </section>

    <!-- Footer -->
    <section class="footer">
        <div class="foot">
            <div class="footer-content">
                <div class="footlinks">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="./register.html">Register</a></li>
                        <li><a href="./about.html">About Us</a></li>
                        <li><a href="./contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footlinks">
                    <h4>Connect</h4>
                    <div class="social">
                        <a href="" target="_blank"><i class='bx bxl-facebook'></i></a>
                        <a href="" target="_blank"><i class='bx bxl-instagram'></i></a>
                        <a href="" target="_blank"><i class='bx bxl-twitter'></i></a>
                        <a href="" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="" target="_blank"><i class='bx bxl-youtube'></i></a>
                        <a href="" target="_blank"><i class='bx bxl-wordpress'></i></a>
                        <a href="h" target="_blank"><i class='bx bxl-github'></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="end">
            <p>Copyright © 2024 TravelSphere All Rights Reserved.<br>Website developed by: Sahithi & Sagarika</p>
        </div>
    </section>
</body>
</html>
