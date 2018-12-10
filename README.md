# Traductor

If you're looking for just a few lines of codes to translate your HTML code, well, this is your place.

With this utility you don't have to use labels when you write a string, you just write your texts and then the translator will do the work.
It can also translate placeholders. For example: <input type="text" placeholder="This is a hint..." />

To do the translation, you just have to add the class name "traducir" to each element you want to translate:
```
<p class="myclass myOtherClass traducir">A Paragraph</p>
```

You can also translate FORM elements:
```
<select>
  <option value="" class="traducir">Select</option>
  <option value="" class="traducir">Option 1</option>
  <option value="" class="traducir">Option 2</option>
  <option value="" class="traducir">Something else...</option>
</select>
```

You can also translate PLACEHOLDERS:
```
<input type="text" placeholder="Write your name here..." class="traducir-placeholder" />
```
IMPORTANT: YOU WILL NEED jQuery TO GET TRANSLATIONS:
```
<script  src="https://code.jquery.com/jquery-3.3.1.min.js"  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="  crossorigin="anonymous"></script>
```

Next, add this utility:
```
    <script src="api/traductor.js"></script>
```
