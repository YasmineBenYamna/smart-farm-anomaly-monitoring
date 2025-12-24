import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-Z7YEDVQ4.js";
import {
  DomSanitizer
} from "./chunk-7NNWGVX4.js";
import {
  HttpClient
} from "./chunk-QWRIJEES.js";
import "./chunk-5DI5A2VR.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-7QXFJNL3.js";
import {
  DOCUMENT
} from "./chunk-ETKEA24K.js";
import {
  Attribute,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  SecurityContext,
  ViewChild,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BRPYXLTX.js";
import "./chunk-7J22WABE.js";
import "./chunk-5PA5UEDQ.js";
import "./chunk-ETBEKOXV.js";
import "./chunk-55JZBEKM.js";
import "./chunk-TXDUYLVM.js";

// node_modules/@kolkov/angular-editor/fesm2020/kolkov-angular-editor.mjs
var _c0 = ["*"];
function AeButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg");
    ɵɵelement(2, "use");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattribute("href", "assets/ae-icons/icons.svg#" + ctx_r0.iconName)("href", "assets/ae-icons/icons.svg#" + ctx_r0.iconName, null, "xlink");
  }
}
function AeButtonComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c1 = ["labelButton"];
var _c2 = (a0) => ({
  "ae-expanded": a0
});
var _c3 = (a0, a1) => ({
  "selected": a0,
  "focused": a1
});
function AeSelectComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function AeSelectComponent_button_7_Template_button_click_0_listener($event) {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.optionSelect(item_r3, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c3, item_r3.value === ctx_r3.value, i_r5 === ctx_r3.optionId));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r3.label, " ");
  }
}
function AeSelectComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1, "No items for select");
    ɵɵelementEnd();
  }
}
var _c4 = ["fileInput"];
function AeToolbarComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "ae-select", 37);
    ɵɵtwoWayListener("ngModelChange", function AeToolbarComponent_div_0_div_35_Template_ae_select_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.customClassId, $event) || (ctx_r1.customClassId = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AeToolbarComponent_div_0_div_35_Template_ae_select_change_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setCustomClass(ctx_r1.customClassId));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r1.customClassList);
    ɵɵtwoWayProperty("ngModel", ctx_r1.customClassId);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("customClasses"));
  }
}
function AeToolbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "button", 6);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("undo"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 7);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("redo"));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 5)(5, "button", 8);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("bold"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 9);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("italic"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 10);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("underline"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 11);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_8_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("strikeThrough"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 12);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_9_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("subscript"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 13);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_10_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("superscript"));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 5)(12, "button", 14);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_12_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyLeft"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 15);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_13_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyCenter"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(14, "button", 16);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_14_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyRight"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 17);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_15_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyFull"));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(16, "div", 5)(17, "button", 18);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_17_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("indent"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 19);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_18_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("outdent"));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(19, "div", 5)(20, "button", 20);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_20_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("insertUnorderedList"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(21, "button", 21);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_21_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("insertOrderedList"));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(22, "div", 5)(23, "ae-select", 22);
    ɵɵtwoWayListener("ngModelChange", function AeToolbarComponent_div_0_Template_ae_select_ngModelChange_23_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.block, $event) || (ctx_r1.block = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AeToolbarComponent_div_0_Template_ae_select_change_23_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand(ctx_r1.block));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(24, "div", 5)(25, "ae-select", 23);
    ɵɵtwoWayListener("ngModelChange", function AeToolbarComponent_div_0_Template_ae_select_ngModelChange_25_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.fontName, $event) || (ctx_r1.fontName = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AeToolbarComponent_div_0_Template_ae_select_change_25_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setFontName(ctx_r1.fontName));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(26, "div", 5)(27, "ae-select", 24);
    ɵɵtwoWayListener("ngModelChange", function AeToolbarComponent_div_0_Template_ae_select_ngModelChange_27_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.fontSize, $event) || (ctx_r1.fontSize = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AeToolbarComponent_div_0_Template_ae_select_change_27_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setFontSize(ctx_r1.fontSize));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(28, "div", 5)(29, "input", 25, 0);
    ɵɵlistener("change", function AeToolbarComponent_div_0_Template_input_change_29_listener() {
      ɵɵrestoreView(_r1);
      const fgInput_r3 = ɵɵreference(30);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertColor(fgInput_r3.value, "textColor"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(31, "button", 26);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_31_listener() {
      ɵɵrestoreView(_r1);
      const fgInput_r3 = ɵɵreference(30);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.focus();
      return ɵɵresetView(fgInput_r3.click());
    });
    ɵɵelementEnd();
    ɵɵelementStart(32, "input", 25, 1);
    ɵɵlistener("change", function AeToolbarComponent_div_0_Template_input_change_32_listener() {
      ɵɵrestoreView(_r1);
      const bgInput_r4 = ɵɵreference(33);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertColor(bgInput_r4.value, "backgroundColor"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(34, "button", 27);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_34_listener() {
      ɵɵrestoreView(_r1);
      const bgInput_r4 = ɵɵreference(33);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.focus();
      return ɵɵresetView(bgInput_r4.click());
    });
    ɵɵelementEnd()();
    ɵɵtemplate(35, AeToolbarComponent_div_0_div_35_Template, 2, 4, "div", 28);
    ɵɵelementStart(36, "div", 5)(37, "button", 29);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_37_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertUrl());
    });
    ɵɵelementEnd();
    ɵɵelementStart(38, "button", 30);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_38_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("unlink"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(39, "input", 31, 2);
    ɵɵlistener("change", function AeToolbarComponent_div_0_Template_input_change_39_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFileChanged($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(41, "button", 32);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_41_listener() {
      ɵɵrestoreView(_r1);
      const fileInput_r6 = ɵɵreference(40);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.focus();
      return ɵɵresetView(fileInput_r6.click());
    });
    ɵɵelementEnd();
    ɵɵelementStart(42, "button", 33);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_42_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertVideo());
    });
    ɵɵelementEnd();
    ɵɵelementStart(43, "button", 34);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_43_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("insertHorizontalRule"));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(44, "div", 5)(45, "button", 35);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_45_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("removeFormat"));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(46, "div", 5)(47, "button", 36);
    ɵɵlistener("click", function AeToolbarComponent_div_0_Template_button_click_47_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("toggleEditorMode"));
    });
    ɵɵelementEnd()();
    ɵɵprojection(48);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("hidden", ctx_r1.isButtonHidden("undo"));
    ɵɵadvance();
    ɵɵproperty("hidden", ctx_r1.isButtonHidden("redo"));
    ɵɵadvance(2);
    ɵɵproperty("id", "bold-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("bold"));
    ɵɵadvance();
    ɵɵproperty("id", "italic-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("italic"));
    ɵɵadvance();
    ɵɵproperty("id", "underline-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("underline"));
    ɵɵadvance();
    ɵɵproperty("id", "strikeThrough-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("strikeThrough"));
    ɵɵadvance();
    ɵɵproperty("id", "subscript-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("subscript"));
    ɵɵadvance();
    ɵɵproperty("id", "superscript-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("superscript"));
    ɵɵadvance(2);
    ɵɵproperty("id", "justifyLeft-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyLeft"));
    ɵɵadvance();
    ɵɵproperty("id", "justifyCenter-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyCenter"));
    ɵɵadvance();
    ɵɵproperty("id", "justifyRight-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyRight"));
    ɵɵadvance();
    ɵɵproperty("id", "justifyFull-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyFull"));
    ɵɵadvance(2);
    ɵɵproperty("id", "indent-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("indent"));
    ɵɵadvance();
    ɵɵproperty("id", "outdent-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("outdent"));
    ɵɵadvance(2);
    ɵɵproperty("id", "insertUnorderedList-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertUnorderedList"));
    ɵɵadvance();
    ɵɵproperty("id", "insertOrderedList-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertOrderedList"));
    ɵɵadvance(2);
    ɵɵproperty("options", ctx_r1.headings);
    ɵɵtwoWayProperty("ngModel", ctx_r1.block);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("heading"));
    ɵɵadvance(2);
    ɵɵproperty("options", ctx_r1.fonts);
    ɵɵtwoWayProperty("ngModel", ctx_r1.fontName);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("fontName"));
    ɵɵadvance(2);
    ɵɵproperty("options", ctx_r1.fontSizes);
    ɵɵtwoWayProperty("ngModel", ctx_r1.fontSize);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("fontSize"));
    ɵɵadvance(4);
    ɵɵproperty("id", "foregroundColorPicker-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("textColor"));
    ɵɵadvance(3);
    ɵɵproperty("id", "backgroundColorPicker-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("backgroundColor"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1._customClasses);
    ɵɵadvance(2);
    ɵɵproperty("id", "link-" + ctx_r1.id)("disabled", ctx_r1.isLinkButtonDisabled)("hidden", ctx_r1.isButtonHidden("link"));
    ɵɵadvance();
    ɵɵproperty("id", "unlink-" + ctx_r1.id)("disabled", ctx_r1.htmlMode || !ctx_r1.linkSelected)("hidden", ctx_r1.isButtonHidden("unlink"));
    ɵɵadvance(3);
    ɵɵproperty("id", "insertImage-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertImage"));
    ɵɵadvance();
    ɵɵproperty("id", "insertVideo-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertVideo"));
    ɵɵadvance();
    ɵɵproperty("id", "insertHorizontalRule-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertHorizontalRule"));
    ɵɵadvance(2);
    ɵɵproperty("id", "clearFormatting-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("removeFormat"));
    ɵɵadvance(2);
    ɵɵproperty("id", "toggleEditorMode-" + ctx_r1.id)("hidden", ctx_r1.isButtonHidden("toggleEditorMode"));
  }
}
var _c5 = ["customButtons"];
var _c6 = ["editor"];
var _c7 = ["editorWrapper"];
var _c8 = ["editorToolbar"];
var _c9 = (a0) => ({
  "bottom": a0
});
var _c10 = (a0) => ({
  executeCommandFn: a0
});
var AngularEditorService = class {
  constructor(http, doc) {
    this.http = http;
    this.doc = doc;
    this.saveSelection = () => {
      if (this.doc.getSelection) {
        const sel = this.doc.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          this.savedSelection = sel.getRangeAt(0);
          this.selectedText = sel.toString();
        }
      } else if (this.doc.getSelection && this.doc.createRange) {
        this.savedSelection = document.createRange();
      } else {
        this.savedSelection = null;
      }
    };
  }
  /**
   * Executed command from editor header buttons exclude toggleEditorMode
   * @param command string from triggerCommand
   * @param value
   */
  executeCommand(command, value) {
    const commands = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "pre"];
    if (commands.includes(command)) {
      this.doc.execCommand("formatBlock", false, command);
      return;
    }
    this.doc.execCommand(command, false, value);
  }
  /**
   * Create URL link
   * @param url string from UI prompt
   */
  createLink(url) {
    if (!url.includes("http")) {
      this.doc.execCommand("createlink", false, url);
    } else {
      const newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + "</a>";
      this.insertHtml(newUrl);
    }
  }
  /**
   * insert color either font or background
   *
   * @param color color to be inserted
   * @param where where the color has to be inserted either text/background
   */
  insertColor(color, where) {
    const restored = this.restoreSelection();
    if (restored) {
      if (where === "textColor") {
        this.doc.execCommand("foreColor", false, color);
      } else {
        this.doc.execCommand("hiliteColor", false, color);
      }
    }
  }
  /**
   * Set font name
   * @param fontName string
   */
  setFontName(fontName) {
    this.doc.execCommand("fontName", false, fontName);
  }
  /**
   * Set font size
   * @param fontSize string
   */
  setFontSize(fontSize) {
    this.doc.execCommand("fontSize", false, fontSize);
  }
  /**
   * Create raw HTML
   * @param html HTML string
   */
  insertHtml(html) {
    const isHTMLInserted = this.doc.execCommand("insertHTML", false, html);
    if (!isHTMLInserted) {
      throw new Error("Unable to perform the operation");
    }
  }
  /**
   * restore selection when the editor is focused in
   *
   * saved selection when the editor is focused out
   */
  restoreSelection() {
    if (this.savedSelection) {
      if (this.doc.getSelection) {
        const sel = this.doc.getSelection();
        sel.removeAllRanges();
        sel.addRange(this.savedSelection);
        return true;
      } else if (this.doc.getSelection) {
        return true;
      }
    } else {
      return false;
    }
  }
  /**
   * setTimeout used for execute 'saveSelection' method in next event loop iteration
   */
  executeInNextQueueIteration(callbackFn, timeout = 100) {
    setTimeout(callbackFn, timeout);
  }
  /** check any selection is made or not */
  checkSelection() {
    const selectedText = this.savedSelection.toString();
    if (selectedText.length === 0) {
      throw new Error("No Selection Made");
    }
    return true;
  }
  /**
   * Upload file to uploadUrl
   * @param file The file
   */
  uploadImage(file) {
    const uploadData = new FormData();
    uploadData.append("file", file, file.name);
    return this.http.post(this.uploadUrl, uploadData, {
      reportProgress: true,
      observe: "events",
      withCredentials: this.uploadWithCredentials
    });
  }
  /**
   * Insert image with Url
   * @param imageUrl The imageUrl.
   */
  insertImage(imageUrl) {
    this.doc.execCommand("insertImage", false, imageUrl);
  }
  setDefaultParagraphSeparator(separator) {
    this.doc.execCommand("defaultParagraphSeparator", false, separator);
  }
  createCustomClass(customClass) {
    let newTag = this.selectedText;
    if (customClass) {
      const tagName = customClass.tag ? customClass.tag : "span";
      newTag = "<" + tagName + ' class="' + customClass.class + '">' + this.selectedText + "</" + tagName + ">";
    }
    this.insertHtml(newTag);
  }
  insertVideo(videoUrl) {
    if (videoUrl.match("www.youtube.com")) {
      this.insertYouTubeVideoTag(videoUrl);
    }
    if (videoUrl.match("vimeo.com")) {
      this.insertVimeoVideoTag(videoUrl);
    }
  }
  insertYouTubeVideoTag(videoUrl) {
    const id = videoUrl.split("v=")[1];
    const imageUrl = `https://img.youtube.com/vi/${id}/0.jpg`;
    const thumbnail = `
      <div style='position: relative'>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="click to watch"/>
          <img style='position: absolute; left:200px; top:140px'
          src="https://img.icons8.com/color/96/000000/youtube-play.png"/>
        </a>
      </div>`;
    this.insertHtml(thumbnail);
  }
  insertVimeoVideoTag(videoUrl) {
    const sub = this.http.get(`https://vimeo.com/api/oembed.json?url=${videoUrl}`).subscribe((data) => {
      const imageUrl = data.thumbnail_url_with_play_button;
      const thumbnail = `<div>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="${data.title}"/>
        </a>
      </div>`;
      this.insertHtml(thumbnail);
      sub.unsubscribe();
    });
  }
  nextNode(node) {
    if (node.hasChildNodes()) {
      return node.firstChild;
    } else {
      while (node && !node.nextSibling) {
        node = node.parentNode;
      }
      if (!node) {
        return null;
      }
      return node.nextSibling;
    }
  }
  getRangeSelectedNodes(range, includePartiallySelectedContainers) {
    let node = range.startContainer;
    const endNode = range.endContainer;
    let rangeNodes = [];
    if (node === endNode) {
      rangeNodes = [node];
    } else {
      while (node && node !== endNode) {
        rangeNodes.push(node = this.nextNode(node));
      }
      node = range.startContainer;
      while (node && node !== range.commonAncestorContainer) {
        rangeNodes.unshift(node);
        node = node.parentNode;
      }
    }
    if (includePartiallySelectedContainers) {
      node = range.commonAncestorContainer;
      while (node) {
        rangeNodes.push(node);
        node = node.parentNode;
      }
    }
    return rangeNodes;
  }
  getSelectedNodes() {
    const nodes = [];
    if (this.doc.getSelection) {
      const sel = this.doc.getSelection();
      for (let i = 0, len = sel.rangeCount; i < len; ++i) {
        nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
      }
    }
    return nodes;
  }
  replaceWithOwnChildren(el) {
    const parent = el.parentNode;
    while (el.hasChildNodes()) {
      parent.insertBefore(el.firstChild, el);
    }
    parent.removeChild(el);
  }
  removeSelectedElements(tagNames) {
    const tagNamesArray = tagNames.toLowerCase().split(",");
    this.getSelectedNodes().forEach((node) => {
      if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
        this.replaceWithOwnChildren(node);
      }
    });
  }
};
AngularEditorService.ɵfac = function AngularEditorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AngularEditorService)(ɵɵinject(HttpClient), ɵɵinject(DOCUMENT));
};
AngularEditorService.ɵprov = ɵɵdefineInjectable({
  token: AngularEditorService,
  factory: AngularEditorService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorService, [{
    type: Injectable
  }], function() {
    return [{
      type: HttpClient
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var angularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: "auto",
  minHeight: "0",
  maxHeight: "auto",
  width: "auto",
  minWidth: "0",
  translate: "yes",
  enableToolbar: true,
  showToolbar: true,
  placeholder: "Enter text here...",
  defaultParagraphSeparator: "",
  defaultFontName: "",
  defaultFontSize: "",
  fonts: [{
    class: "arial",
    name: "Arial"
  }, {
    class: "times-new-roman",
    name: "Times New Roman"
  }, {
    class: "calibri",
    name: "Calibri"
  }, {
    class: "comic-sans-ms",
    name: "Comic Sans MS"
  }],
  uploadUrl: "v1/image",
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: "top",
  outline: true
  /*toolbarHiddenButtons: [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['heading', 'fontName', 'fontSize', 'color'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
    ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
    ['link', 'unlink', 'image', 'video']
  ]*/
};
function isDefined(value) {
  return value !== void 0 && value !== null;
}
var AeToolbarSetComponent = class {
  constructor() {
  }
};
AeToolbarSetComponent.ɵfac = function AeToolbarSetComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AeToolbarSetComponent)();
};
AeToolbarSetComponent.ɵcmp = ɵɵdefineComponent({
  type: AeToolbarSetComponent,
  selectors: [["ae-toolbar-set"], ["", "aeToolbarSet", ""]],
  hostAttrs: [1, "angular-editor-toolbar-set"],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function AeToolbarSetComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  styles: ["a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-toolbar-set[_nghost-%COMP%]{display:flex;gap:1px;width:fit-content;vertical-align:baseline}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeToolbarSetComponent, [{
    type: Component,
    args: [{
      selector: "ae-toolbar-set, [aeToolbarSet]",
      host: {
        "class": "angular-editor-toolbar-set"
      },
      template: "<ng-content></ng-content>\n",
      styles: ["a{cursor:pointer}:host.angular-editor-toolbar-set{display:flex;gap:1px;width:fit-content;vertical-align:baseline}\n"]
    }]
  }], function() {
    return [];
  }, null);
})();
var AeButtonComponent = class {
  constructor() {
    this.iconName = "";
  }
};
AeButtonComponent.ɵfac = function AeButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AeButtonComponent)();
};
AeButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: AeButtonComponent,
  selectors: [["ae-button"], ["button", "aeButton", ""]],
  hostAttrs: [1, "angular-editor-button"],
  hostVars: 2,
  hostBindings: function AeButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("tabIndex", -1)("type", "button");
    }
  },
  inputs: {
    iconName: "iconName"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [["contentTemplate", ""], [4, "ngIf", "ngIfElse"]],
  template: function AeButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AeButtonComponent_ng_container_0_Template, 3, 2, "ng-container", 1)(1, AeButtonComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const contentTemplate_r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.iconName)("ngIfElse", contentTemplate_r2);
    }
  },
  dependencies: [NgIf],
  styles: ["a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-button[_nghost-%COMP%]{background-color:var(--ae-button-bg-color, white);vertical-align:middle;border:var(--ae-button-border, 1px solid #ddd);border-radius:var(--ae-button-radius, 4px);padding:.4rem;float:left;width:2rem;height:2rem}.angular-editor-button[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.angular-editor-button[_nghost-%COMP%]:hover{cursor:pointer;background-color:var(--ae-button-hover-bg-color, #f1f1f1);transition:.2s ease}.angular-editor-button[_nghost-%COMP%]:focus, .angular-editor-button.focus[_nghost-%COMP%]{outline:0}.angular-editor-button[_nghost-%COMP%]:disabled{background-color:var(--ae-button-disabled-bg-color, #f5f5f5);pointer-events:none;cursor:not-allowed}.angular-editor-button[_nghost-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-button[_nghost-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555555}.angular-editor-button[_nghost-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%]{background:#555555}.angular-editor-button.active[_nghost-%COMP%]{background:var(--ae-button-active-bg-color, #fffbd3)}.angular-editor-button.active[_nghost-%COMP%]:hover{background-color:var(--ae-button-active-hover-bg-color, #fffaad)}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeButtonComponent, [{
    type: Component,
    args: [{
      selector: "ae-button, button[aeButton]",
      host: {
        "class": "angular-editor-button",
        "[tabIndex]": "-1",
        "[type]": '"button"'
      },
      template: `<ng-container *ngIf="iconName; else contentTemplate">
  <svg>
    <use [attr.href]="'assets/ae-icons/icons.svg#' + iconName" [attr.xlink:href]="'assets/ae-icons/icons.svg#' + iconName"></use>
  </svg>
</ng-container>
<ng-template #contentTemplate>
  <ng-content></ng-content>
</ng-template>
`,
      styles: ["a{cursor:pointer}:host.angular-editor-button{background-color:var(--ae-button-bg-color, white);vertical-align:middle;border:var(--ae-button-border, 1px solid #ddd);border-radius:var(--ae-button-radius, 4px);padding:.4rem;float:left;width:2rem;height:2rem}:host.angular-editor-button svg{width:100%;height:100%}:host.angular-editor-button:hover{cursor:pointer;background-color:var(--ae-button-hover-bg-color, #f1f1f1);transition:.2s ease}:host.angular-editor-button:focus,:host.angular-editor-button.focus{outline:0}:host.angular-editor-button:disabled{background-color:var(--ae-button-disabled-bg-color, #f5f5f5);pointer-events:none;cursor:not-allowed}:host.angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}:host.angular-editor-button:disabled>.color-label.foreground :after{background:#555555}:host.angular-editor-button:disabled>.color-label.background{background:#555555}:host.angular-editor-button.active{background:var(--ae-button-active-bg-color, #fffbd3)}:host.angular-editor-button.active:hover{background-color:var(--ae-button-active-hover-bg-color, #fffaad)}\n"]
    }]
  }], function() {
    return [];
  }, {
    iconName: [{
      type: Input
    }]
  });
})();
var AeSelectComponent = class {
  constructor(elRef, r) {
    this.elRef = elRef;
    this.r = r;
    this.options = [];
    this.disabled = false;
    this.optionId = 0;
    this.opened = false;
    this.hidden = "inline-block";
    this.changeEvent = new EventEmitter();
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  get label() {
    return this.selectedOption && this.selectedOption.hasOwnProperty("label") ? this.selectedOption.label : "Select";
  }
  get value() {
    return this.selectedOption.value;
  }
  ngOnInit() {
    this.selectedOption = this.options[0];
    if (isDefined(this.isHidden) && this.isHidden) {
      this.hide();
    }
  }
  hide() {
    this.hidden = "none";
  }
  optionSelect(option, event) {
    event.stopPropagation();
    this.setValue(option.value);
    this.onChange(this.selectedOption.value);
    this.changeEvent.emit(this.selectedOption.value);
    this.onTouched();
    this.opened = false;
  }
  toggleOpen(event) {
    if (this.disabled) {
      return;
    }
    this.opened = !this.opened;
  }
  onClick($event) {
    if (!this.elRef.nativeElement.contains($event.target)) {
      this.close();
    }
  }
  close() {
    this.opened = false;
  }
  get isOpen() {
    return this.opened;
  }
  writeValue(value) {
    if (!value || typeof value !== "string") {
      return;
    }
    this.setValue(value);
  }
  setValue(value) {
    let index = 0;
    const selectedEl = this.options.find((el, i) => {
      index = i;
      return el.value === value;
    });
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.optionId = index;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.labelButton.nativeElement.disabled = isDisabled;
    const div = this.labelButton.nativeElement;
    const action = isDisabled ? "addClass" : "removeClass";
    this.r[action](div, "disabled");
    this.disabled = isDisabled;
  }
  handleKeyDown($event) {
    if (!this.opened) {
      return;
    }
    switch ($event.key) {
      case "ArrowDown":
        this._handleArrowDown($event);
        break;
      case "ArrowUp":
        this._handleArrowUp($event);
        break;
      case "Space":
        this._handleSpace($event);
        break;
      case "Enter":
        this._handleEnter($event);
        break;
      case "Tab":
        this._handleTab($event);
        break;
      case "Escape":
        this.close();
        $event.preventDefault();
        break;
      case "Backspace":
        this._handleBackspace();
        break;
    }
  }
  _handleArrowDown($event) {
    if (this.optionId < this.options.length - 1) {
      this.optionId++;
    }
  }
  _handleArrowUp($event) {
    if (this.optionId >= 1) {
      this.optionId--;
    }
  }
  _handleSpace($event) {
  }
  _handleEnter($event) {
    this.optionSelect(this.options[this.optionId], $event);
  }
  _handleTab($event) {
  }
  _handleBackspace() {
  }
};
AeSelectComponent.ɵfac = function AeSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AeSelectComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
AeSelectComponent.ɵcmp = ɵɵdefineComponent({
  type: AeSelectComponent,
  selectors: [["ae-select"]],
  viewQuery: function AeSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelButton = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function AeSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function AeSelectComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      }, false, ɵɵresolveDocument)("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.hidden);
    }
  },
  inputs: {
    options: "options",
    isHidden: [0, "hidden", "isHidden"]
  },
  outputs: {
    changeEvent: "change"
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AeSelectComponent),
    multi: true
  }])],
  decls: 9,
  vars: 9,
  consts: [["labelButton", ""], [1, "ae-picker", 3, "ngClass"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-label", 3, "click", "tabIndex"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "click", "ngClass"], [1, "dropdown-item"]],
  template: function AeSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "span", 1)(1, "button", 2, 0);
      ɵɵlistener("click", function AeSelectComponent_Template_button_click_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleOpen($event));
      });
      ɵɵtext(3);
      ɵɵnamespaceSVG();
      ɵɵelementStart(4, "svg");
      ɵɵelement(5, "use");
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(6, "span", 3);
      ɵɵtemplate(7, AeSelectComponent_button_7_Template, 2, 5, "button", 4)(8, AeSelectComponent_span_8_Template, 2, 0, "span", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c2, ctx.isOpen));
      ɵɵadvance();
      ɵɵproperty("tabIndex", -1);
      ɵɵadvance(2);
      ɵɵtextInterpolate1("", ctx.label, " ");
      ɵɵadvance(2);
      ɵɵattribute("href", "assets/ae-icons/icons.svg#sort")("href", "assets/ae-icons/icons.svg#sort", null, "xlink");
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.options);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.options.length);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf],
  styles: ['a[_ngcontent-%COMP%]{cursor:pointer}svg[_ngcontent-%COMP%]{width:100%;height:100%}.ae-picker[_ngcontent-%COMP%]{color:var(--ae-picker-color, #444);display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-picker-label[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:1.8rem;vertical-align:middle;font-size:85%;text-align:left;background-color:var(--ae-picker-label-color, white);min-width:2rem;float:left;border:1px solid #ddd;border-radius:var(--ae-button-radius, 4px);text-overflow:clip;overflow:hidden;white-space:nowrap;height:2rem}.ae-picker-label[_ngcontent-%COMP%]:before{content:"";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(to right,var(--ae-picker-label-color, white),var(--ae-picker-label-color, white) 100%)}.ae-picker-label[_ngcontent-%COMP%]:focus{outline:none}.ae-picker-label[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-picker-label[_ngcontent-%COMP%]:hover:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-picker-label[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-picker-label[_ngcontent-%COMP%]:disabled:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;right:0;width:1rem}.ae-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:not(:root){overflow:hidden}.ae-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .ae-stroke[_ngcontent-%COMP%]{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-picker-options[_ngcontent-%COMP%]{background-color:var(--ae-picker-option-bg-color, #fff);display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:#0003 0 2px 8px}.ae-picker-options[_ngcontent-%COMP%]   .ae-picker-item[_ngcontent-%COMP%]{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-picker-options[_ngcontent-%COMP%]   .ae-picker-item.selected[_ngcontent-%COMP%]{color:#06c;background-color:var(--ae-picker-option-active-bg-color, #fff4c2)}.ae-picker-options[_ngcontent-%COMP%]   .ae-picker-item.focused[_ngcontent-%COMP%]{background-color:var(--ae-picker-option-focused-bg-color, #fbf9b0)}.ae-picker-options[_ngcontent-%COMP%]   .ae-picker-item[_ngcontent-%COMP%]:hover{background-color:var(--ae-picker-option-hover-bg-color, #fffa98)}.ae-expanded[_ngcontent-%COMP%]{display:block;margin-top:-1px;z-index:1}.ae-expanded[_ngcontent-%COMP%]   .ae-picker-label[_ngcontent-%COMP%]{color:#ccc;z-index:2}.ae-expanded[_ngcontent-%COMP%]   .ae-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#ccc;z-index:2}.ae-expanded[_ngcontent-%COMP%]   .ae-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .ae-stroke[_ngcontent-%COMP%]{stroke:#ccc}.ae-expanded[_ngcontent-%COMP%]   .ae-picker-options[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeSelectComponent, [{
    type: Component,
    args: [{
      selector: "ae-select",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AeSelectComponent),
        multi: true
      }],
      template: `<span class="ae-picker" [ngClass]="{'ae-expanded':isOpen}">
  <button [tabIndex]="-1" #labelButton tabindex="-1" type="button" role="button" class="ae-picker-label" (click)="toggleOpen($event);">{{label}}
    <svg>
      <use [attr.href]="'assets/ae-icons/icons.svg#sort'" [attr.xlink:href]="'assets/ae-icons/icons.svg#sort'"></use>
    </svg>
  </button>
  <span class="ae-picker-options">
    <button tabindex="-1" type="button" role="button" class="ae-picker-item"
          *ngFor="let item of options; let i = index"
          [ngClass]="{'selected': item.value === value, 'focused': i === optionId}"
          (click)="optionSelect(item, $event)">
          {{item.label}}
    </button>
    <span class="dropdown-item" *ngIf="!options.length">No items for select</span>
  </span>
</span>
`,
      styles: ['a{cursor:pointer}svg{width:100%;height:100%}.ae-picker{color:var(--ae-picker-color, #444);display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-picker-label{cursor:pointer;display:inline-block;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:1.8rem;vertical-align:middle;font-size:85%;text-align:left;background-color:var(--ae-picker-label-color, white);min-width:2rem;float:left;border:1px solid #ddd;border-radius:var(--ae-button-radius, 4px);text-overflow:clip;overflow:hidden;white-space:nowrap;height:2rem}.ae-picker-label:before{content:"";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(to right,var(--ae-picker-label-color, white),var(--ae-picker-label-color, white) 100%)}.ae-picker-label:focus{outline:none}.ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-picker-label:hover:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-picker-label:disabled:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-picker-label svg{position:absolute;right:0;width:1rem}.ae-picker-label svg:not(:root){overflow:hidden}.ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-picker-options{background-color:var(--ae-picker-option-bg-color, #fff);display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:#0003 0 2px 8px}.ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-picker-options .ae-picker-item.selected{color:#06c;background-color:var(--ae-picker-option-active-bg-color, #fff4c2)}.ae-picker-options .ae-picker-item.focused{background-color:var(--ae-picker-option-focused-bg-color, #fbf9b0)}.ae-picker-options .ae-picker-item:hover{background-color:var(--ae-picker-option-hover-bg-color, #fffa98)}.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-expanded .ae-picker-label{color:#ccc;z-index:2}.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-expanded .ae-picker-options{display:flex;flex-direction:column;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}\n']
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    options: [{
      type: Input
    }],
    isHidden: [{
      type: Input,
      args: ["hidden"]
    }],
    hidden: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    changeEvent: [{
      type: Output,
      args: ["change"]
    }],
    labelButton: [{
      type: ViewChild,
      args: ["labelButton", {
        static: true
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }],
    handleKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AeToolbarComponent = class {
  constructor(r, editorService, er, doc) {
    this.r = r;
    this.editorService = editorService;
    this.er = er;
    this.doc = doc;
    this.htmlMode = false;
    this.linkSelected = false;
    this.block = "default";
    this.fontName = "Times New Roman";
    this.fontSize = "3";
    this.headings = [{
      label: "Heading 1",
      value: "h1"
    }, {
      label: "Heading 2",
      value: "h2"
    }, {
      label: "Heading 3",
      value: "h3"
    }, {
      label: "Heading 4",
      value: "h4"
    }, {
      label: "Heading 5",
      value: "h5"
    }, {
      label: "Heading 6",
      value: "h6"
    }, {
      label: "Heading 7",
      value: "h7"
    }, {
      label: "Paragraph",
      value: "p"
    }, {
      label: "Predefined",
      value: "pre"
    }, {
      label: "Standard",
      value: "div"
    }, {
      label: "default",
      value: "default"
    }];
    this.fontSizes = [{
      label: "1",
      value: "1"
    }, {
      label: "2",
      value: "2"
    }, {
      label: "3",
      value: "3"
    }, {
      label: "4",
      value: "4"
    }, {
      label: "5",
      value: "5"
    }, {
      label: "6",
      value: "6"
    }, {
      label: "7",
      value: "7"
    }];
    this.customClassId = "-1";
    this.customClassList = [{
      label: "",
      value: ""
    }];
    this.tagMap = {
      BLOCKQUOTE: "indent",
      A: "link"
    };
    this.select = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "PRE", "DIV"];
    this.buttons = ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent", "insertUnorderedList", "insertOrderedList", "link"];
    this.fonts = [{
      label: "",
      value: ""
    }];
    this.execute = new EventEmitter();
  }
  set customClasses(classes) {
    if (classes) {
      this._customClasses = classes;
      this.customClassList = this._customClasses.map((x, i) => ({
        label: x.name,
        value: i.toString()
      }));
      this.customClassList.unshift({
        label: "Clear Class",
        value: "-1"
      });
    }
  }
  set defaultFontName(value) {
    if (value) {
      this.fontName = value;
    }
  }
  set defaultFontSize(value) {
    if (value) {
      this.fontSize = value;
    }
  }
  get isLinkButtonDisabled() {
    return this.htmlMode || !Boolean(this.editorService.selectedText);
  }
  /**
   * Trigger command from editor header buttons
   * @param command string from toolbar buttons
   */
  triggerCommand(command) {
    this.execute.emit(command);
  }
  /**
   * highlight editor buttons when cursor moved or positioning
   */
  triggerButtons() {
    if (!this.showToolbar) {
      return;
    }
    this.buttons.forEach((e) => {
      const result = this.doc.queryCommandState(e);
      const elementById = this.doc.getElementById(e + "-" + this.id);
      if (result) {
        this.r.addClass(elementById, "active");
      } else {
        this.r.removeClass(elementById, "active");
      }
    });
  }
  /**
   * trigger highlight editor buttons when cursor moved or positioning in block
   */
  triggerBlocks(nodes) {
    if (!this.showToolbar) {
      return;
    }
    this.linkSelected = nodes.findIndex((x) => x.nodeName === "A") > -1;
    let found = false;
    this.select.forEach((y) => {
      const node = nodes.find((x) => x.nodeName === y);
      if (node !== void 0 && y === node.nodeName) {
        if (found === false) {
          this.block = node.nodeName.toLowerCase();
          found = true;
        }
      } else if (found === false) {
        this.block = "default";
      }
    });
    found = false;
    if (this._customClasses) {
      this._customClasses.forEach((y, index) => {
        const node = nodes.find((x) => {
          if (x instanceof Element) {
            return x.className === y.class;
          }
        });
        if (node !== void 0) {
          if (found === false) {
            this.customClassId = index.toString();
            found = true;
          }
        } else if (found === false) {
          this.customClassId = "-1";
        }
      });
    }
    Object.keys(this.tagMap).map((e) => {
      const elementById = this.doc.getElementById(this.tagMap[e] + "-" + this.id);
      const node = nodes.find((x) => x.nodeName === e);
      if (node !== void 0 && e === node.nodeName) {
        this.r.addClass(elementById, "active");
      } else {
        this.r.removeClass(elementById, "active");
      }
    });
    this.foreColour = this.doc.queryCommandValue("ForeColor");
    this.fontSize = this.doc.queryCommandValue("FontSize");
    this.fontName = this.doc.queryCommandValue("FontName").replace(/"/g, "");
    this.backColor = this.doc.queryCommandValue("backColor");
  }
  /**
   * insert URL link
   */
  insertUrl() {
    let url = "https://";
    const selection = this.editorService.savedSelection;
    if (selection && selection.commonAncestorContainer.parentElement.nodeName === "A") {
      const parent = selection.commonAncestorContainer.parentElement;
      if (parent.href !== "") {
        url = parent.href;
      }
    }
    url = prompt("Insert URL link", url);
    if (url && url !== "" && url !== "https://") {
      this.editorService.createLink(url);
    }
  }
  /**
   * insert Video link
   */
  insertVideo() {
    this.execute.emit("");
    const url = prompt("Insert Video link", `https://`);
    if (url && url !== "" && url !== `https://`) {
      this.editorService.insertVideo(url);
    }
  }
  /** insert color */
  insertColor(color, where) {
    this.editorService.insertColor(color, where);
    this.execute.emit("");
  }
  /**
   * set font Name/family
   * @param foreColor string
   */
  setFontName(foreColor) {
    this.editorService.setFontName(foreColor);
    this.execute.emit("");
  }
  /**
   * set font Size
   * @param fontSize string
   */
  setFontSize(fontSize) {
    this.editorService.setFontSize(fontSize);
    this.execute.emit("");
  }
  /**
   * toggle editor mode (WYSIWYG or SOURCE)
   * @param m boolean
   */
  setEditorMode(m) {
    const toggleEditorModeButton = this.doc.getElementById("toggleEditorMode-" + this.id);
    if (m) {
      this.r.addClass(toggleEditorModeButton, "active");
    } else {
      this.r.removeClass(toggleEditorModeButton, "active");
    }
    this.htmlMode = m;
  }
  /**
   * Upload image when file is selected.
   */
  onFileChanged(event) {
    const file = event.target.files[0];
    if (file.type.includes("image/")) {
      if (this.upload) {
        this.upload(file).subscribe((response) => this.watchUploadImage(response, event));
      } else if (this.uploadUrl) {
        this.editorService.uploadImage(file).subscribe((response) => this.watchUploadImage(response, event));
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fr = e.currentTarget;
          this.editorService.insertImage(fr.result.toString());
        };
        reader.readAsDataURL(file);
      }
    }
  }
  watchUploadImage(response, event) {
    const {
      imageUrl
    } = response.body;
    this.editorService.insertImage(imageUrl);
    event.srcElement.value = null;
  }
  /**
   * Set custom class
   */
  setCustomClass(classId) {
    if (classId === "-1") {
      this.execute.emit("clear");
    } else {
      this.editorService.createCustomClass(this._customClasses[+classId]);
    }
  }
  isButtonHidden(name) {
    if (!name) {
      return false;
    }
    if (!(this.hiddenButtons instanceof Array)) {
      return false;
    }
    let result;
    for (const arr of this.hiddenButtons) {
      if (arr instanceof Array) {
        result = arr.find((item) => item === name);
      }
      if (result) {
        break;
      }
    }
    return result !== void 0;
  }
  focus() {
    this.execute.emit("focus");
    console.log("focused");
  }
};
AeToolbarComponent.ɵfac = function AeToolbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AeToolbarComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AngularEditorService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT));
};
AeToolbarComponent.ɵcmp = ɵɵdefineComponent({
  type: AeToolbarComponent,
  selectors: [["angular-editor-toolbar"], ["ae-toolbar"], ["div", "aeToolbar", ""]],
  viewQuery: function AeToolbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.myInputFile = _t.first);
    }
  },
  inputs: {
    id: "id",
    uploadUrl: "uploadUrl",
    upload: "upload",
    showToolbar: "showToolbar",
    fonts: "fonts",
    customClasses: "customClasses",
    defaultFontName: "defaultFontName",
    defaultFontSize: "defaultFontSize",
    hiddenButtons: "hiddenButtons"
  },
  outputs: {
    execute: "execute"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 1,
  consts: [["fgInput", ""], ["bgInput", ""], ["fileInput", ""], ["class", "angular-editor-toolbar", 4, "ngIf"], [1, "angular-editor-toolbar"], ["aeToolbarSet", ""], ["aeButton", "", "title", "Undo", "iconName", "undo", 3, "click", "hidden"], ["aeButton", "", "title", "Redo", "iconName", "redo", 3, "click", "hidden"], ["aeButton", "", "title", "Bold", "iconName", "bold", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "italic", "title", "Italic", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "title", "Underline", "iconName", "underline", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "strikeThrough", "title", "Strikethrough", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "title", "Subscript", "iconName", "subscript", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "superscript", "title", "Superscript", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "justifyLeft", "title", "Justify Left", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "justifyCenter", "title", "Justify Center", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "justifyRight", "title", "Justify Right", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "justifyFull", "title", "Justify Full", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "indent", "title", "Indent", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "outdent", "title", "Outdent", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "unorderedList", "title", "Unordered List", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "orderedList", "title", "Ordered List", 3, "click", "id", "disabled", "hidden"], ["tabindex", "-1", 1, "select-heading", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"], ["tabindex", "-1", 1, "select-font", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"], ["tabindex", "-1", 1, "select-font-size", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"], ["type", "color", 2, "display", "none", 3, "change"], ["aeButton", "", "iconName", "textColor", "title", "Text Color", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "backgroundColor", "title", "Background Color", 3, "click", "id", "disabled", "hidden"], ["aeToolbarSet", "", 4, "ngIf"], ["aeButton", "", "iconName", "link", "title", "Insert Link", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "unlink", "title", "Unlink", 3, "click", "id", "disabled", "hidden"], ["accept", "image/*", "type", "file", 2, "display", "none", 3, "change"], ["aeButton", "", "iconName", "image", "title", "Insert Image", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "video", "title", "Insert Video", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "horizontalLine", "title", "Horizontal Line", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "removeFormat", "title", "Clear Formatting", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], ["aeButton", "", "iconName", "htmlCode", "title", "HTML Code", 3, "click", "id", "hidden"], ["tabindex", "-1", 1, "select-custom-style", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"]],
  template: function AeToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AeToolbarComponent_div_0_Template, 49, 83, "div", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.showToolbar);
    }
  },
  dependencies: [AeToolbarSetComponent, AeButtonComponent, AeSelectComponent, NgIf, NgControlStatus, NgModel],
  styles: ['a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:var(--ae-toolbar-bg-color, #f5f5f5);font-size:.8rem;padding:var(--ae-toolbar-padding, .2rem);border:var(--ae-toolbar-border-radius, 1px solid #ddd);display:flex;flex-wrap:wrap;gap:4px}.select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance: none){.select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:"";inset:auto auto -3px -1px;width:15px;height:2px;z-index:0;background:#1b1b1b}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeToolbarComponent, [{
    type: Component,
    args: [{
      selector: "angular-editor-toolbar, ae-toolbar, div[aeToolbar]",
      template: `<div class="angular-editor-toolbar" *ngIf="showToolbar">
  <div aeToolbarSet>
    <button aeButton title="Undo" iconName="undo" (click)="triggerCommand('undo')" [hidden]="isButtonHidden('undo')">
    </button>
    <button aeButton title="Redo" iconName="redo" (click)="triggerCommand('redo')"
            [hidden]="isButtonHidden('redo')">
    </button>
  </div>
  <div aeToolbarSet>
    <button [id]="'bold-'+id" aeButton title="Bold" iconName="bold" (click)="triggerCommand('bold')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('bold')">
    </button>
    <button [id]="'italic-'+id" aeButton iconName="italic" title="Italic" (click)="triggerCommand('italic')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('italic')">
    </button>
    <button [id]="'underline-'+id" aeButton title="Underline" iconName="underline"
            (click)="triggerCommand('underline')" [disabled]="htmlMode" [hidden]="isButtonHidden('underline')">
    </button>
    <button [id]="'strikeThrough-'+id" aeButton iconName="strikeThrough" title="Strikethrough"
            (click)="triggerCommand('strikeThrough')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('strikeThrough')">
    </button>
    <button [id]="'subscript-'+id" aeButton title="Subscript" iconName="subscript"
            (click)="triggerCommand('subscript')" [disabled]="htmlMode" [hidden]="isButtonHidden('subscript')">
    </button>
    <button [id]="'superscript-'+id" aeButton iconName="superscript" title="Superscript"
            (click)="triggerCommand('superscript')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('superscript')">
    </button>
  </div>
  <div aeToolbarSet>
    <button [id]="'justifyLeft-'+id" aeButton iconName="justifyLeft" title="Justify Left"
            (click)="triggerCommand('justifyLeft')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('justifyLeft')">
    </button>
    <button [id]="'justifyCenter-'+id" aeButton iconName="justifyCenter" title="Justify Center"
            (click)="triggerCommand('justifyCenter')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('justifyCenter')">
    </button>
    <button [id]="'justifyRight-'+id" aeButton iconName="justifyRight" title="Justify Right"
            (click)="triggerCommand('justifyRight')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('justifyRight')">
    </button>
    <button [id]="'justifyFull-'+id" aeButton iconName="justifyFull" title="Justify Full"
            (click)="triggerCommand('justifyFull')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('justifyFull')">
    </button>
  </div>
  <div aeToolbarSet>
    <button [id]="'indent-'+id" aeButton iconName="indent" title="Indent"
            (click)="triggerCommand('indent')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('indent')">
    </button>
    <button [id]="'outdent-'+id" aeButton iconName="outdent" title="Outdent"
            (click)="triggerCommand('outdent')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('outdent')">
    </button>
  </div>
  <div aeToolbarSet>
    <button [id]="'insertUnorderedList-'+id" aeButton iconName="unorderedList" title="Unordered List"
            (click)="triggerCommand('insertUnorderedList')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertUnorderedList')">
    </button>
    <button [id]="'insertOrderedList-'+id" aeButton iconName="orderedList" title="Ordered List"
            (click)="triggerCommand('insertOrderedList')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertOrderedList')">
    </button>
  </div>
  <div aeToolbarSet>
    <ae-select class="select-heading" [options]="headings"
               [(ngModel)]="block"
               (change)="triggerCommand(block)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('heading')"
               tabindex="-1"></ae-select>
  </div>
  <div aeToolbarSet>
    <ae-select class="select-font" [options]="fonts"
               [(ngModel)]="fontName"
               (change)="setFontName(fontName)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('fontName')"
               tabindex="-1"></ae-select>
  </div>
  <div aeToolbarSet>
    <ae-select class="select-font-size" [options]="fontSizes"
               [(ngModel)]="fontSize"
               (change)="setFontSize(fontSize)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('fontSize')"
               tabindex="-1">
    </ae-select>
  </div>
  <div aeToolbarSet>
    <input
      style="display: none"
      type="color" (change)="insertColor(fgInput.value, 'textColor')"
      #fgInput>
    <button [id]="'foregroundColorPicker-'+id" aeButton iconName="textColor"
            (click)="focus(); ; fgInput.click()"
            title="Text Color"
            [disabled]="htmlMode" [hidden]="isButtonHidden('textColor')">
    </button>
    <input
      style="display: none"
      type="color" (change)="insertColor(bgInput.value, 'backgroundColor')"
      #bgInput>
    <button [id]="'backgroundColorPicker-'+id" aeButton iconName="backgroundColor"
            (click)="focus(); ; bgInput.click()"
            title="Background Color"
            [disabled]="htmlMode" [hidden]="isButtonHidden('backgroundColor')">
    </button>
  </div>
  <div *ngIf="_customClasses" aeToolbarSet>
    <ae-select class="select-custom-style" [options]="customClassList"
               [(ngModel)]="customClassId"
               (change)="setCustomClass(customClassId)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('customClasses')"
               tabindex="-1"></ae-select>
  </div>
  <div aeToolbarSet>
    <button [id]="'link-'+id" aeButton iconName="link" (click)="insertUrl()"
            title="Insert Link" [disabled]="isLinkButtonDisabled" [hidden]="isButtonHidden('link')">
    </button>
    <button [id]="'unlink-'+id" aeButton iconName="unlink" (click)="triggerCommand('unlink')"
            title="Unlink" [disabled]="htmlMode || !linkSelected" [hidden]="isButtonHidden('unlink')">
    </button>
    <input
      style="display: none"
      accept="image/*"
      type="file" (change)="onFileChanged($event)"
      #fileInput>
    <button [id]="'insertImage-'+id" aeButton iconName="image" (click)="focus(); fileInput.click()"
            title="Insert Image"
            [disabled]="htmlMode" [hidden]="isButtonHidden('insertImage')">
    </button>
    <button [id]="'insertVideo-'+id" aeButton iconName="video"
            (click)="insertVideo()" title="Insert Video" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertVideo')">
    </button>
    <button [id]="'insertHorizontalRule-'+id" aeButton iconName="horizontalLine" title="Horizontal Line"
            (click)="triggerCommand('insertHorizontalRule')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertHorizontalRule')">
    </button>
  </div>
  <div aeToolbarSet>
    <button [id]="'clearFormatting-'+id" aeButton iconName="removeFormat" title="Clear Formatting"
            class="angular-editor-button"
            (click)="triggerCommand('removeFormat')" [disabled]="htmlMode" [hidden]="isButtonHidden('removeFormat')">
    </button>
  </div>
  <div aeToolbarSet>
    <button [id]="'toggleEditorMode-'+id" aeButton iconName="htmlCode" title="HTML Code"
            (click)="triggerCommand('toggleEditorMode')" [hidden]="isButtonHidden('toggleEditorMode')">
    </button>
  </div>
  <ng-content></ng-content>
</div>
`,
      styles: ['a{cursor:pointer}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:var(--ae-toolbar-bg-color, #f5f5f5);font-size:.8rem;padding:var(--ae-toolbar-padding, .2rem);border:var(--ae-toolbar-border-radius, 1px solid #ddd);display:flex;flex-wrap:wrap;gap:4px}.select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.select-heading option{border:1px solid;background-color:#fff}.select-heading .default{font-size:16px}.select-heading .h1{font-size:24px}.select-heading .h2{font-size:20px}.select-heading .h3{font-size:16px}.select-heading .h4{font-size:15px}.select-heading .h5{font-size:14px}.select-heading .h6{font-size:13px}.select-heading .div,.select-heading .pre{font-size:12px}}.select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.select-font option{border:1px solid;background-color:#fff}}.select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.select-font-size option{border:1px solid;background-color:#fff}.select-font-size .size1{font-size:10px}.select-font-size .size2{font-size:12px}.select-font-size .size3{font-size:14px}.select-font-size .size4{font-size:16px}.select-font-size .size5{font-size:18px}.select-font-size .size6{font-size:20px}.select-font-size .size7{font-size:22px}}.select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.select-custom-style option{border:1px solid;background-color:#fff}}.select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.color-label{position:relative;cursor:pointer}.background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.foreground :after{position:absolute;content:"";inset:auto auto -3px -1px;width:15px;height:2px;z-index:0;background:#1b1b1b}\n']
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    id: [{
      type: Input
    }],
    uploadUrl: [{
      type: Input
    }],
    upload: [{
      type: Input
    }],
    showToolbar: [{
      type: Input
    }],
    fonts: [{
      type: Input
    }],
    customClasses: [{
      type: Input
    }],
    defaultFontName: [{
      type: Input
    }],
    defaultFontSize: [{
      type: Input
    }],
    hiddenButtons: [{
      type: Input
    }],
    execute: [{
      type: Output
    }],
    myInputFile: [{
      type: ViewChild,
      args: ["fileInput", {
        static: true
      }]
    }]
  });
})();
var AngularEditorComponent = class {
  constructor(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
    this.r = r;
    this.editorService = editorService;
    this.doc = doc;
    this.sanitizer = sanitizer;
    this.cdRef = cdRef;
    this.autoFocus = autoFocus;
    this.modeVisual = true;
    this.showPlaceholder = false;
    this.disabled = false;
    this.focused = false;
    this.touched = false;
    this.changed = false;
    this.id = "";
    this.config = angularEditorConfig;
    this.placeholder = "";
    this.executeCommandFn = this.executeCommand.bind(this);
    this.viewMode = new EventEmitter();
    this.blurEvent = new EventEmitter();
    this.focusEvent = new EventEmitter();
    this.tabindex = -1;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  onFocus() {
    this.focus();
  }
  ngOnInit() {
    this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
  }
  ngAfterViewInit() {
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  onPaste(event) {
    if (this.config.rawPaste) {
      event.preventDefault();
      const text = event.clipboardData.getData("text/plain");
      document.execCommand("insertHTML", false, text);
      return text;
    }
  }
  /**
   * Executed command from editor header buttons
   * @param command string from triggerCommand
   * @param value
   */
  executeCommand(command, value) {
    this.focus();
    if (command === "focus") {
      return;
    }
    if (command === "toggleEditorMode") {
      this.toggleEditorMode(this.modeVisual);
    } else if (command !== "") {
      if (command === "clear") {
        this.editorService.removeSelectedElements(this.getCustomTags());
        this.onContentChange(this.textArea.nativeElement);
      } else if (command === "default") {
        this.editorService.removeSelectedElements("h1,h2,h3,h4,h5,h6,p,pre");
        this.onContentChange(this.textArea.nativeElement);
      } else {
        this.editorService.executeCommand(command, value);
      }
      this.exec();
    }
  }
  /**
   * focus event
   */
  onTextAreaFocus(event) {
    if (this.focused) {
      event.stopPropagation();
      return;
    }
    this.focused = true;
    this.focusEvent.emit(event);
    if (!this.touched || !this.changed) {
      this.editorService.executeInNextQueueIteration(() => {
        this.configure();
        this.touched = true;
      });
    }
  }
  /**
   * @description fires when cursor leaves textarea
   */
  onTextAreaMouseOut(event) {
    this.editorService.saveSelection();
  }
  /**
   * blur event
   */
  onTextAreaBlur(event) {
    this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
    if (typeof this.onTouched === "function") {
      this.onTouched();
    }
    if (event.relatedTarget !== null) {
      const parent = event.relatedTarget.parentElement;
      if (!parent.classList.contains("angular-editor-toolbar-set") && !parent.classList.contains("ae-picker")) {
        this.blurEvent.emit(event);
        this.focused = false;
      }
    }
  }
  /**
   *  focus the text area when the editor is focused
   */
  focus() {
    if (this.modeVisual) {
      this.textArea.nativeElement.focus();
    } else {
      const sourceText = this.doc.getElementById("sourceText" + this.id);
      sourceText.focus();
      this.focused = true;
    }
  }
  /**
   * Executed from the contenteditable section while the input property changes
   * @param element html element from contenteditable
   */
  onContentChange(element) {
    let html = "";
    if (this.modeVisual) {
      html = element.innerHTML;
    } else {
      html = element.innerText;
    }
    if (!html || html === "<br>") {
      html = "";
    }
    if (typeof this.onChange === "function") {
      this.onChange(this.config.sanitize || this.config.sanitize === void 0 ? this.sanitizer.sanitize(SecurityContext.HTML, html) : html);
      if (!html !== this.showPlaceholder) {
        this.togglePlaceholder(this.showPlaceholder);
      }
    }
    this.changed = true;
  }
  /**
   * Set the function to be called
   * when the control receives a change event.
   *
   * @param fn a function
   */
  registerOnChange(fn) {
    this.onChange = (e) => e === "<br>" ? fn("") : fn(e);
  }
  /**
   * Set the function to be called
   * when the control receives a touch event.
   *
   * @param fn a function
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Write a new value to the element.
   *
   * @param value value to be executed when there is a change in contenteditable
   */
  writeValue(value) {
    if ((!value || value === "<br>" || value === "") !== this.showPlaceholder) {
      this.togglePlaceholder(this.showPlaceholder);
    }
    if (value === void 0 || value === "" || value === "<br>") {
      value = null;
    }
    this.refreshView(value);
  }
  /**
   * refresh view/HTML of the editor
   *
   * @param value html string from the editor
   */
  refreshView(value) {
    const normalizedValue = value === null ? "" : value;
    this.r.setProperty(this.textArea.nativeElement, "innerHTML", normalizedValue);
    return;
  }
  /**
   * toggles placeholder based on input string
   *
   * @param value A HTML string from the editor
   */
  togglePlaceholder(value) {
    if (!value) {
      this.r.addClass(this.editorWrapper.nativeElement, "show-placeholder");
      this.showPlaceholder = true;
    } else {
      this.r.removeClass(this.editorWrapper.nativeElement, "show-placeholder");
      this.showPlaceholder = false;
    }
  }
  /**
   * Implements disabled state for this element
   *
   * @param isDisabled Disabled flag
   */
  setDisabledState(isDisabled) {
    const div = this.textArea.nativeElement;
    const action = isDisabled ? "addClass" : "removeClass";
    this.r[action](div, "disabled");
    this.disabled = isDisabled;
  }
  /**
   * toggles editor mode based on bToSource bool
   *
   * @param bToSource A boolean value from the editor
   */
  toggleEditorMode(bToSource) {
    let oContent;
    const editableElement = this.textArea.nativeElement;
    if (bToSource) {
      oContent = this.r.createText(editableElement.innerHTML);
      this.r.setProperty(editableElement, "innerHTML", "");
      this.r.setProperty(editableElement, "contentEditable", false);
      const oPre = this.r.createElement("pre");
      this.r.setStyle(oPre, "margin", "0");
      this.r.setStyle(oPre, "outline", "none");
      const oCode = this.r.createElement("code");
      this.r.setProperty(oCode, "id", "sourceText" + this.id);
      this.r.setStyle(oCode, "display", "block");
      this.r.setStyle(oCode, "white-space", "pre-wrap");
      this.r.setStyle(oCode, "word-break", "keep-all");
      this.r.setStyle(oCode, "outline", "none");
      this.r.setStyle(oCode, "margin", "0");
      this.r.setStyle(oCode, "background-color", "#fff5b9");
      this.r.setProperty(oCode, "contentEditable", true);
      this.r.appendChild(oCode, oContent);
      this.focusInstance = this.r.listen(oCode, "focus", (event) => this.onTextAreaFocus(event));
      this.blurInstance = this.r.listen(oCode, "blur", (event) => this.onTextAreaBlur(event));
      this.r.appendChild(oPre, oCode);
      this.r.appendChild(editableElement, oPre);
      this.doc.execCommand("defaultParagraphSeparator", false, "div");
      this.modeVisual = false;
      this.viewMode.emit(false);
      oCode.focus();
    } else {
      if (this.doc.querySelectorAll) {
        this.r.setProperty(editableElement, "innerHTML", editableElement.innerText);
      } else {
        oContent = this.doc.createRange();
        oContent.selectNodeContents(editableElement.firstChild);
        this.r.setProperty(editableElement, "innerHTML", oContent.toString());
      }
      this.r.setProperty(editableElement, "contentEditable", true);
      this.modeVisual = true;
      this.viewMode.emit(true);
      this.onContentChange(editableElement);
      editableElement.focus();
    }
    this.editorToolbar.setEditorMode(!this.modeVisual);
  }
  /**
   * toggles editor buttons when cursor moved or positioning
   *
   * Send a node array from the contentEditable of the editor
   */
  exec() {
    this.editorToolbar.triggerButtons();
    let userSelection;
    if (this.doc.getSelection) {
      userSelection = this.doc.getSelection();
      this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
    }
    let a = userSelection.focusNode;
    const els = [];
    while (a && a.id !== "editor") {
      els.unshift(a);
      a = a.parentNode;
    }
    this.editorToolbar.triggerBlocks(els);
  }
  configure() {
    this.editorService.uploadUrl = this.config.uploadUrl;
    this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;
    if (this.config.defaultParagraphSeparator) {
      this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
    }
    if (this.config.defaultFontName) {
      this.editorService.setFontName(this.config.defaultFontName);
    }
    if (this.config.defaultFontSize) {
      this.editorService.setFontSize(this.config.defaultFontSize);
    }
  }
  getFonts() {
    const fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
    return fonts.map((x) => {
      return {
        label: x.name,
        value: x.name
      };
    });
  }
  getCustomTags() {
    const tags = ["span"];
    this.config.customClasses.forEach((x) => {
      if (x.tag !== void 0) {
        if (!tags.includes(x.tag)) {
          tags.push(x.tag);
        }
      }
    });
    return tags.join(",");
  }
  ngOnDestroy() {
    if (this.blurInstance) {
      this.blurInstance();
    }
    if (this.focusInstance) {
      this.focusInstance();
    }
  }
  filterStyles(html) {
    html = html.replace("position: fixed;", "");
    return html;
  }
};
AngularEditorComponent.ɵfac = function AngularEditorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AngularEditorComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AngularEditorService), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵinjectAttribute("tabindex"), ɵɵinjectAttribute("autofocus"));
};
AngularEditorComponent.ɵcmp = ɵɵdefineComponent({
  type: AngularEditorComponent,
  selectors: [["angular-editor"]],
  contentQueries: function AngularEditorComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customButtonsTemplateRef = _t.first);
    }
  },
  viewQuery: function AngularEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c6, 7);
      ɵɵviewQuery(_c7, 7);
      ɵɵviewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textArea = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorToolbar = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function AngularEditorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function AngularEditorComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabindex);
    }
  },
  inputs: {
    id: "id",
    config: "config",
    placeholder: "placeholder",
    tabIndex: "tabIndex"
  },
  outputs: {
    html: "html",
    viewMode: "viewMode",
    blurEvent: "blur",
    focusEvent: "focus"
  },
  standalone: false,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularEditorComponent),
    multi: true
  }, AngularEditorService])],
  decls: 11,
  vars: 33,
  consts: [["angularEditor", ""], ["editorToolbar", ""], ["editorWrapper", ""], ["editor", ""], [1, "angular-editor", 3, "ngClass"], [3, "execute", "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "angular-editor-wrapper"], [1, "angular-editor-textarea", 3, "input", "focus", "blur", "click", "keyup", "mouseout", "paste"], [1, "angular-editor-placeholder"]],
  template: function AngularEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 4, 0)(2, "angular-editor-toolbar", 5, 1);
      ɵɵlistener("execute", function AngularEditorComponent_Template_angular_editor_toolbar_execute_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.executeCommand($event));
      });
      ɵɵelementContainer(4, 6);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 7, 2)(7, "div", 8, 3);
      ɵɵlistener("input", function AngularEditorComponent_Template_div_input_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onContentChange($event.target));
      })("focus", function AngularEditorComponent_Template_div_focus_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTextAreaFocus($event));
      })("blur", function AngularEditorComponent_Template_div_blur_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTextAreaBlur($event));
      })("click", function AngularEditorComponent_Template_div_click_7_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.exec());
      })("keyup", function AngularEditorComponent_Template_div_keyup_7_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.exec());
      })("mouseout", function AngularEditorComponent_Template_div_mouseout_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTextAreaMouseOut($event));
      })("paste", function AngularEditorComponent_Template_div_paste_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPaste($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(9, "span", 9);
      ɵɵtext(10);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.config.width)("min-width", ctx.config.minWidth);
      ɵɵproperty("ngClass", ɵɵpureFunction1(29, _c9, ctx.config.toolbarPosition === "bottom"));
      ɵɵadvance(2);
      ɵɵproperty("id", ctx.id)("uploadUrl", ctx.config.uploadUrl)("upload", ctx.config.upload)("showToolbar", ctx.config.showToolbar !== void 0 ? ctx.config.showToolbar : true)("fonts", ctx.getFonts())("customClasses", ctx.config.customClasses)("defaultFontName", ctx.config.defaultFontName)("defaultFontSize", ctx.config.defaultFontSize)("hiddenButtons", ctx.config.toolbarHiddenButtons);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.customButtonsTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction1(31, _c10, ctx.executeCommandFn));
      ɵɵadvance(3);
      ɵɵstyleProp("height", ctx.config.height)("min-height", ctx.config.minHeight)("max-height", ctx.config.maxHeight)("outline", ctx.config.outline === false ? "none" : void 0);
      ɵɵattribute("contenteditable", ctx.config.editable)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("translate", ctx.config.translate)("spellcheck", ctx.config.spellcheck);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.placeholder || ctx.config["placeholder"]);
    }
  },
  dependencies: [AeToolbarComponent, NgClass, NgTemplateOutlet],
  styles: ['a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--ae-gap, 5px)}.angular-editor.bottom[_ngcontent-%COMP%]{flex-direction:column-reverse}.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;resize:vertical}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:5rem;padding:.5rem .8rem 1rem;border-radius:var(--ae-text-area-border-radius, .3rem);border:var(--ae-text-area-border, 1px solid #ddd);background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]:focus, .angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea.focus[_ngcontent-%COMP%]{outline:var(--ae-focus-outline-color, -webkit-focus-ring-color auto 1px)}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p{margin-bottom:0}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:none;position:absolute;top:0;padding:.6rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:block}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5;pointer-events:none}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorComponent, [{
    type: Component,
    args: [{
      selector: "angular-editor",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AngularEditorComponent),
        multi: true
      }, AngularEditorService],
      template: `<div
  class="angular-editor"
  #angularEditor
  [style.width]="config.width"
  [style.minWidth]="config.minWidth"
  [ngClass]="{
     'bottom': config.toolbarPosition === 'bottom'
     }"
>
  <angular-editor-toolbar
    #editorToolbar
    [id]="id"
    [uploadUrl]="config.uploadUrl"
    [upload]="config.upload"
    [showToolbar]="config.showToolbar !== undefined ? config.showToolbar : true"
    [fonts]="getFonts()"
    [customClasses]="config.customClasses"
    [defaultFontName]="config.defaultFontName"
    [defaultFontSize]="config.defaultFontSize"
    [hiddenButtons]="config.toolbarHiddenButtons"
    (execute)="executeCommand($event)"
  >
    <ng-container
      [ngTemplateOutlet]="customButtonsTemplateRef"
      [ngTemplateOutletContext]="{ executeCommandFn: this.executeCommandFn}"
    >
    </ng-container>
  </angular-editor-toolbar>

  <div
    class="angular-editor-wrapper"
    #editorWrapper
  >
    <div
      #editor
      class="angular-editor-textarea"
      [attr.contenteditable]="config.editable"
      [attr.tabindex]="disabled ? -1 : tabIndex"
      [attr.translate]="config.translate"
      [attr.spellcheck]="config.spellcheck"
      [style.height]="config.height"
      [style.minHeight]="config.minHeight"
      [style.maxHeight]="config.maxHeight"
      [style.outline]="config.outline === false ? 'none': undefined"
      (input)="onContentChange($event.target)"
      (focus)="onTextAreaFocus($event)"
      (blur)="onTextAreaBlur($event)"
      (click)="exec()"
      (keyup)="exec()"
      (mouseout)="onTextAreaMouseOut($event)"
      (paste)="onPaste($event)"
    >
    </div>
    <span class="angular-editor-placeholder">{{ placeholder || config['placeholder'] }}</span>
  </div>
</div>
`,
      styles: ['a{cursor:pointer}.angular-editor{display:flex;flex-direction:column;gap:var(--ae-gap, 5px)}.angular-editor.bottom{flex-direction:column-reverse}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:150px;overflow:auto;resize:vertical}.angular-editor .angular-editor-wrapper .angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border-radius:var(--ae-text-area-border-radius, .3rem);border:var(--ae-text-area-border, 1px solid #ddd);background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea:focus,.angular-editor .angular-editor-wrapper .angular-editor-textarea.focus{outline:var(--ae-focus-outline-color, -webkit-focus-ring-color auto 1px)}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.6rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}\n']
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: DomSanitizer
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["tabindex"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["autofocus"]
      }]
    }];
  }, {
    id: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    html: [{
      type: Output
    }],
    textArea: [{
      type: ViewChild,
      args: ["editor", {
        static: true
      }]
    }],
    editorWrapper: [{
      type: ViewChild,
      args: ["editorWrapper", {
        static: true
      }]
    }],
    editorToolbar: [{
      type: ViewChild,
      args: ["editorToolbar"]
    }],
    customButtonsTemplateRef: [{
      type: ContentChild,
      args: ["customButtons"]
    }],
    viewMode: [{
      type: Output
    }],
    blurEvent: [{
      type: Output,
      args: ["blur"]
    }],
    focusEvent: [{
      type: Output,
      args: ["focus"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }]
  });
})();
var AngularEditorModule = class {
};
AngularEditorModule.ɵfac = function AngularEditorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AngularEditorModule)();
};
AngularEditorModule.ɵmod = ɵɵdefineNgModule({
  type: AngularEditorModule,
  declarations: [AngularEditorComponent, AeToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AngularEditorComponent, AeToolbarComponent, AeButtonComponent, AeToolbarSetComponent]
});
AngularEditorModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, FormsModule, ReactiveFormsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      declarations: [AngularEditorComponent, AeToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent],
      exports: [AngularEditorComponent, AeToolbarComponent, AeButtonComponent, AeToolbarSetComponent]
    }]
  }], null, null);
})();
export {
  AeButtonComponent,
  AeSelectComponent,
  AeToolbarComponent,
  AeToolbarSetComponent,
  AngularEditorComponent,
  AngularEditorModule,
  AngularEditorService
};
//# sourceMappingURL=@kolkov_angular-editor.js.map
