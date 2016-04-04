$(document).ready(function(){
	
	"use strict";
	
  $('.sound-sub').click(function() {
	  $('.sound').show();
	  $('.games').hide();
	  $('.video').hide();
	  $('.animation').hide();
	  $('.graphic').hide();
	  $('.web').hide();
	  $('.photography').hide();
  });
  
    $('.video-sub').click(function() {
	  $('.video').show();
	  $('.games').hide();
	  $('.sound').hide();
	  $('.animation').hide();
	  $('.graphic').hide();
	  $('.web').hide();
	  $('.photography').hide();
  });
  
    $('.photo-sub').click(function() {
	  $('.photography').show();
	  $('.games').hide();
	  $('.video').hide();
	  $('.animation').hide();
	  $('.graphic').hide();
	  $('.web').hide();
	  $('.sound').hide();
  });
  
    $('.game-sub').click(function() {
	  $('.games').show();
	  $('.sound').hide();
	  $('.video').hide();
	  $('.animation').hide();
	  $('.graphic').hide();
	  $('.web').hide();
	  $('.photography').hide();
  });
  
    $('.graphic-sub').click(function() {
	  $('.animation').show();
	  $('.graphic').show();
	  $('.games').hide();
	  $('.video').hide();
	  $('.sound').hide();
	  $('.web').hide();
	  $('.photography').hide();
  });
  
    $('.web-sub').click(function() {
	  $('.web').show();
	  $('.games').hide();
	  $('.video').hide();
	  $('.animation').hide();
	  $('.graphic').hide();
	  $('.sound').hide();
	  $('.photography').hide();
  });
  
    $('.all').click(function() {
	  $('.sound').show();
	  $('.games').show();
	  $('.video').show();
	  $('.animation').show();
	  $('.graphic').show();
	  $('.web').show();
	  $('.photography').show();
  });
  
  $("a[rel^='prettyPhoto']").prettyPhoto();
  
});