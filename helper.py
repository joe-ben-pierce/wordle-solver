#!/bin/python3

def put_wordlist_in_js_file(input_txt):
    # open the text file
    with open(input_txt, 'r') as f:
        # read the lines into a list
        lines = f.read().splitlines()

    # format the list as a JavaScript array
    js_array = 'let valid_words = ' + str(lines)

    # open the JS file
    with open('valid_words.js', 'w') as f:
        # write the JS array to the file
        f.write(js_array)
        f.write(";\n\n")
        f.write("function get_valid_words(){\n")
        f.write("    return valid_words;\n")
        f.write("}\n")


def get_word_counts():
    from nltk.corpus import reuters, brown, webtext, movie_reviews, treebank, twitter_samples

    from collections import Counter
    import csv

    # Load the word list
    with open('valid-wordle-words.txt', 'r') as f:
        words = f.read().splitlines()

    # Count word frequencies in the corpus
    word_freqs = Counter()
    for corpus in [reuters, brown, webtext, movie_reviews, treebank]:
        word_freqs.update(word.lower() for word in corpus.words())

    # For each word in your list, get its frequency (default to 0 if not found)
    word_counts = [(word, word_freqs[word]) for word in words]

    # Sort by frequency, from highest to lowest
    word_counts.sort(key=lambda x: x[1], reverse=True)

    # Save to CSV
    with open('word_frequencies.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Word', 'Frequency'])
        writer.writerows(word_counts)

def write_ordered_words(input_csv, output_txt):
    import csv
    with open(input_csv, 'r') as f:
        reader = csv.reader(f)
        next(reader)  # Skip the header row

        # Read words and write to txt file
        with open(output_txt, 'w') as out_file:
            for row in reader:
                out_file.write(row[0] + '\n')

def main():
    list_file_name = "sorted-words.txt"
    get_word_counts()
    write_ordered_words("word_frequencies.csv", list_file_name)
    put_wordlist_in_js_file(list_file_name)

main()

