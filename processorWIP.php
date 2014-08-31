<?php

if(isset($_POST['queryString']) && $_POST['queryString']!='') {
    include_once(dirname(__FILE__).'/config.php');
    include_once(dirname(__FILE__).'/lib/TwitterSentimentAnalysis.php');

    $TwitterSentimentAnalysis = new TwitterSentimentAnalysis(DATUMBOX_API_KEY,TWITTER_CONSUMER_KEY,TWITTER_CONSUMER_SECRET,TWITTER_ACCESS_KEY,TWITTER_ACCESS_SECRET);

    //Search Tweets parameters as described at https://dev.twitter.com/docs/api/1.1/get/search/tweets
    $twitterSearchParams=array(
        'q'=>$_POST['queryString'],
        'lang'=>'en',
        'count'=>$_POST['numberOfPosts'],
    );
    $results=$TwitterSentimentAnalysis->sentimentAnalysis($twitterSearchParams);
    //returns back from the api

    // push it all to a two dimensional array
    $arr = array();
    $count = 0;
    foreach ($results as $tweets){
        $count++;
        $arrayName = "#{$count}";
        $subArray = array("name"=>$arrayName,"id"=>$tweets['id'],"user"=>$tweets['user'],"text"=>$tweets['text'],"sentiment"=>$tweets['sentiment']);
        $arr[] = $subArray;
    }

    // encode that shit!
    echo json_encode($arr);
    //var_dump($arr);
}
?>