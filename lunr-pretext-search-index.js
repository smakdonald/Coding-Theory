var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  smakdonald.github   copyright  "
},
{
  "id": "sec-channel-coding",
  "level": "1",
  "url": "sec-channel-coding.html",
  "type": "Section",
  "number": "1.1",
  "title": "Channel Coding",
  "body": "Channel Coding    "
},
{
  "id": "sec-repetition-codes",
  "level": "1",
  "url": "sec-repetition-codes.html",
  "type": "Section",
  "number": "1.2",
  "title": "Repetition Codes",
  "body": "Repetition Codes    "
},
{
  "id": "sec-parity-checks",
  "level": "1",
  "url": "sec-parity-checks.html",
  "type": "Section",
  "number": "1.3",
  "title": "Parity Checks",
  "body": "Parity Checks    "
},
{
  "id": "ch-topics-5",
  "level": "1",
  "url": "ch-topics-5.html",
  "type": "Section",
  "number": "1.4",
  "title": "Binary Numbers",
  "body": "Binary Numbers    "
},
{
  "id": "ch-topics-6",
  "level": "1",
  "url": "ch-topics-6.html",
  "type": "Section",
  "number": "1.5",
  "title": "Hamming Weight and Distance",
  "body": "Hamming Weight and Distance    "
},
{
  "id": "ch-topics-7",
  "level": "1",
  "url": "ch-topics-7.html",
  "type": "Section",
  "number": "1.6",
  "title": "Checksums",
  "body": "Checksums    "
},
{
  "id": "ch-topics-8",
  "level": "1",
  "url": "ch-topics-8.html",
  "type": "Section",
  "number": "1.7",
  "title": "Prefix-free Codes",
  "body": "Prefix-free Codes    "
},
{
  "id": "ch-topics-9",
  "level": "1",
  "url": "ch-topics-9.html",
  "type": "Section",
  "number": "1.8",
  "title": "QR Codes",
  "body": "QR Codes    "
},
{
  "id": "ch-topics-10",
  "level": "1",
  "url": "ch-topics-10.html",
  "type": "Section",
  "number": "1.9",
  "title": "Reed Solomon Codes",
  "body": "Reed Solomon Codes    "
},
{
  "id": "ch-topics-11",
  "level": "1",
  "url": "ch-topics-11.html",
  "type": "Section",
  "number": "1.10",
  "title": "Hamming Codes",
  "body": "Hamming Codes    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
