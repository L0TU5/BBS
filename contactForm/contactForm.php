<html>

<head>
    <link rel="stylesheet" type="text/css" href="contactFormStyle.css">
    <title>Contact Form</title>
</head>

<body>
    <div class="contact-title">
        <h1>This is an H1 Title</h1>
        <h2>This is an H2 Title</h2>
    </div>
    <div class="contact-form">
        <form id="contact-form"  method="post" action="contactFormHandler.php">
                <input name="name" type="text" class="form-control" placeholder="Your Name" required>
                <br>
                <input name="email" type="text" class="form-control" placeholder="Your Email" required>
                <br>        
                <textarea name ="message" class="form-control" placeholder="How can we help you?" row="4" required></textarea>
                <br>
                <input type="submit" class="form-control submit" value="Send Message">
        </form>
    </div>
</body>

</html>