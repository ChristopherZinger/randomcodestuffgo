<?php

namespace RC\Helpers;

class PostHelper 
{
    /**
     * @param int $postId
     * @return string[]
     */
    public static function getShareUrls($postId = 0): array
    {
        $postId = $postId ?: get_the_ID();
        $permalink = urlencode(get_the_permalink($postId));
        $title = strip_tags(apply_filters('the_title', get_the_title($postId)));

        $subject = __('Random Code Stuff', 'van-ons');
        $body = sprintf(__("Check this out: %s, %s.", 'van-ons'), $title, esc_url($permalink));

        return [
			'linkedin' => "http://www.linkedin.com/shareArticle?mini=true&url=$permalink&title=$title",
            'twitter' => "https://twitter.com/intent/tweet?text={$title}%20-%20{$permalink}",
            'facebook' => "https://www.facebook.com/share.php?u={$permalink}",
            'whatsapp' => "whatsapp://send?text={$title} {$permalink}",
            // 'envelope' => "mailto:?subject={$subject}&body={$body}"
        ];
    }
}