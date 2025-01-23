<?php
if (str_contains($_SERVER['REQUEST_URI'], "/es/")) { //This really isn't the most elegant solution, but yet to think of a better one
    $alt = 'FormularSumo logotipo';
    $language_code = 'es/';
    $navbar = [
        'index.php' => 'Inicio',
        'blog.php' => 'Blog'
    ];
} else {
    $alt = 'FormularSumo logo';
    $language_code = '';
    $navbar = [
        'index.php' => 'Home',
        'blog.php' => 'Blog',
        'testPage.php' => 'Test'
    ];
}
?>

<div class="collapsible_menu">
    <picture>
        <source srcset="/formularsumo.co.uk/Logo.jxl" type="image/jxl">
        <img src="/formularsumo.co.uk/Logo.webp" alt="<?php echo $alt?>" style="height: 50px; display: flex; float: right">
    </picture>

    <input type="checkbox" id="collapsible_button">
    <label for="collapsible_button">≡</label>

    <ul class="top_nav">
        <?php
            foreach ($navbar as $address=>$name) {
                echo '<li class="nav_element"><a href="/formularsumo.co.uk/' . $language_code . $address . '">' . $name . '</a></li>';
            }
        ?>
    </ul>

</div>