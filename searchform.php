<form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <input type="text" class="search-field" id="s" name="s" placeholder="What are you looking for?" value="<?php echo get_search_query(); ?>">
    <input type="submit" id="searchsubmit" value="Search">
</form>