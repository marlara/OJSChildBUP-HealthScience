{**
 * templates/frontend/components/footer.tpl
 *
 * 
 * @brief Common site frontend footer.
 *}
<footer class="site-footer"> {* cancelled the sidebar div *}
	<div class="container site-footer-content">
		<div class="row">
			{if $pageFooter}
				<div class="col-md site-footer-content align-self-center">
					{$pageFooter}
				</div>
			{/if}

			<div class="col-md col-md-2 align-self-center text-right" role="complementary">
				<a href="{url page="about" op="aboutThisPublishingSystem"}">
					<img class="footer-brand-image" alt="{translate key="about.aboutThisPublishingSystem"}"
					     src="{$baseUrl}/{$brandImage}">
				</a>
			</div>
		</div>
	</div>
</footer><!-- pkp_structure_footer_wrapper -->

{* Load author biography modals if they exist *}
{if !empty($smarty.capture.authorBiographyModals|trim)}
	{$smarty.capture.authorBiographyModals}
{/if}

{* Login modal *}
<div id="loginModal" class="modal fade" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				{include file="frontend/components/loginForm.tpl" formType = "loginModal"}
			</div>
		</div>
	</div>
</div>

{load_script context="frontend" scripts=$scripts}

{call_hook name="Templates::Common::Footer::PageFooter"}
</body>
</html>