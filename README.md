# Flashmessage
_A lightweight jQuery plugin to replace ugly 'alert()'s with your own HTML & CSS._

**The problem:**  You want to display a message on a webpage for a short period of time, but you don't want to use the default browser alert() box. You'd rather display a nice piece of CSS styled HTML. That's just how you are.

**The solution:** Use the Flashmessage jQuery plugin instead of alert(). It can be used out of the box with the styles provided.

**Teh codez:**

    $.flashmessage('Hello world!');
This code will make the words 'Hello world!' appear at the top of your browser, and then fade away 3 seconds later.

Make sure you include the plugin on your web page:

    <script type="text/javascript" src="path/to/jquery.flashmessage.js"></script>

**The options:** $.flashmessage() accepts two parameters, the message, and an options object which can be used to override the default behavior.

    $.flashmessage(the_message,       // the_message can be any string (even HTML)
      {
        type: 'notification',         // The type of notification. This values will become a CSS class on the message (so that different types messages can be styled differently).
        container: 'body',            // The message will be prepended into this element. The value can be either a jQuery selector, or a jQuery element.
        className: 'flashmessage',    // CSS class name for the main message element
        timeToFade: 3000              // The time (in ms) that a message should be displayed.
      }
    );

**Rails View Display**

In Hamlz:

    -if flash[:notice]
      %script{:type => "text/javascript"}
        ="$(document).ready(function() {$.flashmessage('#{flash[:notice]}', { type: 'success'} );});"  
    -elsif flash[:alert]
      %script{:type => "text/javascript"}
        ="$(document).ready(function() {$.flashmessage('#{flash[:alert]}', { type: 'error'} );});" 

In ERBz:

Method 1:

		<script type="text/javascript">
			<% if flash.present? %>
				<% flash.each do |severity, message| %>
		  		$(function() {$.flashmessage('<%= message %>', { type: "<%= severity %>", className: 'flashmessage wizard'} );});  
				<% end %>
			<% end %>
		</script>

Method 2:

    <%if flash[:notice]%>
      <script type="text/javascript">
        $(document).ready(function() {$.flashmessage('<%=flash[:notice]%>', { type: 'success'} );});  
      </script>    
    <%elsif flash[:alert]%>
      <script type="text/javascript">
        $(document).ready(function() {$.flashmessage('<%=flash[:alert]%>', { type: 'error'} );});
      </script>
    <%end%>

**The License:**

Copyright (c) 2011 John M Mertens

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.