# jquery template support
Adds support for HTML5 template tag to make adding those contents to your website easy.

usage:

```
  <div id="somediv">
  </div>
  <template id="titletemplate">
      <div class="title">
      </div>
  </template>
```
```
$('#somediv').appendTemlate('#titletemplate',function($content) {
   $content.find('.title').text('test');
});
```
