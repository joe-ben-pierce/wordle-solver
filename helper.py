# open the text file
with open('valid-wordle-words.txt', 'r') as f:
    # read the lines into a list
    lines = f.read().splitlines()

# format the list as a JavaScript array
js_array = 'let valid_words = ' + str(lines) + ';'

# open the JS file
with open('valid_words.js', 'w') as f:
    # write the JS array to the file
    f.write(js_array)
