import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-Z7YEDVQ4.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-7QXFJNL3.js";
import "./chunk-ETKEA24K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Pipe,
  TemplateRef,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BRPYXLTX.js";
import "./chunk-7J22WABE.js";
import "./chunk-5PA5UEDQ.js";
import "./chunk-ETBEKOXV.js";
import "./chunk-55JZBEKM.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ngx-bar-rating/fesm2022/ngx-bar-rating.mjs
function BarRating_div_2_2_ng_template_0_Template(rf, ctx) {
}
function BarRating_div_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_div_2_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    const fractionTemplate_r5 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", (ctx_r3.customFractionRating == null ? null : ctx_r3.customFractionRating.template) || fractionTemplate_r5);
  }
}
function BarRating_div_2_3_ng_template_0_Template(rf, ctx) {
}
function BarRating_div_2_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_div_2_3_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    const inactiveTemplate_r6 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", (ctx_r3.customInActiveRating == null ? null : ctx_r3.customInActiveRating.template) || inactiveTemplate_r6);
  }
}
function BarRating_div_2_4_ng_template_0_Template(rf, ctx) {
}
function BarRating_div_2_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_div_2_4_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    const activeTemplate_r7 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", (ctx_r3.customActiveRating == null ? null : ctx_r3.customActiveRating.template) || activeTemplate_r7);
  }
}
function BarRating_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function BarRating_div_2_Template_div_click_0_listener($event) {
      const unit_r3 = ɵɵrestoreView(_r2).$implicit;
      return ɵɵresetView(unit_r3.click($event));
    })("mouseenter", function BarRating_div_2_Template_div_mouseenter_0_listener() {
      const unit_r3 = ɵɵrestoreView(_r2).$implicit;
      return ɵɵresetView(unit_r3.enter());
    });
    ɵɵelementContainerStart(1, 7);
    ɵɵtemplate(2, BarRating_div_2_2_Template, 1, 1, null, 8)(3, BarRating_div_2_3_Template, 1, 1, null, 8)(4, BarRating_div_2_4_Template, 1, 1, null, 9);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const unit_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngSwitch", unit_r3.state);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r3.unitState.fraction);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r3.unitState.inactive);
  }
}
function BarRating_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "rateTitle");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind2(2, 1, ctx_r3.nextRate + 1, ctx_r3.titles));
  }
}
function BarRating_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
}
function BarRating_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 13);
  }
}
function BarRating_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
  }
}
var ActiveRating = class _ActiveRating {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function ActiveRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActiveRating)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ActiveRating,
      selectors: [["", "ratingActive", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveRating, [{
    type: Directive,
    args: [{
      selector: "[ratingActive]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var InactiveRating = class _InactiveRating {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function InactiveRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InactiveRating)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _InactiveRating,
      selectors: [["", "ratingInactive", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InactiveRating, [{
    type: Directive,
    args: [{
      selector: "[ratingInactive]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var FractionRating = class _FractionRating {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function FractionRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FractionRating)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FractionRating,
      selectors: [["", "ratingFraction", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FractionRating, [{
    type: Directive,
    args: [{
      selector: "[ratingFraction]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var BarRatingPipe = class _BarRatingPipe {
  transform(value = 0, titles) {
    return titles[value] || value;
  }
  static {
    this.ɵfac = function BarRatingPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRatingPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "rateTitle",
      type: _BarRatingPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRatingPipe, [{
    type: Pipe,
    args: [{
      name: "rateTitle"
    }]
  }], null, null);
})();
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BarRating),
  multi: true
};
var RATING_VALUE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BarRating),
  multi: true
};
var BarRatingUnitState;
(function(BarRatingUnitState2) {
  BarRatingUnitState2["active"] = "active";
  BarRatingUnitState2["inactive"] = "inactive";
  BarRatingUnitState2["selected"] = "selected";
  BarRatingUnitState2["fraction"] = "fraction";
})(BarRatingUnitState || (BarRatingUnitState = {}));
var BarRating = class _BarRating {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.unitState = BarRatingUnitState;
    this.contexts = [];
    this.max = 5;
    this.readOnly = false;
    this.theme = "default";
    this.showText = false;
    this.titles = [];
    this.required = false;
    this.hover = new EventEmitter();
    this.leave = new EventEmitter();
    this.rateChange = new EventEmitter(true);
    this.barClick = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.rate) {
      this.update(this.rate);
    }
  }
  ngOnInit() {
    this.contexts = Array.from({
      length: this.max
    }, (context, i) => ({
      state: BarRatingUnitState.inactive,
      click: () => this.handleClick(i + 1),
      enter: () => this.handleEnter(i + 1)
    }));
    this.updateState(this.rate);
  }
  update(newRate, internalChange = true) {
    if (!this.readOnly && !this.disabled && this.rate !== newRate) {
      this.rate = newRate;
      this.rateChange.emit(this.rate);
    }
    if (internalChange) {
      this.onChange(this.rate);
      this.onTouched();
    }
    this.updateState(this.rate);
  }
  /** Reset rate value */
  reset() {
    this.leave.emit(this.nextRate);
    this.updateState(this.rate);
  }
  updateState(nextValue) {
    this.nextRate = nextValue - 1;
    this.contexts = Array.from({
      length: this.max
    }, (context, index) => ({
      state: index + 1 <= nextValue ? BarRatingUnitState.selected : (index + 1 === Math.round(nextValue) && nextValue % 1) >= 0.5 ? BarRatingUnitState.fraction : BarRatingUnitState.inactive,
      click: () => this.handleClick(index),
      enter: () => this.handleEnter(index)
    }));
  }
  handleClick(value) {
    this.update(value + 1);
  }
  handleEnter(index) {
    if (!this.disabled && !this.readOnly) {
      this.contexts.map((context, i) => {
        context.state = i <= index ? BarRatingUnitState.active : BarRatingUnitState.inactive;
      });
      this.nextRate = index;
      this.hover.emit(index);
    }
  }
  /** This is the initial value set to the component */
  writeValue(value) {
    this.update(value, false);
    this.changeDetectorRef.markForCheck();
  }
  validate(c) {
    return this.required && !c.value ? {
      required: true
    } : null;
  }
  onChange(_) {
  }
  onTouched() {
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  static {
    this.ɵfac = function BarRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRating)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BarRating,
      selectors: [["bar-rating"]],
      contentQueries: function BarRating_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, ActiveRating, 5);
          ɵɵcontentQuery(dirIndex, InactiveRating, 5);
          ɵɵcontentQuery(dirIndex, FractionRating, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customActiveRating = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customInActiveRating = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customFractionRating = _t.first);
        }
      },
      inputs: {
        rate: "rate",
        max: "max",
        readOnly: "readOnly",
        theme: "theme",
        showText: "showText",
        titles: "titles",
        required: "required"
      },
      outputs: {
        hover: "hover",
        leave: "leave",
        rateChange: "rateChange",
        barClick: "barClick"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR]), ɵɵNgOnChangesFeature],
      decls: 10,
      vars: 9,
      consts: [["fractionTemplate", ""], ["activeTemplate", ""], ["inactiveTemplate", ""], [1, "br-units", 3, "mouseleave"], ["class", "br-unit", 3, "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "br-text", 4, "ngIf"], [1, "br-unit", 3, "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "br-text"], [1, "br-unit-inner", "br-fraction"], [1, "br-unit-inner", "br-active"], [1, "br-unit-inner", "br-inactive"]],
      template: function BarRating_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div")(1, "div", 3);
          ɵɵlistener("mouseleave", function BarRating_Template_div_mouseleave_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.reset());
          });
          ɵɵtemplate(2, BarRating_div_2_Template, 5, 3, "div", 4);
          ɵɵelementEnd();
          ɵɵtemplate(3, BarRating_div_3_Template, 3, 4, "div", 5);
          ɵɵelementEnd();
          ɵɵtemplate(4, BarRating_ng_template_4_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(6, BarRating_ng_template_6_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(8, BarRating_ng_template_8_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵclassMapInterpolate1("br br-", ctx.customInActiveRating ? "" : ctx.theme, "");
          ɵɵclassProp("br-readonly", ctx.readOnly)("br-disabled", ctx.disabled);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.contexts);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showText);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, BarRatingPipe],
      styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{--br-font-size: 16px;--br-gap: 0;--br-active-color: #EDB867;--br-inactive-color: #D2D2D2}.br[_ngcontent-%COMP%]{position:relative}.br-units[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;gap:var(--br-gap)}.br-unit[_ngcontent-%COMP%]{font-size:var(--br-font-size);cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-unit-inner[_ngcontent-%COMP%]{position:relative}.br-readonly[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%], .br-disabled[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%]{cursor:default}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRating, [{
    type: Component,
    args: [{
      selector: "bar-rating",
      providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="br br-{{ customInActiveRating ? '' : theme }}"\r
     [class.br-readonly]="readOnly"\r
     [class.br-disabled]="disabled">\r
\r
  <div class="br-units" (mouseleave)="reset()">\r
\r
    <div *ngFor="let unit of contexts"\r
         class="br-unit"\r
         (click)="unit.click($event)"\r
         (mouseenter)="unit.enter()">\r
\r
      <ng-container [ngSwitch]="unit.state">\r
        <ng-template *ngSwitchCase="unitState.fraction" [ngTemplateOutlet]="customFractionRating?.template || fractionTemplate"></ng-template>\r
        <ng-template *ngSwitchCase="unitState.inactive" [ngTemplateOutlet]="customInActiveRating?.template || inactiveTemplate"></ng-template>\r
        <ng-template *ngSwitchDefault [ngTemplateOutlet]="customActiveRating?.template || activeTemplate"></ng-template>\r
      </ng-container>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="showText" class="br-text">{{ nextRate + 1 | rateTitle: titles }}</div>\r
</div>\r
\r
<ng-template #fractionTemplate>\r
  <div class="br-unit-inner br-fraction"></div>\r
</ng-template>\r
\r
<ng-template #activeTemplate>\r
  <div class="br-unit-inner br-active"></div>\r
</ng-template>\r
\r
<ng-template #inactiveTemplate>\r
  <div class="br-unit-inner br-inactive"></div>\r
</ng-template>\r
`,
      styles: ["*{box-sizing:border-box}:host{--br-font-size: 16px;--br-gap: 0;--br-active-color: #EDB867;--br-inactive-color: #D2D2D2}.br{position:relative}.br-units{display:flex;flex-wrap:nowrap;gap:var(--br-gap)}.br-unit{font-size:var(--br-font-size);cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-unit-inner{position:relative}.br-readonly .br-unit,.br-disabled .br-unit{cursor:default}\n"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    rate: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    showText: [{
      type: Input
    }],
    titles: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    hover: [{
      type: Output
    }],
    leave: [{
      type: Output
    }],
    rateChange: [{
      type: Output
    }],
    barClick: [{
      type: Output
    }],
    customActiveRating: [{
      type: ContentChild,
      args: [ActiveRating]
    }],
    customInActiveRating: [{
      type: ContentChild,
      args: [InactiveRating]
    }],
    customFractionRating: [{
      type: ContentChild,
      args: [FractionRating]
    }]
  });
})();
var BarRatingModule = class _BarRatingModule {
  static {
    this.ɵfac = function BarRatingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRatingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BarRatingModule,
      declarations: [BarRating, BarRatingPipe, ActiveRating, InactiveRating, FractionRating],
      imports: [CommonModule, FormsModule],
      exports: [BarRating, ActiveRating, InactiveRating, FractionRating]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRatingModule, [{
    type: NgModule,
    args: [{
      declarations: [BarRating, BarRatingPipe, ActiveRating, InactiveRating, FractionRating],
      imports: [CommonModule, FormsModule],
      exports: [BarRating, ActiveRating, InactiveRating, FractionRating]
    }]
  }], null, null);
})();
export {
  ActiveRating,
  BarRating,
  BarRatingModule,
  FractionRating,
  InactiveRating
};
//# sourceMappingURL=ngx-bar-rating.js.map
