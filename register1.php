<?php
$message = ''; // Variable to store success or error messages

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection parameters
    $host = 'localhost';
    $user = 'root'; // Default MySQL user for XAMPP
    $password = 'pass'; // Replace with your MySQL root password
    $dbname = 'registration';

    // Create a connection
    $conn = new mysqli($host, $user, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['myname1']);
    $email = htmlspecialchars($_POST['myemail']);
    $phone = htmlspecialchars($_POST['myphone']);
    $age = htmlspecialchars($_POST['myage']);
    $gender = isset($_POST['mygender']) ? htmlspecialchars($_POST['mygender']) : "Not specified";
    $departure = htmlspecialchars($_POST['departuredate']);
    $return = htmlspecialchars($_POST['returndate']);
    $destination = isset($_POST['td']) ? htmlspecialchars($_POST['td']) : "No destination selected";
    $package = isset($_POST['locations']) ? htmlspecialchars($_POST['locations']) : "No package selected";
    $terms = isset($_POST['t&c']) ? "Accepted" : "Not Accepted";

    // Validation
    $errors = [];

    if (strlen($phone) < 10 || !is_numeric($phone)) {
        $errors[] = "Invalid phone number. It should be at least 10 digits and numeric.";
    }
    if ($age < 18 || $age > 100) {
        $errors[] = "Age must be between 18 and 100.";
    }
    if (strtotime($departure) >= strtotime($return)) {
        $errors[] = "Return date must be after the departure date.";
    }

    if (empty($errors)) {
        // Save the data to the database
        $stmt = $conn->prepare("INSERT INTO registrations (name, email, phone, age, gender, departure, return_date, destination, package, terms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssisssssss", $name, $email, $phone, $age, $gender, $departure, $return, $destination, $package, $terms);

        if ($stmt->execute()) {
            $message = "Registration Successful! Thank you for registering, $name.";
        } else {
            $message = "Error: Unable to save your details. Please try again later.";
        }
        $stmt->close();
    } else {
        $message = "Registration Failed:<br>" . implode("<br>", $errors);
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Here</title>
    <link rel="icon" href="./files/logo.png">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
</head>
<body class="register-body">

    <nav>
        <img src="./files/logo.png" class="logo" alt="Logo" title="FirstFlight Travels">
        <ul class="navbar">
            <li>
                <a href="./index.html">Home</a>
                <a href="./index.html#locations">Locations</a>
                <a href="./index.html#package">Packages</a>
                <a href="./about.html">About Us</a>
                <a href="./contact.html">Contact Us</a>
            </li>
        </ul>
    </nav>
    
    <section class="registration">
        <div class="register-form">
            <h1>Register <span>Here</span></h1>

            <!-- Display Message -->
            <?php if (!empty($message)) { ?>
                <div class="message">
                    <p style="color:<?php echo strpos($message, 'Successful') !== false ? 'green' : 'red'; ?>;"><?php echo $message; ?></p>
                </div>
            <?php } ?>

            <form action="" onsubmit="return validateform()" method="POST">
                <input type="text" name="myname1" placeholder="Name" id="name" required>
                <input type="email" name="myemail" placeholder="Email-Id" id="" required>
                <input type="tel" name="myphone" placeholder="Phone No." id="phonenum" required>
                <input type="number" name="myage" placeholder="Age" id="" required>
                <h4>Gender</h4>
                <input type="radio" name="mygender" id="" value="Male"> Male &nbsp; &nbsp; 
                <input type="radio" name="mygender" id="" value="Female"> Female
                <h4>Departure</h4>
                <input type="datetime-local" name="departuredate" id="" required>
                <h4>Return</h4>
                <input type="datetime-local" name="returndate" id="" required>
                <h4>Travel Destination</h4>
                <input type="radio" name="td" value="Rajasthan"> Rajasthan &nbsp; 
                <input type="radio" name="td" value="Telangana"> Telangana &nbsp; 
                <input type="radio" name="td" value="Kerala"> Kerala &nbsp; 
                <input type="radio" name="td" value="Karnataka"> Karnataka &nbsp; 
                <input type="radio" name="td" value="Uttar Pradesh"> Uttar Pradesh &nbsp; 
                <input type="radio" name="td" value="west Bengal"> west Bengal &nbsp; 
                <input type="radio" name="td" value="Maharashtra"> Maharashtra &nbsp; 
                <input type="radio" name="td" value="punjab"> punjab &nbsp; 
                <br> <br>
                <h4>Package</h4>
                <input type="radio" name="locations" value="Bronze"> Bronze &nbsp; 
                <input type="radio" name="locations" value="Silver"> Silver &nbsp; 
                <input type="radio" name="locations" value="Gold"> Gold &nbsp;
                <input type="radio" name="locations" value="Platinum"> Platinum &nbsp; 
                <br> <br> 

                <input type="checkbox" name="t&c" id="" checked required> I accept the Terms & Conditions.
                <br> <br> 
                <input type="submit" value="Submit" class="submitbtn">
            </form>
        </div>
    </section>

<!-- Javascript -->
<script>
    function validateform(){ 
        var tel=document.getElementById("phonenum").value;  
        if(tel.length<10){  
            alert("Phone number must be of at least 10 digits!");  
            return false;  
        } else if(isNaN(tel)){
            alert("Phone number should not include characters!");
            return false;
        }
        return true;
    }  
</script>

</body>
</html>
