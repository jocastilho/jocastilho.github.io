---
layout: page
title: Contact
permalink: /contact/
---
<form class="form-horizontal" action="//formspree.io/me@jocastilho.com" method="POST">
	<input type="hidden" name="_subject" value="New message on jocastilho.com" />
	<input type="hidden" name="_next" value="/contact-success" />
  <div class="form-group">
    <!-- <label for="inputName" class="col-sm-2 control-label">Name</label> -->
    <div class="col-sm-offset-2 col-sm-4">
      <input type="text" class="form-control" id="inputName" name="name" placeholder="Name">
    </div>
  </div>
  <div class="form-group">
    <!-- <label for="inputEmail" class="col-sm-2 control-label">Email</label> -->
    <div class="col-sm-offset-2 col-sm-4">
      <input type="email" class="form-control" id="inputEmail" name="_replyto" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <!-- <label for="inputMessage" class="col-sm-2 control-label">Message</label> -->
    <div class="col-sm-offset-2 col-sm-8">
    	<textarea class="form-control" rows="3" id="inputMessage" placeholder="Message"></textarea>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
    	<input type="text" name="_gotcha" style="display:none" />
      <button type="submit" class="btn btn-default">Send</button>
    </div>
  </div>
</form>