<?php
//currently set to basic user query
$con = mysqli_connect('localhost', '402user', 'celine59', '402framework');
if (!$con) {
    die('Could not connect: ' . mysql_error());
}

$result = mysqli_query($con,"SELECT * FROM users");

echo '<table>';
echo '<th>username</th>';
echo '<th>created</th>';

while($row = mysqli_fetch_array($result))
  {
  echo '<tr>';
  echo '<td>'.$row['username'].'</td>';
  echo '<td>'.$row['usercreated'].'</td>';
  echo '</tr>';
  }
  
echo '</table>';

mysql_close($con);
?>