<?php


/*
  Plugin Name: Monkey World Sponsor Plugin
  Version: 1.0
  Author: Mie Jørgensen
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class SponsorPlugin {
    function __construct() {
      add_action('init', array($this, 'onInit'));
    }
  
    function onInit() {
      wp_register_script('SponsorScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
      wp_register_style('SponsorStyle', plugin_dir_url(__FILE__) . 'build/style.css');
      
      register_block_type('makeupnamespace/make-up-block-name', array(
        'render_callback' => array($this, 'renderCallback'),
        'editor_script' => 'makeUpANameHereScript',
        'editor_style' => 'makeUpANameHereStyle'
      ));
    }
  
    function renderCallback($attributes) {
      if (!is_admin()) {
        wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
        wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
      }
  
      ob_start(); ?>
      <div class="boilerplate-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
      <?php return ob_get_clean();
      
    }
  
    function renderCallbackBasic($attributes) {
      return '<div class="boilerplate-frontend">Hello, the sky is ' . $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '.</div>';
    }
  }
  
  $bradsBoilerplate = new BradsBoilerplate();