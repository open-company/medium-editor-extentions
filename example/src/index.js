import MediumEditor from "medium-editor";
import {AutoCode, AutoInlineCode, AutoList, AutoQuote, HighlighterButton, InlineCodeButton, PasteHandler} from "@open-company/medium-editor-extentions";
console.log("DBG AutoCode:", AutoCode);
console.log("DBG AutoInlineCode:", AutoInlineCode);
console.log("DBG AutoList:", AutoList);
console.log("DBG AutoQuote:", AutoQuote);
console.log("DBG HighlighterButton:", HighlighterButton);
console.log("DBG InlineCodeButton:", InlineCodeButton);
console.log("DBG PasteHandler:", PasteHandler);

var el = document.getElementById("editor");
new MediumEditor(el); //, {extentions: {autolist: new Autolist()}});