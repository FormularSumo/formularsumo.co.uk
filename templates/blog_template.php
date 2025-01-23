<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="/formularsumo.co.uk/stylesheets/article.css">
        <?php include 'head.html' ?>

        <title><?php echo $page_title?> - FormularSumo</title>

        <style>
            a:link {
                text-decoration: none;
            }

            a:visited {
                text-decoration: none;
            }

            a:hover h1 {
                text-decoration: underline;
            }

            a:active h1 {
                text-decoration: underline;
            }

            main {
                margin-block: 35px;
            }

            h1 {
                font-size: 36px;
                margin-bottom: 1px;
                margin-top: 14px;
            }

            .date {
                margin-bottom: 5px;
                font-size: 14px;
            }

            p {
                font-size: 16px;
                margin-bottom: 18px;
            }
        </style>
    </head>

    <body>
        <?php include 'navbar.php';

        $sorted_articles = [];
        $article_files = scandir($language_locator . 'articles/article_details');

        foreach ($article_files as $file) {
            if ($file != "." and $file != "..") {
                include ($language_locator . "articles/article_details/$file");
                $details['filename'] = "$file";
                array_push($sorted_articles,$details);
            }
        }

        function cmp_date($a, $b)
        {
            return $b['date'] <=> $a['date'];
        }

        usort($sorted_articles, 'cmp_date');

        echo '<main>';

        foreach ($sorted_articles as $article) {
            echo '<a href="articles/' . $article['filename'] . '"><h1>' . $article['title'] . '</h1>';
            echo '<p class="date">' . $first_published . ' ' . $date_format->format($article['date']) . '</p>';
            echo '<p>' . $article['description'] . '</p></a>';
        }

        echo '</main>';
        
        ?>
    </body>
    <link rel="prefetch" href="/formularsumo.co.uk/stylesheets/article.css" as="style"> <!-- not needed if reusing -->
</html>