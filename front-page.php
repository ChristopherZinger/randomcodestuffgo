
<!-- variations of main menu should be puted so separated files in template parts and isertes as wp_template_part() -->
  <?php get_header(); ?>

  <main class="content">
    <h1 class="home__header h1">Main</h1> 


    <?php get_template_part('template-parts/part-tags'); ?>

    <div class="home__series-wrapper">
      <div class="grid-x home__series-header">
        <div class="cell small-6">Series</div>
        <div class="cell small-6">View All</div>
      </div>

      <div class="grid-x home__series-list">
        <div class="series-list-item"></div>
      </div>
    </div>
  </main>

<?php get_footer(); ?>