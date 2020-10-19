import MediumEditor from "medium-editor";

// Inspired by https://github.com/varun-raj/medium-editor-autolist

var AutoList = MediumEditor.Extension.extend({
  name: 'autolist',
  init: function(){
    this.subscribe('editableKeyup', this.onKeyup.bind(this));
  },
  onKeyup: function (keyUpEvent) {
    if (MediumEditor.util.isKey(keyUpEvent, [MediumEditor.util.keyCode.SPACE])) {
      var list_start = this.base.getSelectedParentElement().textContent.slice(0, 1);
      if( (list_start === "-" || list_start === "*" || list_start === ".") && this.base.getExtensionByName('unorderedlist')){
        this.base.execAction('insertunorderedlist');
        this.base.getSelectedParentElement().textContent = this.base.getSelectedParentElement().textContent.slice(1).trim();
      }
    }
  }
});

export default AutoList;