<?php

/**
 * @defgroup plugins_themes_default_child ChildBUP-HealthScience
 */

/**
 * @file plugins/themes/ChildBUP-HealthScience/index.php
 *
 * Copyright (c) Lara Marziali
 * Distributed under the GNU GPL v3. For full terms see the file LICENSE.
 *
 * @class ChildBUPHealthScience
 * @ingroup plugins_themes_childBUP-HealthScience
 *
 * @brief Default theme (TO MODIFY?)
 */

import('lib.pkp.classes.plugins.ThemePlugin');

class ChildBUPHealthScience extends ThemePlugin {
	/**
	 * Initialize the theme's styles, scripts and hooks. This is only run for
	 * the currently active theme.
	 *
	 * @return null
	 */
	public function init() {
		$this->setParent('healthsciencesthemeplugin');
		$this->modifyStyle('stylesheet', array('addLess' => array('styles/custom.less')));
		$this->addScript('custom', 'js/custom.js');
	}

	/**
	 * Get the display name of this plugin
	 * @return string
	 */
	function getDisplayName() {
		return __("plugins.themes.ChildBUP-HealthScience.name");
	}

	/**
	 * Get the description of this plugin
	 * @return string
	 */
	function getDescription() {
		return __("plugins.themes.ChildBUP-HealthScience.description");
	}
}

?>