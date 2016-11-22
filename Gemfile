source "https://rubygems.org"

gem "bourbon"
gem "coffee-script"
gem "jekyll"
gem "jekyll-assets", group: :jekyll_plugins
gem "jekyll-haml"
gem "neat"
gem "octopress-autoprefixer"
gem "sass"
gem "uglifier"
gem "mini_magick"

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem 'github-pages', '>=104', git: 'https://github.com/github/pages-gem/', group: :jekyll_plugins
