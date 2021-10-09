<?php
/**
 * @var string $class
 */
$shares = rcGetShareUrls();
$class = $args['class'] ?? '';

$title = __('Share this', 'van-ons');

if (empty($shares)) {
    return;
}
?>
<div class="share <?= esc_attr($class); ?>">
    <ul class="share__list">
        <?php foreach ($shares as $key => $share) :
            $iconName = sanitize_title($key);
            ?>
            <li class="share__item">
                <a href="<?php echo $share; ?>" class="icon-button" target="_blank">
					<?= rcGetIcon( $key ) ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
