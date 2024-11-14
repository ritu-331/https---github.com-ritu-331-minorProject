<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

    <?php
    if(isset($_SESSION['email'])){
      $email=$_SESSION['email'];
      $query=mysqli_query($conn,"SELECT 'Student_signup' WHERE Student_signup.email='$email'");
      while($row=mysqli_fetchP_array($query)){
        echo $row['firstName'];
      }
    }
    ?>
  </body>
</html>

<?php
session_start();
include 'connection.php';

?>