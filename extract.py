import sys
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_script_or_style = False

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style', 'meta', 'link', 'noscript'):
            self.in_script_or_style = True

    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'meta', 'link', 'noscript'):
            self.in_script_or_style = False

    def handle_data(self, data):
        if not self.in_script_or_style:
            stripped = data.strip()
            if stripped:
                self.text.append(stripped)

parser = MyHTMLParser()
with open('/Users/yungdi/Documents/Development/hyeyeon_home/Open Your Art.html', 'r', encoding='utf-8') as f:
    parser.feed(f.read())

with open('/Users/yungdi/Documents/Development/hyeyeon_home/extracted_text.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(parser.text))
