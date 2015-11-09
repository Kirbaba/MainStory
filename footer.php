<footer class="footer">
	<div class="container-fluid">
		<div class="row">
			<h3>MAINSTORY - 2015 г.</h3>
		</div>
	</div>
</footer>
    <!-- /#page-content-wrapper -->
    <script>
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
          $("#menu-toggle").toggleClass("hamburger-slim--active");
          $iwidth = $('iframe').width();
          $('iframe').height($iwidth/2);
    });
    </script>
<?php wp_footer(); ?>
</body>
</html>