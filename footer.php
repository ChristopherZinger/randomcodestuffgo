<footer class="grid-x footer content">
      <div class="cell large-3 show-for-large"></div>
      <div class="cell small-12 large-8 footer__content grid-x">
        <div class="cell small-6">
          <?php
            wp_nav_menu(
              array(
                'menu' => 'footer-left',
                'container' => '',
                'theme_location' => 'footer-left',
                'menu_class' => 'footer-left',
                'depth' => '1'
              )
            )
          ?>
        </div>

        <div class="cell small-6">
            <?php get_template_part('template-parts/part', 'social-media'); ?>
        </div>
      </div>
    <?php
      wp_footer();
    ?>
</footer>
</body>
</html>