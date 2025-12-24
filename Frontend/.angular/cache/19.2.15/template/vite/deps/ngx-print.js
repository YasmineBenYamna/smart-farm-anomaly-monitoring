import {
  Directive,
  HostListener,
  Injectable,
  Input,
  NgModule,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-BRPYXLTX.js";
import "./chunk-7J22WABE.js";
import "./chunk-5PA5UEDQ.js";
import "./chunk-ETBEKOXV.js";
import "./chunk-55JZBEKM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/ngx-print/fesm2022/ngx-print.mjs
var PrintBase = class _PrintBase {
  _printStyle = [];
  _styleSheetFile = "";
  //#region Getters and Setters
  /**
   * Sets the print styles based on the provided values.
   *
   * @param {Object} values - Key-value pairs representing print styles.
   * @protected
   */
  setPrintStyle(values) {
    this._printStyle = [];
    for (let key in values) {
      if (values.hasOwnProperty(key)) {
        this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ""));
      }
    }
  }
  /**
   *
   *
   * @returns the string that create the stylesheet which will be injected
   * later within <style></style> tag.
   *
   * -join/replace to transform an array objects to css-styled string
   */
  returnStyleValues() {
    return `<style> ${this._printStyle.join(" ").replace(/,/g, ";")} </style>`;
  }
  /**
  * @returns string which contains the link tags containing the css which will
  * be injected later within <head></head> tag.
  *
  */
  returnStyleSheetLinkTags() {
    return this._styleSheetFile;
  }
  /**
   * Sets the style sheet file based on the provided CSS list.
   *
   * @param {string} cssList - CSS file or list of CSS files.
   * @protected
   */
  setStyleSheetFile(cssList) {
    let linkTagFn = function(cssFileName) {
      return `<link rel="stylesheet" type="text/css" href="${cssFileName}">`;
    };
    if (cssList.indexOf(",") !== -1) {
      const valueArr = cssList.split(",");
      this._styleSheetFile = valueArr.map((val) => linkTagFn(val)).join("");
    } else {
      this._styleSheetFile = linkTagFn(cssList);
    }
  }
  //#endregion
  //#region Private methods used by PrintBase
  /**
   * Updates the default values for input elements.
   *
   * @param {HTMLCollectionOf<HTMLInputElement>} elements - Collection of input elements.
   * @private
   */
  updateInputDefaults(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element["defaultValue"] = element.value;
      if (element["checked"]) element["defaultChecked"] = true;
    }
  }
  /**
   * Updates the default values for select elements.
   *
   * @param {HTMLCollectionOf<HTMLSelectElement>} elements - Collection of select elements.
   * @private
   */
  updateSelectDefaults(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const selectedIdx = element.selectedIndex;
      const selectedOption = element.options[selectedIdx];
      selectedOption.defaultSelected = true;
    }
  }
  /**
   * Updates the default values for textarea elements.
   *
   * @param {HTMLCollectionOf<HTMLTextAreaElement>} elements - Collection of textarea elements.
   * @private
   */
  updateTextAreaDefaults(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element["defaultValue"] = element.value;
    }
  }
  /**
   * Converts a canvas element to an image and returns its HTML string.
   *
   * @param {HTMLCanvasElement} element - The canvas element to convert.
   * @returns {string} - HTML string of the image.
   * @private
   */
  canvasToImageHtml(element) {
    const dataUrl = element.toDataURL();
    return `<img src="${dataUrl}" style="max-width: 100%;">`;
  }
  /**
   * Includes canvas contents in the print section via img tags.
   *
   * @param {HTMLCollectionOf<HTMLCanvasElement>} elements - Collection of canvas elements.
   * @private
   */
  updateCanvasToImage(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = this.canvasToImageHtml(elements[i]);
      elements[i].insertAdjacentHTML("afterend", element);
      elements[i].remove();
    }
  }
  /**
   * Retrieves the HTML content of a specified printing section.
   *
   * @param {string} printSectionId - Id of the printing section.
   * @returns {string | null} - HTML content of the printing section, or null if not found.
   * @private
   */
  getHtmlContents(printSectionId) {
    const printContents = document.getElementById(printSectionId);
    if (!printContents) return null;
    const inputEls = printContents.getElementsByTagName("input");
    const selectEls = printContents.getElementsByTagName("select");
    const textAreaEls = printContents.getElementsByTagName("textarea");
    const canvasEls = printContents.getElementsByTagName("canvas");
    this.updateInputDefaults(inputEls);
    this.updateSelectDefaults(selectEls);
    this.updateTextAreaDefaults(textAreaEls);
    this.updateCanvasToImage(canvasEls);
    return printContents.innerHTML;
  }
  /**
   * Retrieves the HTML content of elements with the specified tag.
   *
   * @param {keyof HTMLElementTagNameMap} tag - HTML tag name.
   * @returns {string} - Concatenated outerHTML of elements with the specified tag.
   * @private
   */
  getElementTag(tag) {
    const html = [];
    const elements = document.getElementsByTagName(tag);
    for (let index = 0; index < elements.length; index++) {
      html.push(elements[index].outerHTML);
    }
    return html.join("\r\n");
  }
  //#endregion
  /**
   * Prints the specified content using the provided print options.
   *
   * @param {PrintOptions} printOptions - Options for printing.
   * @public
   */
  print(printOptions) {
    let styles = "", links = "", popOut = "top=0,left=0,height=auto,width=auto";
    const baseTag = this.getElementTag("base");
    if (printOptions.useExistingCss) {
      styles = this.getElementTag("style");
      links = this.getElementTag("link");
    }
    if (printOptions.openNewTab) {
      popOut = "";
    }
    const printContents = this.getHtmlContents(printOptions.printSectionId);
    if (!printContents) {
      console.error(`Print section with id ${printOptions.printSectionId} not found.`);
      return;
    }
    const popupWin = window.open("", "_blank", popOut);
    if (!popupWin) {
      console.error("Could not open print window.");
      return;
    }
    popupWin.document.open();
    popupWin.document.write(`
          <html>
            <head>
              <title>${printOptions.printTitle ? printOptions.printTitle : ""}</title>
              ${baseTag}
              ${this.returnStyleValues()}
              ${this.returnStyleSheetLinkTags()}
              ${styles}
              ${links}
            </head>
            <body ${printOptions.bodyClass ? `class="${printOptions.bodyClass}"` : ""}>
              ${printContents}
              <script defer>
                function triggerPrint(event) {
                  window.removeEventListener('load', triggerPrint, false);
                  ${printOptions.previewOnly ? "" : `setTimeout(function() {
                    closeWindow(window.print());
                  }, ${printOptions.printDelay});`}
                }
                function closeWindow(){
                  ${printOptions.closeWindow ? "window.close();" : ""}
                }
                window.addEventListener('load', triggerPrint, false);
              <\/script>
            </body>
          </html>`);
    popupWin.document.close();
  }
  static ɵfac = function PrintBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrintBase)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PrintBase,
    factory: _PrintBase.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrintBase, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgxPrintService = class _NgxPrintService extends PrintBase {
  /**
   * Initiates the printing process using the provided print options.
   *
   * @param {PrintOptions} printOptions - Options for configuring the printing process.
   * @memberof NgxPrintService
   * @returns {void}
   */
  print(printOptions) {
    super.print(printOptions);
  }
  /**
   * Sets the print style for the printing process.
   *
   * @param {{ [key: string]: { [key: string]: string } }} values - A dictionary representing the print styles.
   * @memberof NgxPrintService
   * @setter
   */
  set printStyle(values) {
    super.setPrintStyle(values);
  }
  /**
   * Sets the stylesheet file for the printing process.
   *
   * @param {string} cssList - A string representing the path to the stylesheet file.
   * @memberof NgxPrintService
   * @setter
   */
  set styleSheetFile(cssList) {
    super.setStyleSheetFile(cssList);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵNgxPrintService_BaseFactory;
    return function NgxPrintService_Factory(__ngFactoryType__) {
      return (ɵNgxPrintService_BaseFactory || (ɵNgxPrintService_BaseFactory = ɵɵgetInheritedFactory(_NgxPrintService)))(__ngFactoryType__ || _NgxPrintService);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _NgxPrintService,
    factory: _NgxPrintService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PrintOptions = class {
  printSectionId = null;
  printTitle = null;
  useExistingCss = false;
  bodyClass = "";
  openNewTab = false;
  previewOnly = false;
  closeWindow = true;
  printDelay = 0;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var NgxPrintDirective = class _NgxPrintDirective extends PrintBase {
  printOptions = new PrintOptions();
  /**
   * Prevents the print dialog from opening on the window
   *
   * @memberof NgxPrintDirective
   */
  set previewOnly(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      previewOnly: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set printSectionId(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      printSectionId: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set printTitle(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      printTitle: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set useExistingCss(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      useExistingCss: value
    });
  }
  /**
   * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
   *
   * @memberof NgxPrintDirective
   */
  set printDelay(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      printDelay: value
    });
  }
  /**
   * Whether to close the window after print() returns.
   *
   */
  set closeWindow(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      closeWindow: value
    });
  }
  /**
   * Class attribute to apply to the body element.
   *
   */
  set bodyClass(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      bodyClass: value
    });
  }
  /**
   * Whether to open a new window or default to new window.
   *
   */
  set openNewTab(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      openNewTab: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set printStyle(values) {
    super.setPrintStyle(values);
  }
  /**
   * @memberof NgxPrintDirective
   * @param cssList
   */
  set styleSheetFile(cssList) {
    super.setStyleSheetFile(cssList);
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  print() {
    super.print(this.printOptions);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵNgxPrintDirective_BaseFactory;
    return function NgxPrintDirective_Factory(__ngFactoryType__) {
      return (ɵNgxPrintDirective_BaseFactory || (ɵNgxPrintDirective_BaseFactory = ɵɵgetInheritedFactory(_NgxPrintDirective)))(__ngFactoryType__ || _NgxPrintDirective);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _NgxPrintDirective,
    selectors: [["button", "ngxPrint", ""]],
    hostBindings: function NgxPrintDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function NgxPrintDirective_click_HostBindingHandler() {
          return ctx.print();
        });
      }
    },
    inputs: {
      previewOnly: "previewOnly",
      printSectionId: "printSectionId",
      printTitle: "printTitle",
      useExistingCss: "useExistingCss",
      printDelay: "printDelay",
      closeWindow: "closeWindow",
      bodyClass: "bodyClass",
      openNewTab: "openNewTab",
      printStyle: "printStyle",
      styleSheetFile: "styleSheetFile"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintDirective, [{
    type: Directive,
    args: [{
      selector: "button[ngxPrint]",
      standalone: true
    }]
  }], null, {
    previewOnly: [{
      type: Input
    }],
    printSectionId: [{
      type: Input
    }],
    printTitle: [{
      type: Input
    }],
    useExistingCss: [{
      type: Input
    }],
    printDelay: [{
      type: Input
    }],
    closeWindow: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }],
    openNewTab: [{
      type: Input
    }],
    printStyle: [{
      type: Input
    }],
    styleSheetFile: [{
      type: Input
    }],
    print: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var NgxPrintModule = class _NgxPrintModule {
  static ɵfac = function NgxPrintModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxPrintModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgxPrintModule,
    imports: [NgxPrintDirective],
    exports: [NgxPrintDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintModule, [{
    type: NgModule,
    args: [{
      imports: [NgxPrintDirective],
      exports: [NgxPrintDirective]
    }]
  }], null, null);
})();
export {
  NgxPrintDirective,
  NgxPrintModule,
  NgxPrintService,
  PrintOptions
};
//# sourceMappingURL=ngx-print.js.map
