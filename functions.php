function my_enqueue()
{
	wp_enqueue_script('ajax-script', get_template_directory_uri() . '/js/my-ajax-script.js', array('jquery'));
	wp_localize_script('ajax-script', 'my_ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
}
add_action('wp_enqueue_scripts', 'my_enqueue');


add_action('wp_ajax_cf_suburb', 'cf_suburb');
add_action('wp_ajax_nopriv_cf_suburb', 'cf_suburb');
function cf_suburb()
{
	global $wpdb;
	$suburb_name1 = $_POST['suburb_name'];
	echo $suburb_name1;
	exit();
}
