<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="/formularsumo.co.uk/stylesheets/article.css">
        <?php include 'head.html' ?>

        <title><?php echo $details['title']; ?> - FormularSumo</title>
        <meta property="description" content="<?php echo $details['description']?>">
    </head>

    <body>
        <?php include 'navbar.php'; ?>
        <main>
            <article>
                <header>
                    <h1><?php echo $details['title']; ?></h1>
                    <p class="date"><?php echo $first_published . ' ' . $date_format->format($details['date'])?></p>
                </header>

                <?php echo $text; ?>


                <?php if ($footnotes) {?>
                <section class="footnotes">
                    <h2 class="footnotes">Footnotes</h2>

                    
                    <?php
                    $fn_num = 1;
                    foreach ($footnotes as $footnote) {
                        echo (
                        "<p id=fn-$fn_num>
                        [$fn_num] $footnote
                        </p>"
                        );
                        $fn_num += 1;
                    }
                    ?>
                </section>
                <?php } ?>
            </article>
        </main>
    </body>
</html>