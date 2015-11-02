<footer class="footer">
	<div class="container-fluid">
		<div class="row">
			
		</div>
	</div>
</footer>
    <!-- /#page-content-wrapper -->
    <script>
        jQuery ("#menu-toggle").click(function(e) {
            e.preventDefault();
            jQuery ("#wrapper").toggleClass("toggled");
            jQuery ("#menu-toggle").toggleClass("hamburger-slim--active")
        });
    </script>
<?php wp_footer(); ?>
</body>
</html>