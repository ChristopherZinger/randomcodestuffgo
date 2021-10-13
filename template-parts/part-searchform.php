<?php 
  $formStyle = $args['formStyle'] ?? '';
  $placeholder = $args['placeholder'] ?? __('What are you looking for?', 'rc');
  $searchText = $args['searchText'] ?? __('Search', 'rc');
?>

<form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="<?= esc_attr( $formStyle ); ?>">
    <input type="text" class="search-field" id="s" name="s" placeholder="<?= esc_attr( $placeholder ); ?>" value="<?php echo get_search_query(); ?>">
    <input type="submit" id="searchsubmit" value="<?= esc_html( $searchText ); ?>">
</form>