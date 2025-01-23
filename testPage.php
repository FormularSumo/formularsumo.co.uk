<!DOCTYPE html>
<html>
    <head>
        <?php include 'templates/head.html' ?>

        <title>Test</title>

        <style>
            h1 {
                background-color: rgb(0 0 0 / 50%);
                width:fit-content;
                padding-inline: 6px;
            }
            .project {
                position: relative;
                width: 50%;
                left: 25%;
            }
            .logo {
                position: relative;
                padding-inline: 5px;
                margin-block-end: 8px;
                left: 50%;
                transform: translateX(-50%);
                inline-size: 90%;
                transition-duration: 0.15s; /*Animates over this period*/
            }
            .logo:hover {
                inline-size: 100%;
            }
            #woahButton {
                position: relative;
                bottom: 0px;
                left: 50%;
                transform: translateX(-50%);
                /* margin-block-start: 100%; */
            }
            #woahButton a:link,
            #woahButton a:visited {
                color: var(--text_color);
                text-decoration: none;
            }
            #woah {
                color: light-dark(#333333,rgb(225,225,225));
                font-size: 30px;
                margin-block-start: 500px;
            }
        </style>
    </head>
        <body>
            <?php include 'templates/navbar.php'; ?>
            <h1>Test 2</h1>
            <div class= "project">
                <img class="logo" src="/formularsumo.co.uk/Logo 3.webp" alt="Galaxy Collection Logo"></img>
                <button id="woahButton"><a href=#woah>Link</href></button>      
            </div>    
            <p id="woah">woah</p>
        </body>
    </head>
</html>