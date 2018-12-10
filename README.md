# Traductor

If you're looking for just a few lines of codes to translate your HTML code, well, this is your place.

With this utility you don't have to use labels when you write a string, you just write your texts and then the translator will do the work.
It can also translate placeholders. For example: <input type="text" placeholder="This is a hint..." />

To do the translation, you just have to add the class name "traducir" to each element you want to translate:

<p class="myclass myOtherClass traducir">A Paragraph</p>

You can also translate FORM elements:
```
<select>
  <option value="" class="traducir">Select an option</option>
  <option value="1" class="traducir">Search by name</option>
  <option value="2" class="traducir">Search by Age</option>
</select>
```
