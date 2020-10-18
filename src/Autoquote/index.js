import MediumEditor from "medium-editor";

// Inspired by https://github.com/varun-raj/medium-editor-autolist

var AutoQuote = MediumEditor.Extension.extend({
  name: 'AutoQuote',
  init: function(){
    this.subscribe('editableKeyup', this.onKeyup.bind(this));
  },
  onKeyup: function (keyUpEvent) {
    if (MediumEditor.util.isKey(keyUpEvent, [MediumEditor.util.keyCode.SPACE])) {
      var quote_start = this.base.getSelectedParentElement().textContent,
          opening_regex = />\s*/i;
      if( quote_start.match(opening_regex) && this.base.getExtensionByName('quote')){
        this.base.execAction('append-blockquote');
        this.base.getSelectedParentElement().textContent = this.base.getSelectedParentElement().textContent.slice(1).trim();
      }
    }
  }
});