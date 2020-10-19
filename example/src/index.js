import MediumEditor from "medium-editor";
import {AutoCode, AutoInlineCode, AutoList, AutoQuote, HighlighterButton, InlineCodeButton, PasteHandler, TCMention} from "@open-company/medium-editor-extentions";
console.log("DBG AutoCode:", AutoCode);
console.log("DBG AutoInlineCode:", AutoInlineCode);
console.log("DBG AutoList:", AutoList);
console.log("DBG AutoQuote:", AutoQuote);
console.log("DBG HighlighterButton:", HighlighterButton);
console.log("DBG InlineCodeButton:", InlineCodeButton);
console.log("DBG PasteHandler:", PasteHandler);
console.log("DBG TCMention:", TCMention);

var el = document.getElementById("editor");
new MediumEditor(el, {extentions: {autolist: new AutoList(),
                                   autocode: new AutoCode()}});