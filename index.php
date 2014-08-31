<!DOCTYPE html>
<html>
<head>
	<title>Let's get sentimental</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="jquery.js"></script>
</head>
<body>

	<div id="mainWrapper">
	<div id="firstHalf" class="rectangle">
		<div id="prompt">
			<h1>Welcome!</h1>
			<p>This page will return results based on whether the author is happy, sad, or indifferent.</p>
			<p>Input your string or hashtag:</p><br />
			<form name="searchTwitter" method="POST">
				<input type="text" name="queryString" id="queryString"/> <br /><br />
				<label>Select number of tweets to display</label><br />
				<select name="numberOfPosts" id="numberOfPosts">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select> <br />
				<input type="button" value="See Results" id="submitButton" />
			</form>
		</div>
	</div>
	<div id="secondHalf" class="rectangle">
        <div id="output">
        	<div id="loading">
            Please wait whilst the tweets are collected.<br /><br />
            <img src="load.gif" id="center">
        	</div>

        	<div class="outputBoxPositive" style="display:none">
        	</div>
        	<div class="outputBoxNegative" style="display:none">
        	</div>
        	<div class="outputBoxIndifferent" style="display:none">
        	</div>
        </div>
        <div id="backToTop">
            Start Again?
        </div>
	</div>
	</div>

<script type="text/javascript" src="engine.js"></script>
</body>
</html>