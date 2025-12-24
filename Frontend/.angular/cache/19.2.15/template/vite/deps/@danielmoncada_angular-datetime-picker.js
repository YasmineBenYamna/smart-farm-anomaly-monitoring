import {
  A11yModule,
  CdkMonitorFocus,
  CdkTrapFocus,
  FocusTrapFactory
} from "./chunk-2YRCPANF.js";
import {
  PlatformModule,
  coerceBooleanProperty
} from "./chunk-7QQUC4UN.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  DOWN_ARROW,
  END,
  ENTER,
  ESCAPE,
  HOME,
  LEFT_ARROW,
  NoopScrollStrategy,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  PAGE_DOWN,
  PAGE_UP,
  PortalModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW
} from "./chunk-GUBDS73V.js";
import {
  Platform,
  coerceArray,
  coerceNumberProperty
} from "./chunk-4Q2KMF5B.js";
import "./chunk-BNQOZS2X.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators
} from "./chunk-Z7YEDVQ4.js";
import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-SZJPLAKF.js";
import {
  CommonModule,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  getLocaleFirstDayOfWeek
} from "./chunk-7QXFJNL3.js";
import {
  DOCUMENT
} from "./chunk-ETKEA24K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  Pipe,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BRPYXLTX.js";
import {
  defer,
  merge
} from "./chunk-7J22WABE.js";
import "./chunk-5PA5UEDQ.js";
import {
  Subject,
  Subscription,
  debounceTime,
  filter,
  of,
  startWith,
  take
} from "./chunk-ETBEKOXV.js";
import "./chunk-55JZBEKM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@danielmoncada/angular-datetime-picker/fesm2022/danielmoncada-angular-datetime-picker.mjs
var _c0 = ["owl-date-time-calendar-body", ""];
var _c1 = (a0, a1, a2) => ({
  "owl-dt-calendar-cell-out": a0,
  "owl-dt-calendar-cell-today": a1,
  "owl-dt-calendar-cell-selected": a2
});
function OwlCalendarBodyComponent_tr_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 3);
    ɵɵlistener("click", function OwlCalendarBodyComponent_tr_0_td_1_Template_td_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectCell(item_r2));
    });
    ɵɵelementStart(1, "span", 4);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const colIndex_r4 = ctx.index;
    const rowIndex_r5 = ɵɵnextContext().index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("owl-dt-calendar-cell ", item_r2.cellClass, "");
    ɵɵstyleProp("width", 100 / ctx_r2.numCols, "%")("padding-top", 50 * ctx_r2.cellRatio / ctx_r2.numCols, "%")("padding-bottom", 50 * ctx_r2.cellRatio / ctx_r2.numCols, "%");
    ɵɵclassProp("owl-dt-calendar-cell-active", ctx_r2.isActiveCell(rowIndex_r5, colIndex_r4))("owl-dt-calendar-cell-disabled", !item_r2.enabled)("owl-dt-calendar-cell-in-range", ctx_r2.isInRange(item_r2.value))("owl-dt-calendar-cell-range-from", ctx_r2.isRangeFrom(item_r2.value))("owl-dt-calendar-cell-range-to", ctx_r2.isRangeTo(item_r2.value));
    ɵɵproperty("tabindex", ctx_r2.isActiveCell(rowIndex_r5, colIndex_r4) ? 0 : -1);
    ɵɵattribute("aria-label", item_r2.ariaLabel)("aria-disabled", !item_r2.enabled || null)("aria-current", item_r2.value === ctx_r2.todayValue ? "date" : null)("aria-selected", ctx_r2.isSelected(item_r2.value));
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction3(26, _c1, item_r2.out, item_r2.value === ctx_r2.todayValue, ctx_r2.isSelected(item_r2.value)));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2.displayValue, " ");
  }
}
function OwlCalendarBodyComponent_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 1);
    ɵɵtemplate(1, OwlCalendarBodyComponent_tr_0_td_1_Template, 3, 30, "td", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", row_r6);
  }
}
var _c2 = (a0) => ({
  "owl-calendar-weeks": a0
});
function OwlMonthViewComponent_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li")(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const week_r1 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(week_r1);
  }
}
function OwlMonthViewComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 7);
    ɵɵtemplate(1, OwlMonthViewComponent_ul_0_li_1_Template, 3, 1, "li", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.weekNumbers);
  }
}
function OwlMonthViewComponent_th_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 9)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const weekday_r3 = ctx.$implicit;
    ɵɵattribute("aria-label", weekday_r3.long);
    ɵɵadvance(2);
    ɵɵtextInterpolate(weekday_r3.short);
  }
}
function OwlCalendarComponent_owl_date_time_month_view_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "owl-date-time-month-view", 16);
    ɵɵlistener("pickerMomentChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_pickerMomentChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handlePickerMomentChange($event));
    })("selectedChange", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.dateSelected($event));
    })("userSelection", function OwlCalendarComponent_owl_date_time_month_view_18_Template_owl_date_time_month_view_userSelection_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.userSelected());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("pickerMoment", ctx_r1.pickerMoment)("firstDayOfWeek", ctx_r1.firstDayOfWeek)("selected", ctx_r1.selected)("selecteds", ctx_r1.selecteds)("selectMode", ctx_r1.selectMode)("minDate", ctx_r1.minDate)("showCalendarWeeks", ctx_r1.showCalendarWeeks)("maxDate", ctx_r1.maxDate)("dateFilter", ctx_r1.dateFilter)("hideOtherMonths", ctx_r1.hideOtherMonths);
  }
}
function OwlCalendarComponent_owl_date_time_year_view_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "owl-date-time-year-view", 17);
    ɵɵlistener("keyboardEnter", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_keyboardEnter_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.focusActiveCell());
    })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_pickerMomentChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handlePickerMomentChange($event));
    })("monthSelected", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_monthSelected_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selectMonthInYearView($event));
    })("change", function OwlCalendarComponent_owl_date_time_year_view_19_Template_owl_date_time_year_view_change_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.goToDateInView($event, ctx_r1.DateView.MONTH));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("pickerMoment", ctx_r1.pickerMoment)("selected", ctx_r1.selected)("selecteds", ctx_r1.selecteds)("selectMode", ctx_r1.selectMode)("minDate", ctx_r1.minDate)("maxDate", ctx_r1.maxDate)("dateFilter", ctx_r1.dateFilter);
  }
}
function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "owl-date-time-multi-year-view", 18);
    ɵɵlistener("keyboardEnter", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_keyboardEnter_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.focusActiveCell());
    })("pickerMomentChange", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_pickerMomentChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handlePickerMomentChange($event));
    })("yearSelected", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_yearSelected_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selectYearInMultiYearView($event));
    })("change", function OwlCalendarComponent_owl_date_time_multi_year_view_20_Template_owl_date_time_multi_year_view_change_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.goToDateInView($event, ctx_r1.DateView.YEAR));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("pickerMoment", ctx_r1.pickerMoment)("selected", ctx_r1.selected)("selecteds", ctx_r1.selecteds)("selectMode", ctx_r1.selectMode)("minDate", ctx_r1.minDate)("maxDate", ctx_r1.maxDate)("dateFilter", ctx_r1.dateFilter);
  }
}
var _c3 = ["valueInput"];
function OwlTimerBoxComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
}
function OwlTimerComponent_owl_date_time_timer_box_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "owl-date-time-timer-box", 1);
    ɵɵlistener("inputChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_inputChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setSecondValue($event));
    })("valueChange", function OwlTimerComponent_owl_date_time_timer_box_2_Template_owl_date_time_timer_box_valueChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setSecondValue($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showDivider", true)("upBtnAriaLabel", ctx_r1.upSecondButtonLabel)("downBtnAriaLabel", ctx_r1.downSecondButtonLabel)("upBtnDisabled", !ctx_r1.upSecondEnabled())("downBtnDisabled", !ctx_r1.downSecondEnabled())("value", ctx_r1.secondValue)("min", 0)("max", 59)("step", ctx_r1.stepSecond)("inputLabel", "Second");
  }
}
function OwlTimerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "button", 5);
    ɵɵlistener("click", function OwlTimerComponent_div_3_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setMeridiem($event));
    });
    ɵɵelementStart(2, "span", 6);
    ɵɵtext(3);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.hour12ButtonLabel, " ");
  }
}
var _c4 = (a0) => ({
  "owl-dt-container-info-active": a0
});
function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "owl-date-time-calendar", 7);
    ɵɵtwoWayListener("pickerMomentChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_pickerMomentChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.pickerMoment, $event) || (ctx_r1.pickerMoment = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("yearSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_yearSelected_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.picker.selectYear($event));
    })("monthSelected", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_monthSelected_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.picker.selectMonth($event));
    })("dateClicked", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_dateClicked_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.picker.selectDate($event));
    })("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template_owl_date_time_calendar_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.dateSelected($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("firstDayOfWeek", ctx_r1.picker.firstDayOfWeek);
    ɵɵtwoWayProperty("pickerMoment", ctx_r1.pickerMoment);
    ɵɵproperty("selected", ctx_r1.picker.selected)("selecteds", ctx_r1.picker.selecteds)("selectMode", ctx_r1.picker.selectMode)("minDate", ctx_r1.picker.minDateTime)("maxDate", ctx_r1.picker.maxDateTime)("dateFilter", ctx_r1.picker.dateTimeFilter)("startView", ctx_r1.picker.startView)("yearOnly", ctx_r1.picker.yearOnly)("showCalendarWeeks", ctx_r1.picker.showCalendarWeeks)("multiyearOnly", ctx_r1.picker.multiyearOnly)("hideOtherMonths", ctx_r1.picker.hideOtherMonths);
  }
}
function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "owl-date-time-timer", 8);
    ɵɵlistener("selectedChange", function OwlDateTimeContainerComponent_owl_date_time_timer_2_Template_owl_date_time_timer_selectedChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.timeSelected($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("pickerMoment", ctx_r1.pickerMoment)("minDateTime", ctx_r1.picker.minDateTime)("maxDateTime", ctx_r1.picker.maxDateTime)("showSecondsTimer", ctx_r1.picker.showSecondsTimer)("hour12Timer", ctx_r1.picker.hour12Timer)("stepHour", ctx_r1.picker.stepHour)("stepMinute", ctx_r1.picker.stepMinute)("stepSecond", ctx_r1.picker.stepSecond);
  }
}
function OwlDateTimeContainerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "div", 10, 0);
    ɵɵlistener("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleClickOnInfoGroup($event, 0));
    })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_1_listener($event) {
      ɵɵrestoreView(_r4);
      const to_r5 = ɵɵreference(9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleKeydownOnInfoGroup($event, to_r5, 0));
    });
    ɵɵelementStart(3, "span", 11)(4, "span", 12);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 13);
    ɵɵtext(7);
    ɵɵelementEnd()()();
    ɵɵelementStart(8, "div", 14, 1);
    ɵɵlistener("click", function OwlDateTimeContainerComponent_div_3_Template_div_click_8_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleClickOnInfoGroup($event, 1));
    })("keydown", function OwlDateTimeContainerComponent_div_3_Template_div_keydown_8_listener($event) {
      ɵɵrestoreView(_r4);
      const from_r6 = ɵɵreference(2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleKeydownOnInfoGroup($event, from_r6, 1));
    });
    ɵɵelementStart(10, "span", 11)(11, "span", 12);
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelementStart(13, "span", 13);
    ɵɵtext(14);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("tabindex", ctx_r1.activeSelectedIndex === 0 ? 0 : -1)("ngClass", ɵɵpureFunction1(10, _c4, ctx_r1.activeSelectedIndex === 0));
    ɵɵattribute("aria-checked", ctx_r1.activeSelectedIndex === 0);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ctx_r1.fromLabel, ":");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.fromFormattedValue);
    ɵɵadvance();
    ɵɵproperty("tabindex", ctx_r1.activeSelectedIndex === 1 ? 0 : -1)("ngClass", ɵɵpureFunction1(12, _c4, ctx_r1.activeSelectedIndex === 1));
    ɵɵattribute("aria-checked", ctx_r1.activeSelectedIndex === 1);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ctx_r1.toLabel, ":");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.toFormattedValue);
  }
}
function OwlDateTimeContainerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "button", 16);
    ɵɵlistener("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCancelClicked($event));
    });
    ɵɵelementStart(2, "span", 17);
    ɵɵtext(3);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "button", 16);
    ɵɵlistener("click", function OwlDateTimeContainerComponent_div_4_Template_button_click_4_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSetClicked($event));
    });
    ɵɵelementStart(5, "span", 17);
    ɵɵtext(6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.cancelLabel, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.setLabel, " ");
  }
}
function OwlDialogContainerComponent_ng_template_0_Template(rf, ctx) {
}
var OwlDateTimeTriggerDirective = class _OwlDateTimeTriggerDirective {
  get disabled() {
    return this._disabled === void 0 ? this.dtPicker.disabled : !!this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  get owlDTTriggerDisabledClass() {
    return this.disabled;
  }
  constructor(changeDetector) {
    this.changeDetector = changeDetector;
    this.stateChanges = Subscription.EMPTY;
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.datepicker) {
      this.watchStateChanges();
    }
  }
  ngAfterContentInit() {
    this.watchStateChanges();
  }
  ngOnDestroy() {
    this.stateChanges.unsubscribe();
  }
  handleClickOnHost(event2) {
    if (this.dtPicker) {
      this.dtPicker.open();
      event2.stopPropagation();
    }
  }
  watchStateChanges() {
    this.stateChanges.unsubscribe();
    const inputDisabled = this.dtPicker && this.dtPicker.dtInput ? this.dtPicker.dtInput.disabledChange : of();
    const pickerDisabled = this.dtPicker ? this.dtPicker.disabledChange : of();
    this.stateChanges = merge([pickerDisabled, inputDisabled]).subscribe(() => {
      this.changeDetector.markForCheck();
    });
  }
  static {
    this.ɵfac = function OwlDateTimeTriggerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTimeTriggerDirective)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _OwlDateTimeTriggerDirective,
      selectors: [["", "owlDateTimeTrigger", ""]],
      hostVars: 2,
      hostBindings: function OwlDateTimeTriggerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function OwlDateTimeTriggerDirective_click_HostBindingHandler($event) {
            return ctx.handleClickOnHost($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("owl-dt-trigger-disabled", ctx.owlDTTriggerDisabledClass);
        }
      },
      inputs: {
        dtPicker: [0, "owlDateTimeTrigger", "dtPicker"],
        disabled: "disabled"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTimeTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "[owlDateTimeTrigger]",
      standalone: false,
      host: {
        "(click)": "handleClickOnHost($event)",
        "[class.owl-dt-trigger-disabled]": "owlDTTriggerDisabledClass"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    dtPicker: [{
      type: Input,
      args: ["owlDateTimeTrigger"]
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var OWL_DATE_TIME_FORMATS = new InjectionToken("OWL_DATE_TIME_FORMATS");
var OWL_DATE_TIME_LOCALE = new InjectionToken("OWL_DATE_TIME_LOCALE", {
  providedIn: "root",
  factory: OWL_DATE_TIME_LOCALE_FACTORY
});
function OWL_DATE_TIME_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var OWL_DATE_TIME_LOCALE_PROVIDER = {
  provide: OWL_DATE_TIME_LOCALE,
  useExisting: LOCALE_ID
};
var DateTimeAdapter = class {
  constructor() {
    this._localeChanges = new Subject();
    this.firstMonthOfTheYear = 0;
    this.firstDayOfTheWeek = 0;
    this.millisecondsInDay = 864e5;
    this.milliseondsInMinute = 6e4;
  }
  get localeChanges() {
    return this._localeChanges;
  }
  /**
   * Compare two given dates
   * 1 if the first date is after the second,
   * -1 if the first date is before the second
   * 0 if dates are equal.
   * */
  compare(first, second) {
    if (!this.isValid(first) || !this.isValid(second)) {
      throw Error("JSNativeDate: Cannot compare invalid dates.");
    }
    const dateFirst = this.clone(first);
    const dateSecond = this.clone(second);
    const diff = this.getTime(dateFirst) - this.getTime(dateSecond);
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
    } else {
      return diff;
    }
  }
  /**
   * Check if two given dates are in the same year
   * 1 if the first date's year is after the second,
   * -1 if the first date's year is before the second
   * 0 if two given dates are in the same year
   * */
  compareYear(first, second) {
    if (!this.isValid(first) || !this.isValid(second)) {
      throw Error("JSNativeDate: Cannot compare invalid dates.");
    }
    const yearLeft = this.getYear(first);
    const yearRight = this.getYear(second);
    const diff = yearLeft - yearRight;
    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1;
    } else {
      return 0;
    }
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next(locale);
  }
  /**
  * Get the locale used for all dates.
  * */
  getLocale() {
    return this.locale;
  }
  /**
   * Clamp the given date between min and max dates.
   */
  clampDate(date, min, max) {
    if (min && this.compare(date, min) < 0) {
      return min;
    }
    if (max && this.compare(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var nextUniqueId = 0;
var DateView;
(function(DateView2) {
  DateView2["MONTH"] = "month";
  DateView2["YEAR"] = "year";
  DateView2["MULTI_YEARS"] = "multi-years";
})(DateView || (DateView = {}));
var OwlDateTime = class _OwlDateTime {
  get showSecondsTimer() {
    return this._showSecondsTimer;
  }
  set showSecondsTimer(val) {
    this._showSecondsTimer = coerceBooleanProperty(val);
  }
  get hour12Timer() {
    return this._hour12Timer;
  }
  set hour12Timer(val) {
    this._hour12Timer = coerceBooleanProperty(val);
  }
  get stepHour() {
    return this._stepHour;
  }
  set stepHour(val) {
    this._stepHour = coerceNumberProperty(val, 1);
  }
  get stepMinute() {
    return this._stepMinute;
  }
  set stepMinute(val) {
    this._stepMinute = coerceNumberProperty(val, 1);
  }
  get stepSecond() {
    return this._stepSecond;
  }
  set stepSecond(val) {
    this._stepSecond = coerceNumberProperty(val, 1);
  }
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(value) {
    value = coerceNumberProperty(value);
    if (value > 6 || value < 0) {
      this._firstDayOfWeek = void 0;
    } else {
      this._firstDayOfWeek = value;
    }
  }
  get hideOtherMonths() {
    return this._hideOtherMonths;
  }
  set hideOtherMonths(val) {
    this._hideOtherMonths = coerceBooleanProperty(val);
  }
  get id() {
    return this._id;
  }
  get formatString() {
    return this.pickerType === "both" ? this.dateTimeFormats.fullPickerInput : this.pickerType === "calendar" ? this.dateTimeFormats.datePickerInput : this.dateTimeFormats.timePickerInput;
  }
  get disabled() {
    return false;
  }
  constructor(dateTimeAdapter, dateTimeFormats) {
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this._showSecondsTimer = false;
    this._hour12Timer = false;
    this.startView = DateView.MONTH;
    this.showCalendarWeeks = false;
    this.yearOnly = false;
    this.multiyearOnly = false;
    this._stepHour = 1;
    this._stepMinute = 1;
    this._stepSecond = 1;
    this._hideOtherMonths = false;
    this.dateTimeChecker = (dateTime) => {
      return !!dateTime && (!this.dateTimeFilter || this.dateTimeFilter(dateTime)) && (!this.minDateTime || this.dateTimeAdapter.compare(dateTime, this.minDateTime) >= 0) && (!this.maxDateTime || this.dateTimeAdapter.compare(dateTime, this.maxDateTime) <= 0);
    };
    if (!this.dateTimeAdapter) {
      throw Error(`OwlDateTimePicker: No provider found for DateTimeAdapter. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.`);
    }
    if (!this.dateTimeFormats) {
      throw Error(`OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.`);
    }
    this._id = `owl-dt-picker-${nextUniqueId++}`;
  }
  getValidDate(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  }
  static {
    this.ɵfac = function OwlDateTime_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTime)(ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _OwlDateTime,
      inputs: {
        showSecondsTimer: "showSecondsTimer",
        hour12Timer: "hour12Timer",
        startView: "startView",
        showCalendarWeeks: "showCalendarWeeks",
        yearOnly: "yearOnly",
        multiyearOnly: "multiyearOnly",
        stepHour: "stepHour",
        stepMinute: "stepMinute",
        stepSecond: "stepSecond",
        firstDayOfWeek: "firstDayOfWeek",
        hideOtherMonths: "hideOtherMonths"
      },
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTime, [{
    type: Directive
  }], () => [{
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_FORMATS]
    }]
  }], {
    showSecondsTimer: [{
      type: Input
    }],
    hour12Timer: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    showCalendarWeeks: [{
      type: Input
    }],
    yearOnly: [{
      type: Input
    }],
    multiyearOnly: [{
      type: Input
    }],
    stepHour: [{
      type: Input
    }],
    stepMinute: [{
      type: Input
    }],
    stepSecond: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    hideOtherMonths: [{
      type: Input
    }]
  });
})();
var OwlDateTimeIntl = class _OwlDateTimeIntl {
  constructor() {
    this.changes = new Subject();
    this.upSecondLabel = "Add a second";
    this.downSecondLabel = "Minus a second";
    this.upMinuteLabel = "Add a minute";
    this.downMinuteLabel = "Minus a minute";
    this.upHourLabel = "Add a hour";
    this.downHourLabel = "Minus a hour";
    this.prevMonthLabel = "Previous month";
    this.nextMonthLabel = "Next month";
    this.prevYearLabel = "Previous year";
    this.nextYearLabel = "Next year";
    this.prevMultiYearLabel = "Previous 21 years";
    this.nextMultiYearLabel = "Next 21 years";
    this.switchToMonthViewLabel = "Change to month view";
    this.switchToMultiYearViewLabel = "Choose month and year";
    this.cancelBtnLabel = "Cancel";
    this.setBtnLabel = "Set";
    this.rangeFromLabel = "From";
    this.rangeToLabel = "To";
    this.hour12AMLabel = "AM";
    this.hour12PMLabel = "PM";
  }
  static {
    this.ɵfac = function OwlDateTimeIntl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTimeIntl)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OwlDateTimeIntl,
      factory: _OwlDateTimeIntl.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTimeIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CalendarCell = class {
  constructor(value, displayValue, ariaLabel, enabled, out = false, cellClass = "") {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.out = out;
    this.cellClass = cellClass;
  }
};
var OwlCalendarBodyComponent = class _OwlCalendarBodyComponent {
  get owlDTCalendarBodyClass() {
    return true;
  }
  get isInSingleMode() {
    return this.selectMode === "single";
  }
  get isInRangeMode() {
    return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
  }
  constructor(elmRef, ngZone) {
    this.elmRef = elmRef;
    this.ngZone = ngZone;
    this.activeCell = 0;
    this.numCols = 7;
    this.cellRatio = 1;
    this.select = new EventEmitter();
  }
  ngOnInit() {
  }
  selectCell(cell) {
    this.select.emit(cell);
  }
  isActiveCell(rowIndex, colIndex) {
    const cellNumber = rowIndex * this.numCols + colIndex;
    return cellNumber === this.activeCell;
  }
  /**
   * Check if the cell is selected
   */
  isSelected(value) {
    if (!this.selectedValues || this.selectedValues.length === 0) {
      return false;
    }
    if (this.isInSingleMode) {
      return value === this.selectedValues[0];
    }
    if (this.isInRangeMode) {
      const fromValue = this.selectedValues[0];
      const toValue = this.selectedValues[1];
      return value === fromValue || value === toValue;
    }
  }
  /**
   * Check if the cell in the range
   * */
  isInRange(value) {
    if (this.isInRangeMode) {
      const fromValue = this.selectedValues[0];
      const toValue = this.selectedValues[1];
      if (fromValue !== null && toValue !== null) {
        return value >= fromValue && value <= toValue;
      } else {
        return value === fromValue || value === toValue;
      }
    }
  }
  /**
   * Check if the cell is the range from
   * */
  isRangeFrom(value) {
    if (this.isInRangeMode) {
      const fromValue = this.selectedValues[0];
      return fromValue !== null && value === fromValue;
    }
  }
  /**
   * Check if the cell is the range to
   * */
  isRangeTo(value) {
    if (this.isInRangeMode) {
      const toValue = this.selectedValues[1];
      return toValue !== null && value === toValue;
    }
  }
  /**
   * Focus to a active cell
   * */
  focusActiveCell() {
    this.ngZone.runOutsideAngular(() => {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.elmRef.nativeElement.querySelector(".owl-dt-calendar-cell-active").focus();
      });
    });
  }
  static {
    this.ɵfac = function OwlCalendarBodyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlCalendarBodyComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlCalendarBodyComponent,
      selectors: [["", "owl-date-time-calendar-body", ""]],
      hostVars: 2,
      hostBindings: function OwlCalendarBodyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("owl-dt-calendar-body", ctx.owlDTCalendarBodyClass);
        }
      },
      inputs: {
        activeCell: "activeCell",
        rows: "rows",
        numCols: "numCols",
        cellRatio: "cellRatio",
        todayValue: "todayValue",
        selectedValues: "selectedValues",
        selectMode: "selectMode"
      },
      outputs: {
        select: "select"
      },
      exportAs: ["owlDateTimeCalendarBody"],
      standalone: false,
      attrs: _c0,
      decls: 1,
      vars: 1,
      consts: [["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], [3, "class", "tabindex", "owl-dt-calendar-cell-active", "owl-dt-calendar-cell-disabled", "owl-dt-calendar-cell-in-range", "owl-dt-calendar-cell-range-from", "owl-dt-calendar-cell-range-to", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], [3, "click", "tabindex"], [1, "owl-dt-calendar-cell-content", 3, "ngClass"]],
      template: function OwlCalendarBodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OwlCalendarBodyComponent_tr_0_Template, 2, 1, "tr", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.rows);
        }
      },
      dependencies: [NgClass, NgForOf],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlCalendarBodyComponent, [{
    type: Component,
    args: [{
      selector: "[owl-date-time-calendar-body]",
      exportAs: "owlDateTimeCalendarBody",
      host: {
        "[class.owl-dt-calendar-body]": "owlDTCalendarBodyClass"
      },
      preserveWhitespaces: false,
      standalone: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<tr *ngFor="let row of rows; let rowIndex = index" role="row">
    <td *ngFor="let item of row; let colIndex = index"
        class="owl-dt-calendar-cell {{item.cellClass}}"
        [tabindex]="isActiveCell(rowIndex, colIndex) ? 0 : -1"
        [class.owl-dt-calendar-cell-active]="isActiveCell(rowIndex, colIndex)"
        [class.owl-dt-calendar-cell-disabled]="!item.enabled"
        [class.owl-dt-calendar-cell-in-range]="isInRange(item.value)"
        [class.owl-dt-calendar-cell-range-from]="isRangeFrom(item.value)"
        [class.owl-dt-calendar-cell-range-to]="isRangeTo(item.value)"
        [attr.aria-label]="item.ariaLabel"
        [attr.aria-disabled]="!item.enabled || null"
        [attr.aria-current]="item.value === todayValue ? 'date' : null"
        [attr.aria-selected]="isSelected(item.value)"
        [style.width.%]="100 / numCols"
        [style.paddingTop.%]="50 * cellRatio / numCols"
        [style.paddingBottom.%]="50 * cellRatio / numCols"
        (click)="selectCell(item)">
        <span class="owl-dt-calendar-cell-content"
              [ngClass]="{
                'owl-dt-calendar-cell-out': item.out,
                'owl-dt-calendar-cell-today': item.value === todayValue,
                'owl-dt-calendar-cell-selected': isSelected(item.value)
              }">
            {{item.displayValue}}
        </span>
    </td>
</tr>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    activeCell: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    numCols: [{
      type: Input
    }],
    cellRatio: [{
      type: Input
    }],
    todayValue: [{
      type: Input
    }],
    selectedValues: [{
      type: Input
    }],
    selectMode: [{
      type: Input
    }],
    select: [{
      type: Output
    }]
  });
})();
function defaultOptionsFactory() {
  return DefaultOptions.create();
}
function multiYearOptionsFactory(options) {
  return options.multiYear;
}
var DefaultOptions = class {
  static create() {
    return {
      multiYear: {
        yearRows: 7,
        yearsPerRow: 3
      }
    };
  }
};
var OptionsTokens = class {
  static {
    this.all = new InjectionToken("All options token");
  }
  static {
    this.multiYear = new InjectionToken("Grid view options token");
  }
};
var optionsProviders = [{
  provide: OptionsTokens.all,
  useFactory: defaultOptionsFactory
}, {
  provide: OptionsTokens.multiYear,
  useFactory: multiYearOptionsFactory,
  deps: [OptionsTokens.all]
}];
var OwlMultiYearViewComponent = class _OwlMultiYearViewComponent {
  get selectMode() {
    return this._selectMode;
  }
  set selectMode(val) {
    this._selectMode = val;
    if (this.initiated) {
      this.setSelectedYears();
      this.cdRef.markForCheck();
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    const oldSelected = this._selected;
    value = this.dateTimeAdapter.deserialize(value);
    this._selected = this.getValidDate(value);
    if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
      this.setSelectedYears();
    }
  }
  get selecteds() {
    return this._selecteds;
  }
  set selecteds(values) {
    this._selecteds = values.map((v) => {
      v = this.dateTimeAdapter.deserialize(v);
      return this.getValidDate(v);
    });
    this.setSelectedYears();
  }
  get pickerMoment() {
    return this._pickerMoment;
  }
  set pickerMoment(value) {
    const oldMoment = this._pickerMoment;
    value = this.dateTimeAdapter.deserialize(value);
    this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
    if (oldMoment && this._pickerMoment && !this.isSameYearList(oldMoment, this._pickerMoment)) {
      this.generateYearList();
    }
  }
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(filter2) {
    this._dateFilter = filter2;
    if (this.initiated) {
      this.generateYearList();
    }
  }
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._minDate = this.getValidDate(value);
    if (this.initiated) {
      this.generateYearList();
    }
  }
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._maxDate = this.getValidDate(value);
    if (this.initiated) {
      this.generateYearList();
    }
  }
  get todayYear() {
    return this._todayYear;
  }
  get years() {
    return this._years;
  }
  get selectedYears() {
    return this._selectedYears;
  }
  get isInSingleMode() {
    return this.selectMode === "single";
  }
  get isInRangeMode() {
    return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
  }
  get activeCell() {
    if (this._pickerMoment) {
      return this.dateTimeAdapter.getYear(this._pickerMoment) % (this.options.yearsPerRow * this.options.yearRows);
    }
  }
  get tableHeader() {
    if (this._years && this._years.length > 0) {
      return `${this._years[0][0].displayValue} - ${this._years[this.options.yearRows - 1][this.options.yearsPerRow - 1].displayValue}`;
    }
  }
  get prevButtonLabel() {
    return this.pickerIntl.prevMultiYearLabel;
  }
  get nextButtonLabel() {
    return this.pickerIntl.nextMultiYearLabel;
  }
  get owlDTCalendarView() {
    return true;
  }
  get owlDTCalendarMultiYearView() {
    return true;
  }
  constructor(cdRef, pickerIntl, dateTimeAdapter, options) {
    this.cdRef = cdRef;
    this.pickerIntl = pickerIntl;
    this.dateTimeAdapter = dateTimeAdapter;
    this.options = options;
    this._selectMode = "single";
    this._selecteds = [];
    this.initiated = false;
    this.change = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.pickerMomentChange = new EventEmitter();
    this.keyboardEnter = new EventEmitter();
  }
  ngOnInit() {
  }
  ngAfterContentInit() {
    this._todayYear = this.dateTimeAdapter.getYear(this.dateTimeAdapter.now());
    this.generateYearList();
    this.initiated = true;
  }
  /**
   * Handle a calendarCell selected
   */
  selectCalendarCell(cell) {
    this.selectYear(cell.value);
  }
  selectYear(year) {
    this.yearSelected.emit(this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.firstMonthOfTheYear, 1));
    const firstDateOfMonth = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), 1);
    const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
    const selected = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.getMonth(this.pickerMoment), Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
    this.change.emit(selected);
  }
  /**
   * Generate the previous year list
   * */
  prevYearList(event2) {
    this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1 * this.options.yearsPerRow * this.options.yearRows);
    this.generateYearList();
    event2.preventDefault();
  }
  /**
   * Generate the next year list
   * */
  nextYearList(event2) {
    this._pickerMoment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, this.options.yearsPerRow * this.options.yearRows);
    this.generateYearList();
    event2.preventDefault();
  }
  generateYearList() {
    this._years = [];
    const pickerMomentYear = this.dateTimeAdapter.getYear(this._pickerMoment);
    const offset = pickerMomentYear % (this.options.yearsPerRow * this.options.yearRows);
    for (let i = 0; i < this.options.yearRows; i++) {
      const row = [];
      for (let j = 0; j < this.options.yearsPerRow; j++) {
        const year = pickerMomentYear - offset + (j + i * this.options.yearsPerRow);
        const yearCell = this.createYearCell(year);
        row.push(yearCell);
      }
      this._years.push(row);
    }
    return;
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.minDate) {
      return true;
    }
    return !this.minDate || !this.isSameYearList(this._pickerMoment, this.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.maxDate || !this.isSameYearList(this._pickerMoment, this.maxDate);
  }
  handleCalendarKeydown(event2) {
    let moment;
    switch (event2.keyCode) {
      // minus 1 year
      case LEFT_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      // add 1 year
      case RIGHT_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      // minus 3 years
      case UP_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -1 * this.options.yearsPerRow);
        this.pickerMomentChange.emit(moment);
        break;
      // add 3 years
      case DOWN_ARROW:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, this.options.yearsPerRow);
        this.pickerMomentChange.emit(moment);
        break;
      // go to the first year of the year page
      case HOME:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, -this.dateTimeAdapter.getYear(this._pickerMoment) % (this.options.yearsPerRow * this.options.yearRows));
        this.pickerMomentChange.emit(moment);
        break;
      // go to the last year of the year page
      case END:
        moment = this.dateTimeAdapter.addCalendarYears(this._pickerMoment, this.options.yearsPerRow * this.options.yearRows - this.dateTimeAdapter.getYear(this._pickerMoment) % (this.options.yearsPerRow * this.options.yearRows) - 1);
        this.pickerMomentChange.emit(moment);
        break;
      // minus 1 year page (or 10 year pages)
      case PAGE_UP:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? -10 * (this.options.yearsPerRow * this.options.yearRows) : -1 * (this.options.yearsPerRow * this.options.yearRows));
        this.pickerMomentChange.emit(moment);
        break;
      // add 1 year page (or 10 year pages)
      case PAGE_DOWN:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? 10 * (this.options.yearsPerRow * this.options.yearRows) : this.options.yearsPerRow * this.options.yearRows);
        this.pickerMomentChange.emit(moment);
        break;
      case ENTER:
        this.selectYear(this.dateTimeAdapter.getYear(this._pickerMoment));
        this.keyboardEnter.emit();
        break;
      default:
        return;
    }
    this.focusActiveCell();
    event2.preventDefault();
  }
  /**
   * Creates an CalendarCell for the given year.
   */
  createYearCell(year) {
    const startDateOfYear = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.firstMonthOfTheYear, 1);
    const ariaLabel = this.dateTimeAdapter.getYearName(startDateOfYear);
    const cellClass = "owl-dt-year-" + year;
    return new CalendarCell(year, year.toString(), ariaLabel, this.isYearEnabled(year), false, cellClass);
  }
  setSelectedYears() {
    this._selectedYears = [];
    if (this.isInSingleMode && this.selected) {
      this._selectedYears[0] = this.dateTimeAdapter.getYear(this.selected);
    }
    if (this.isInRangeMode && this.selecteds) {
      this._selectedYears = this.selecteds.map((selected) => {
        if (this.dateTimeAdapter.isValid(selected)) {
          return this.dateTimeAdapter.getYear(selected);
        } else {
          return null;
        }
      });
    }
  }
  /** Whether the given year is enabled. */
  isYearEnabled(year) {
    if (year === void 0 || year === null || this.maxDate && year > this.dateTimeAdapter.getYear(this.maxDate) || this.minDate && year < this.dateTimeAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this.dateTimeAdapter.createDate(year, this.dateTimeAdapter.firstMonthOfTheYear, 1);
    for (let date = firstOfYear; this.dateTimeAdapter.getYear(date) === year; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  isSameYearList(date1, date2) {
    return Math.floor(this.dateTimeAdapter.getYear(date1) / (this.options.yearsPerRow * this.options.yearRows)) === Math.floor(this.dateTimeAdapter.getYear(date2) / (this.options.yearsPerRow * this.options.yearRows));
  }
  /**
   * Get a valid date object
   */
  getValidDate(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  }
  focusActiveCell() {
    this.calendarBodyElm.focusActiveCell();
  }
  static {
    this.ɵfac = function OwlMultiYearViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlMultiYearViewComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(OwlDateTimeIntl), ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OptionsTokens.multiYear));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlMultiYearViewComponent,
      selectors: [["owl-date-time-multi-year-view"]],
      viewQuery: function OwlMultiYearViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(OwlCalendarBodyComponent, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calendarBodyElm = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function OwlMultiYearViewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("owl-dt-calendar-view", ctx.owlDTCalendarView)("owl-dt-calendar-multi-year-view", ctx.owlDTCalendarMultiYearView);
        }
      },
      inputs: {
        selectMode: "selectMode",
        selected: "selected",
        selecteds: "selecteds",
        pickerMoment: "pickerMoment",
        dateFilter: "dateFilter",
        minDate: "minDate",
        maxDate: "maxDate"
      },
      outputs: {
        change: "change",
        yearSelected: "yearSelected",
        pickerMomentChange: "pickerMomentChange",
        keyboardEnter: "keyboardEnter"
      },
      standalone: false,
      decls: 14,
      vars: 12,
      consts: [["type", "button", "tabindex", "0", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "click", "disabled"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], [1, "owl-dt-calendar-table", "owl-dt-calendar-multi-year-table"], [1, "owl-dt-calendar-header"], ["colspan", "3"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "keydown", "select", "rows", "numCols", "cellRatio", "activeCell", "todayValue", "selectedValues", "selectMode"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                C197.237,120.447,195.534,115.448,191.75,111.689z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"]],
      template: function OwlMultiYearViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 0);
          ɵɵlistener("click", function OwlMultiYearViewComponent_Template_button_click_0_listener($event) {
            return ctx.prevYearList($event);
          });
          ɵɵelementStart(1, "span", 1);
          ɵɵnamespaceSVG();
          ɵɵelementStart(2, "svg", 2);
          ɵɵelement(3, "path", 3);
          ɵɵelementEnd()()();
          ɵɵnamespaceHTML();
          ɵɵelementStart(4, "table", 4)(5, "thead", 5)(6, "tr")(7, "th", 6);
          ɵɵtext(8);
          ɵɵelementEnd()()();
          ɵɵelementStart(9, "tbody", 7);
          ɵɵlistener("keydown", function OwlMultiYearViewComponent_Template_tbody_keydown_9_listener($event) {
            return ctx.handleCalendarKeydown($event);
          })("select", function OwlMultiYearViewComponent_Template_tbody_select_9_listener($event) {
            return ctx.selectCalendarCell($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(10, "button", 0);
          ɵɵlistener("click", function OwlMultiYearViewComponent_Template_button_click_10_listener($event) {
            return ctx.nextYearList($event);
          });
          ɵɵelementStart(11, "span", 1);
          ɵɵnamespaceSVG();
          ɵɵelementStart(12, "svg", 8);
          ɵɵelement(13, "path", 9);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("disabled", !ctx.previousEnabled());
          ɵɵattribute("aria-label", ctx.prevButtonLabel);
          ɵɵadvance(8);
          ɵɵtextInterpolate(ctx.tableHeader);
          ɵɵadvance();
          ɵɵproperty("rows", ctx.years)("numCols", 3)("cellRatio", 3 / 7)("activeCell", ctx.activeCell)("todayValue", ctx.todayYear)("selectedValues", ctx.selectedYears)("selectMode", ctx.selectMode);
          ɵɵadvance();
          ɵɵproperty("disabled", !ctx.nextEnabled());
          ɵɵattribute("aria-label", ctx.nextButtonLabel);
        }
      },
      dependencies: [OwlCalendarBodyComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlMultiYearViewComponent, [{
    type: Component,
    args: [{
      selector: "owl-date-time-multi-year-view",
      host: {
        "[class.owl-dt-calendar-view]": "owlDTCalendarView",
        "[class.owl-dt-calendar-multi-year-view]": "owlDTCalendarMultiYearView"
      },
      standalone: false,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<button class="owl-dt-control-button owl-dt-control-arrow-button"\n        [disabled]="!previousEnabled()" [attr.aria-label]="prevButtonLabel"\n        type="button" tabindex="0" (click)="prevYearList($event)">\n    <span class="owl-dt-control-button-content" tabindex="-1">\n        <!-- <editor-fold desc="SVG Arrow Left"> -->\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n             version="1.1" x="0px" y="0px" viewBox="0 0 250.738 250.738"\n             style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve"\n             width="100%" height="100%">\n            <path style="fill-rule: evenodd; clip-rule: evenodd;" d="M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z"/>\n        </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n<table class="owl-dt-calendar-table owl-dt-calendar-multi-year-table">\n    <thead class="owl-dt-calendar-header">\n    <tr>\n        <th colspan="3">{{tableHeader}}</th>\n    </tr>\n    </thead>\n    <tbody owl-date-time-calendar-body role="grid"\n           [rows]="years" [numCols]="3" [cellRatio]="3 / 7"\n           [activeCell]="activeCell"\n           [todayValue]="todayYear"\n           [selectedValues]="selectedYears"\n           [selectMode]="selectMode"\n           (keydown)="handleCalendarKeydown($event)"\n           (select)="selectCalendarCell($event)"></tbody>\n</table>\n<button class="owl-dt-control-button owl-dt-control-arrow-button"\n        [disabled]="!nextEnabled()" [attr.aria-label]="nextButtonLabel"\n        type="button" tabindex="0" (click)="nextYearList($event)">\n    <span class="owl-dt-control-button-content" tabindex="-1">\n        <!-- <editor-fold desc="SVG Arrow Right"> -->\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n             viewBox="0 0 250.738 250.738" style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve">\n            <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                C197.237,120.447,195.534,115.448,191.75,111.689z"/>\n        </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: OwlDateTimeIntl
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [OptionsTokens.multiYear]
    }]
  }], {
    selectMode: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    selecteds: [{
      type: Input
    }],
    pickerMoment: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    pickerMomentChange: [{
      type: Output
    }],
    keyboardEnter: [{
      type: Output
    }],
    calendarBodyElm: [{
      type: ViewChild,
      args: [OwlCalendarBodyComponent, {
        static: true
      }]
    }]
  });
})();
var MONTHS_PER_YEAR = 12;
var MONTHS_PER_ROW = 3;
var OwlYearViewComponent = class _OwlYearViewComponent {
  get selectMode() {
    return this._selectMode;
  }
  set selectMode(val) {
    this._selectMode = val;
    if (this.initiated) {
      this.generateMonthList();
      this.cdRef.markForCheck();
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._selected = this.getValidDate(value);
    this.setSelectedMonths();
  }
  get selecteds() {
    return this._selecteds;
  }
  set selecteds(values) {
    this._selecteds = [];
    for (let i = 0; i < values.length; i++) {
      const value = this.dateTimeAdapter.deserialize(values[i]);
      this._selecteds.push(this.getValidDate(value));
    }
    this.setSelectedMonths();
  }
  get pickerMoment() {
    return this._pickerMoment;
  }
  set pickerMoment(value) {
    const oldMoment = this._pickerMoment;
    value = this.dateTimeAdapter.deserialize(value);
    this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
    if (!this.hasSameYear(oldMoment, this._pickerMoment) && this.initiated) {
      this.generateMonthList();
    }
  }
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(filter2) {
    this._dateFilter = filter2;
    if (this.initiated) {
      this.generateMonthList();
    }
  }
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._minDate = this.getValidDate(value);
    if (this.initiated) {
      this.generateMonthList();
    }
  }
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._maxDate = this.getValidDate(value);
    if (this.initiated) {
      this.generateMonthList();
    }
  }
  get months() {
    return this._months;
  }
  get activeCell() {
    if (this._pickerMoment) {
      return this.dateTimeAdapter.getMonth(this._pickerMoment);
    }
  }
  get isInSingleMode() {
    return this.selectMode === "single";
  }
  get isInRangeMode() {
    return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
  }
  get owlDTCalendarView() {
    return true;
  }
  constructor(cdRef, dateTimeAdapter, dateTimeFormats) {
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this._selectMode = "single";
    this._selecteds = [];
    this.localeSub = Subscription.EMPTY;
    this.initiated = false;
    this.selectedMonths = [];
    this.change = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.pickerMomentChange = new EventEmitter();
    this.keyboardEnter = new EventEmitter();
    this.monthNames = this.dateTimeAdapter.getMonthNames("short");
  }
  ngOnInit() {
    this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(() => {
      this.generateMonthList();
      this.cdRef.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.generateMonthList();
    this.initiated = true;
  }
  ngOnDestroy() {
    this.localeSub.unsubscribe();
  }
  /**
   * Handle a calendarCell selected
   */
  selectCalendarCell(cell) {
    this.selectMonth(cell.value);
  }
  /**
   * Handle a new month selected
   */
  selectMonth(month) {
    const firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
    this.monthSelected.emit(firstDateOfMonth);
    const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(firstDateOfMonth);
    const result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, Math.min(daysInMonth, this.dateTimeAdapter.getDate(this.pickerMoment)), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
    this.change.emit(result);
  }
  /**
   * Handle keydown event on calendar body
   */
  handleCalendarKeydown(event2) {
    let moment;
    switch (event2.keyCode) {
      // minus 1 month
      case LEFT_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      // add 1 month
      case RIGHT_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      // minus 3 months
      case UP_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -3);
        this.pickerMomentChange.emit(moment);
        break;
      // add 3 months
      case DOWN_ARROW:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 3);
        this.pickerMomentChange.emit(moment);
        break;
      // move to first month of current year
      case HOME:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -this.dateTimeAdapter.getMonth(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      // move to last month of current year
      case END:
        moment = this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 11 - this.dateTimeAdapter.getMonth(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      // minus 1 year (or 10 year)
      case PAGE_UP:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? -10 : -1);
        this.pickerMomentChange.emit(moment);
        break;
      // add 1 year (or 10 year)
      case PAGE_DOWN:
        moment = this.dateTimeAdapter.addCalendarYears(this.pickerMoment, event2.altKey ? 10 : 1);
        this.pickerMomentChange.emit(moment);
        break;
      // Select current month
      case ENTER:
        this.selectMonth(this.dateTimeAdapter.getMonth(this.pickerMoment));
        this.keyboardEnter.emit();
        break;
      default:
        return;
    }
    this.focusActiveCell();
    event2.preventDefault();
  }
  /**
   * Generate the calendar month list
   * */
  generateMonthList() {
    if (!this.pickerMoment) {
      return;
    }
    this.setSelectedMonths();
    this.todayMonth = this.getMonthInCurrentYear(this.dateTimeAdapter.now());
    this._months = [];
    for (let i = 0; i < MONTHS_PER_YEAR / MONTHS_PER_ROW; i++) {
      const row = [];
      for (let j = 0; j < MONTHS_PER_ROW; j++) {
        const month = j + i * MONTHS_PER_ROW + this.dateTimeAdapter.firstMonthOfTheYear;
        const monthCell = this.createMonthCell(month);
        row.push(monthCell);
      }
      this._months.push(row);
    }
    return;
  }
  /**
   * Creates an CalendarCell for the given month.
   */
  createMonthCell(month) {
    const startDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
    const ariaLabel = this.dateTimeAdapter.format(startDateOfMonth, this.dateTimeFormats.monthYearA11yLabel);
    const cellClass = "owl-dt-month-" + month;
    return new CalendarCell(month, this.monthNames[month - this.dateTimeAdapter.firstMonthOfTheYear], ariaLabel, this.isMonthEnabled(month), false, cellClass);
  }
  /**
   * Check if the given month is enable
   */
  isMonthEnabled(month) {
    const firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.pickerMoment), month, 1);
    for (let date = firstDateOfMonth; this.dateTimeAdapter.getMonth(date) === month; date = this.dateTimeAdapter.addCalendarDays(date, 1)) {
      if (!!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) && (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  getMonthInCurrentYear(date) {
    if (this.getValidDate(date) && this.getValidDate(this._pickerMoment)) {
      const result = this.dateTimeAdapter.compareYear(date, this._pickerMoment);
      if (result < 0) {
        return -1;
      } else if (result > 0) {
        return 12;
      } else {
        return this.dateTimeAdapter.getMonth(date);
      }
    } else {
      return null;
    }
  }
  /**
   * Set the selectedMonths value
   * In single mode, it has only one value which represent the month the selected date in
   * In range mode, it would has two values, one for the month the fromValue in and the other for the month the toValue in
   * */
  setSelectedMonths() {
    this.selectedMonths = [];
    if (this.isInSingleMode && this.selected) {
      this.selectedMonths[0] = this.getMonthInCurrentYear(this.selected);
    }
    if (this.isInRangeMode && this.selecteds) {
      this.selectedMonths[0] = this.getMonthInCurrentYear(this.selecteds[0]);
      this.selectedMonths[1] = this.getMonthInCurrentYear(this.selecteds[1]);
    }
  }
  /**
   * Check the given dates are in the same year
   */
  hasSameYear(dateLeft, dateRight) {
    return !!(dateLeft && dateRight && this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight));
  }
  /**
   * Get a valid date object
   */
  getValidDate(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  }
  focusActiveCell() {
    this.calendarBodyElm.focusActiveCell();
  }
  static {
    this.ɵfac = function OwlYearViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlYearViewComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlYearViewComponent,
      selectors: [["owl-date-time-year-view"]],
      viewQuery: function OwlYearViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(OwlCalendarBodyComponent, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calendarBodyElm = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function OwlYearViewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("owl-dt-calendar-view", ctx.owlDTCalendarView);
        }
      },
      inputs: {
        selectMode: "selectMode",
        selected: "selected",
        selecteds: "selecteds",
        pickerMoment: "pickerMoment",
        dateFilter: "dateFilter",
        minDate: "minDate",
        maxDate: "maxDate"
      },
      outputs: {
        change: "change",
        monthSelected: "monthSelected",
        pickerMomentChange: "pickerMomentChange",
        keyboardEnter: "keyboardEnter"
      },
      exportAs: ["owlMonthView"],
      standalone: false,
      decls: 5,
      vars: 7,
      consts: [[1, "owl-dt-calendar-table", "owl-dt-calendar-year-table"], [1, "owl-dt-calendar-header"], ["aria-hidden", "true", "colspan", "3", 1, "owl-dt-calendar-table-divider"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "keydown", "select", "rows", "numCols", "cellRatio", "activeCell", "todayValue", "selectedValues", "selectMode"]],
      template: function OwlYearViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
          ɵɵelement(3, "th", 2);
          ɵɵelementEnd()();
          ɵɵelementStart(4, "tbody", 3);
          ɵɵlistener("keydown", function OwlYearViewComponent_Template_tbody_keydown_4_listener($event) {
            return ctx.handleCalendarKeydown($event);
          })("select", function OwlYearViewComponent_Template_tbody_select_4_listener($event) {
            return ctx.selectCalendarCell($event);
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵproperty("rows", ctx.months)("numCols", 3)("cellRatio", 3 / 7)("activeCell", ctx.activeCell)("todayValue", ctx.todayMonth)("selectedValues", ctx.selectedMonths)("selectMode", ctx.selectMode);
        }
      },
      dependencies: [OwlCalendarBodyComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlYearViewComponent, [{
    type: Component,
    args: [{
      selector: "owl-date-time-year-view",
      exportAs: "owlMonthView",
      host: {
        "[class.owl-dt-calendar-view]": "owlDTCalendarView"
      },
      standalone: false,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<table class="owl-dt-calendar-table owl-dt-calendar-year-table">\n    <thead class="owl-dt-calendar-header">\n    <tr>\n        <th class="owl-dt-calendar-table-divider" aria-hidden="true" colspan="3"></th>\n    </tr>\n    </thead>\n    <tbody owl-date-time-calendar-body role="grid"\n           [rows]="months" [numCols]="3" [cellRatio]="3 / 7"\n           [activeCell]="activeCell"\n           [todayValue]="todayMonth"\n           [selectedValues]="selectedMonths"\n           [selectMode]="selectMode"\n           (keydown)="handleCalendarKeydown($event)"\n           (select)="selectCalendarCell($event)">\n    </tbody>\n</table>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_FORMATS]
    }]
  }], {
    selectMode: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    selecteds: [{
      type: Input
    }],
    pickerMoment: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    pickerMomentChange: [{
      type: Output
    }],
    keyboardEnter: [{
      type: Output
    }],
    calendarBodyElm: [{
      type: ViewChild,
      args: [OwlCalendarBodyComponent, {
        static: true
      }]
    }]
  });
})();
var DAYS_PER_WEEK = 7;
var WEEKS_PER_VIEW = 6;
var OwlMonthViewComponent = class _OwlMonthViewComponent {
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(val) {
    if (val >= 0 && val <= 6 && val !== this._firstDayOfWeek) {
      this._firstDayOfWeek = val;
      this.isDefaultFirstDayOfWeek = false;
      if (this.initiated) {
        this.generateWeekDays();
        this.generateCalendar();
        this.cdRef.markForCheck();
      }
    }
  }
  get selectMode() {
    return this._selectMode;
  }
  set selectMode(val) {
    this._selectMode = val;
    if (this.initiated) {
      this.generateCalendar();
      this.cdRef.markForCheck();
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    const oldSelected = this._selected;
    value = this.dateTimeAdapter.deserialize(value);
    this._selected = this.getValidDate(value);
    if (!this.dateTimeAdapter.isSameDay(oldSelected, this._selected)) {
      this.setSelectedDates();
    }
  }
  get selecteds() {
    return this._selecteds;
  }
  set selecteds(values) {
    this._selecteds = values.map((v) => {
      v = this.dateTimeAdapter.deserialize(v);
      return this.getValidDate(v);
    });
    this.setSelectedDates();
  }
  get pickerMoment() {
    return this._pickerMoment;
  }
  set pickerMoment(value) {
    const oldMoment = this._pickerMoment;
    value = this.dateTimeAdapter.deserialize(value);
    this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
    this.firstDateOfMonth = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this._pickerMoment), this.dateTimeAdapter.getMonth(this._pickerMoment), 1);
    if (!this.isSameMonth(oldMoment, this._pickerMoment) && this.initiated) {
      this.generateCalendar();
    }
  }
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(filter2) {
    this._dateFilter = filter2;
    if (this.initiated) {
      this.generateCalendar();
      this.cdRef.markForCheck();
    }
  }
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._minDate = this.getValidDate(value);
    if (this.initiated) {
      this.generateCalendar();
      this.cdRef.markForCheck();
    }
  }
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._maxDate = this.getValidDate(value);
    if (this.initiated) {
      this.generateCalendar();
      this.cdRef.markForCheck();
    }
  }
  get weekdays() {
    return this._weekdays;
  }
  get days() {
    return this._days;
  }
  get activeCell() {
    if (this.pickerMoment) {
      return this.dateTimeAdapter.getDate(this.pickerMoment) + this.firstRowOffset - 1;
    }
  }
  get isInSingleMode() {
    return this.selectMode === "single";
  }
  get isInRangeMode() {
    return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
  }
  get owlDTCalendarView() {
    return true;
  }
  constructor(cdRef, dateTimeAdapter, dateTimeFormats) {
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this.hideOtherMonths = false;
    this.showCalendarWeeks = false;
    this.isDefaultFirstDayOfWeek = true;
    this._selectMode = "single";
    this._selecteds = [];
    this.localeSub = Subscription.EMPTY;
    this.initiated = false;
    this.selectedDates = [];
    this.selectedChange = new EventEmitter();
    this.userSelection = new EventEmitter();
    this.pickerMomentChange = new EventEmitter();
  }
  ngOnInit() {
    this.updateFirstDayOfWeek(this.dateTimeAdapter.getLocale());
    this.generateWeekDays();
    this.localeSub = this.dateTimeAdapter.localeChanges.subscribe((locale) => {
      this.updateFirstDayOfWeek(locale);
      this.generateWeekDays();
      this.generateCalendar();
      this.cdRef.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.generateCalendar();
    this.initiated = true;
  }
  ngOnDestroy() {
    this.localeSub.unsubscribe();
  }
  /**
   * Handle a calendarCell selected
   */
  selectCalendarCell(cell) {
    if (!cell.enabled || this.hideOtherMonths && cell.out) {
      return;
    }
    this.selectDate(cell.value);
  }
  /**
   * Handle a new date selected
   */
  selectDate(date) {
    const daysDiff = date - 1;
    const selected = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
    this.selectedChange.emit(selected);
    this.userSelection.emit();
  }
  /**
   * Handle keydown event on calendar body
   */
  handleCalendarKeydown(event2) {
    let moment;
    switch (event2.keyCode) {
      // minus 1 day
      case LEFT_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      // add 1 day
      case RIGHT_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      // minus 1 week
      case UP_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, -7);
        this.pickerMomentChange.emit(moment);
        break;
      // add 1 week
      case DOWN_ARROW:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 7);
        this.pickerMomentChange.emit(moment);
        break;
      // move to first day of current month
      case HOME:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, 1 - this.dateTimeAdapter.getDate(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      // move to last day of current month
      case END:
        moment = this.dateTimeAdapter.addCalendarDays(this.pickerMoment, this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment) - this.dateTimeAdapter.getDate(this.pickerMoment));
        this.pickerMomentChange.emit(moment);
        break;
      // minus 1 month (or 1 year)
      case PAGE_UP:
        moment = event2.altKey ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1) : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1);
        this.pickerMomentChange.emit(moment);
        break;
      // add 1 month (or 1 year)
      case PAGE_DOWN:
        moment = event2.altKey ? this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1) : this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1);
        this.pickerMomentChange.emit(moment);
        break;
      // select the pickerMoment
      case ENTER:
        if (!this.dateFilter || this.dateFilter(this.pickerMoment)) {
          this.selectDate(this.dateTimeAdapter.getDate(this.pickerMoment));
        }
        break;
      default:
        return;
    }
    this.focusActiveCell();
    event2.preventDefault();
  }
  /**
   * Generate the calendar weekdays array
   * */
  generateWeekDays() {
    const longWeekdays = this.dateTimeAdapter.getDayOfWeekNames("long");
    const shortWeekdays = this.dateTimeAdapter.getDayOfWeekNames("short");
    const narrowWeekdays = this.dateTimeAdapter.getDayOfWeekNames("narrow");
    const firstDayOfWeek = this.firstDayOfWeek;
    const weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        short: shortWeekdays[i],
        narrow: narrowWeekdays[i]
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek - this.dateTimeAdapter.firstDayOfTheWeek).concat(weekdays.slice(0, firstDayOfWeek - this.dateTimeAdapter.firstDayOfTheWeek));
    this.dateNames = this.dateTimeAdapter.getDateNames();
    return;
  }
  /**
   * Generate the calendar days array
   * */
  generateCalendar() {
    if (!this.pickerMoment) {
      return;
    }
    this.todayDate = null;
    this.weekNumbers = [];
    const startWeekdayOfMonth = this.dateTimeAdapter.getDay(this.firstDateOfMonth);
    const firstDayOfWeek = this.firstDayOfWeek;
    let daysDiff = 0 - (startWeekdayOfMonth + (DAYS_PER_WEEK - firstDayOfWeek)) % DAYS_PER_WEEK;
    this.firstRowOffset = Math.abs(daysDiff);
    this._days = [];
    for (let i = 0; i < WEEKS_PER_VIEW; i++) {
      const week = [];
      for (let j = 0; j < DAYS_PER_WEEK; j++) {
        const date = this.dateTimeAdapter.addCalendarDays(this.firstDateOfMonth, daysDiff);
        const dateCell = this.createDateCell(date, daysDiff);
        if (this.dateTimeAdapter.isSameDay(this.dateTimeAdapter.now(), date)) {
          this.todayDate = daysDiff + 1;
        }
        week.push(dateCell);
        daysDiff += 1;
      }
      this._days.push(week);
      if (this.showCalendarWeeks) {
        const weekNumber = this.getISOWeek(new Date(week[0].ariaLabel));
        this.weekNumbers.push(weekNumber);
      }
    }
    this.setSelectedDates();
  }
  getISOWeek(d) {
    const clonedDate = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    clonedDate.setUTCDate(clonedDate.getUTCDate() + 4 - (clonedDate.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(clonedDate.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((+clonedDate - +yearStart) / 864e5 + 1) / 7);
    return weekNo;
  }
  updateFirstDayOfWeek(locale) {
    if (this.isDefaultFirstDayOfWeek) {
      try {
        this._firstDayOfWeek = getLocaleFirstDayOfWeek(locale);
      } catch {
        this._firstDayOfWeek = 0;
      }
    }
  }
  /**
   * Creates CalendarCell for days.
   */
  createDateCell(date, daysDiff) {
    const daysInMonth = this.dateTimeAdapter.getNumDaysInMonth(this.pickerMoment);
    const dateNum = this.dateTimeAdapter.getDate(date);
    const dateName = dateNum.toString();
    const ariaLabel = this.dateTimeAdapter.format(date, this.dateTimeFormats.dateA11yLabel);
    const enabled = this.isDateEnabled(date);
    const dayValue = daysDiff + 1;
    const out = dayValue < 1 || dayValue > daysInMonth;
    const cellClass = "owl-dt-day-" + this.dateTimeAdapter.getDay(date);
    return new CalendarCell(dayValue, dateName, ariaLabel, enabled, out, cellClass);
  }
  /**
   * Check if the date is valid
   */
  isDateEnabled(date) {
    return !!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) && (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0);
  }
  /**
   * Get a valid date object
   */
  getValidDate(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  }
  /**
   * Check if the give dates are none-null and in the same month
   */
  isSameMonth(dateLeft, dateRight) {
    return !!(dateLeft && dateRight && this.dateTimeAdapter.isValid(dateLeft) && this.dateTimeAdapter.isValid(dateRight) && this.dateTimeAdapter.getYear(dateLeft) === this.dateTimeAdapter.getYear(dateRight) && this.dateTimeAdapter.getMonth(dateLeft) === this.dateTimeAdapter.getMonth(dateRight));
  }
  /**
   * Set the selectedDates value.
   * In single mode, it has only one value which represent the selected date
   * In range mode, it would has two values, one for the fromValue and the other for the toValue
   * */
  setSelectedDates() {
    this.selectedDates = [];
    if (!this.firstDateOfMonth) {
      return;
    }
    if (this.isInSingleMode && this.selected) {
      const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(this.selected, this.firstDateOfMonth);
      this.selectedDates[0] = dayDiff + 1;
      return;
    }
    if (this.isInRangeMode && this.selecteds) {
      this.selectedDates = this.selecteds.map((selected) => {
        if (this.dateTimeAdapter.isValid(selected)) {
          const dayDiff = this.dateTimeAdapter.differenceInCalendarDays(selected, this.firstDateOfMonth);
          return dayDiff + 1;
        } else {
          return null;
        }
      });
    }
  }
  focusActiveCell() {
    this.calendarBodyElm.focusActiveCell();
  }
  static {
    this.ɵfac = function OwlMonthViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlMonthViewComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlMonthViewComponent,
      selectors: [["owl-date-time-month-view"]],
      viewQuery: function OwlMonthViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(OwlCalendarBodyComponent, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calendarBodyElm = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function OwlMonthViewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("owl-dt-calendar-view", ctx.owlDTCalendarView);
        }
      },
      inputs: {
        hideOtherMonths: "hideOtherMonths",
        showCalendarWeeks: "showCalendarWeeks",
        firstDayOfWeek: "firstDayOfWeek",
        selectMode: "selectMode",
        selected: "selected",
        selecteds: "selecteds",
        pickerMoment: "pickerMoment",
        dateFilter: "dateFilter",
        minDate: "minDate",
        maxDate: "maxDate"
      },
      outputs: {
        selectedChange: "selectedChange",
        userSelection: "userSelection",
        pickerMomentChange: "pickerMomentChange"
      },
      exportAs: ["owlYearView"],
      standalone: false,
      decls: 8,
      vars: 15,
      consts: [["class", "week-number", 4, "ngIf"], [1, "owl-dt-calendar-table", "owl-dt-calendar-month-table", 3, "ngClass"], [1, "owl-dt-calendar-header"], [1, "owl-dt-weekdays"], ["class", "owl-dt-weekday", "scope", "col", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", "colspan", "7", 1, "owl-dt-calendar-table-divider", 3, "ngClass"], ["owl-date-time-calendar-body", "", "role", "grid", 3, "keydown", "select", "rows", "todayValue", "selectedValues", "selectMode", "activeCell"], [1, "week-number"], [4, "ngFor", "ngForOf"], ["scope", "col", 1, "owl-dt-weekday"]],
      template: function OwlMonthViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OwlMonthViewComponent_ul_0_Template, 2, 1, "ul", 0);
          ɵɵelementStart(1, "table", 1)(2, "thead", 2)(3, "tr", 3);
          ɵɵtemplate(4, OwlMonthViewComponent_th_4_Template, 3, 2, "th", 4);
          ɵɵelementEnd();
          ɵɵelementStart(5, "tr");
          ɵɵelement(6, "th", 5);
          ɵɵelementEnd()();
          ɵɵelementStart(7, "tbody", 6);
          ɵɵlistener("keydown", function OwlMonthViewComponent_Template_tbody_keydown_7_listener($event) {
            return ctx.handleCalendarKeydown($event);
          })("select", function OwlMonthViewComponent_Template_tbody_select_7_listener($event) {
            return ctx.selectCalendarCell($event);
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.showCalendarWeeks);
          ɵɵadvance();
          ɵɵclassProp("owl-dt-calendar-only-current-month", ctx.hideOtherMonths);
          ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c2, ctx.showCalendarWeeks));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.weekdays);
          ɵɵadvance(2);
          ɵɵproperty("ngClass", ɵɵpureFunction1(13, _c2, ctx.showCalendarWeeks));
          ɵɵadvance();
          ɵɵproperty("rows", ctx.days)("todayValue", ctx.todayDate)("selectedValues", ctx.selectedDates)("selectMode", ctx.selectMode)("activeCell", ctx.activeCell);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, OwlCalendarBodyComponent],
      styles: [".week-number[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;margin:46px 0 14px;padding:0;list-style:none;border-right:1px solid rgba(0,0,0,.12);width:8%;font-weight:700}.week-number[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.8em}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlMonthViewComponent, [{
    type: Component,
    args: [{
      selector: "owl-date-time-month-view",
      exportAs: "owlYearView",
      standalone: false,
      host: {
        "[class.owl-dt-calendar-view]": "owlDTCalendarView"
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ul class="week-number" *ngIf="showCalendarWeeks">
    <li *ngFor="let week of weekNumbers;">
        <span>{{ week }}</span>
    </li>
</ul>
<table class="owl-dt-calendar-table owl-dt-calendar-month-table" [ngClass]="{'owl-calendar-weeks': showCalendarWeeks}"
       [class.owl-dt-calendar-only-current-month]="hideOtherMonths">
    <thead class="owl-dt-calendar-header">
    <tr class="owl-dt-weekdays">
        <th *ngFor="let weekday of weekdays"
            [attr.aria-label]="weekday.long"
            class="owl-dt-weekday" scope="col">
            <span>{{weekday.short}}</span>
        </th>
    </tr>
    <tr>
        <th class="owl-dt-calendar-table-divider" [ngClass]="{'owl-calendar-weeks': showCalendarWeeks}" aria-hidden="true" colspan="7"></th>
    </tr>
    </thead>
    <tbody owl-date-time-calendar-body role="grid"
           [rows]="days" [todayValue]="todayDate"
           [selectedValues]="selectedDates"
           [selectMode]="selectMode"
           [activeCell]="activeCell"
           (keydown)="handleCalendarKeydown($event)"
           (select)="selectCalendarCell($event)">
    </tbody>
</table>
`,
      styles: [".week-number{display:flex;flex-direction:column;justify-content:space-between;margin:46px 0 14px;padding:0;list-style:none;border-right:1px solid rgba(0,0,0,.12);width:8%;font-weight:700}.week-number li{font-size:.8em}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_FORMATS]
    }]
  }], {
    hideOtherMonths: [{
      type: Input
    }],
    showCalendarWeeks: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    selectMode: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    selecteds: [{
      type: Input
    }],
    pickerMoment: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    userSelection: [{
      type: Output
    }],
    pickerMomentChange: [{
      type: Output
    }],
    calendarBodyElm: [{
      type: ViewChild,
      args: [OwlCalendarBodyComponent, {
        static: true
      }]
    }]
  });
})();
var OwlCalendarComponent = class _OwlCalendarComponent {
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    value = this.getValidDate(value);
    this._minDate = value ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
  }
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    value = this.dateTimeAdapter.deserialize(value);
    value = this.getValidDate(value);
    this._maxDate = value ? this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(value), this.dateTimeAdapter.getMonth(value), this.dateTimeAdapter.getDate(value)) : null;
  }
  get pickerMoment() {
    return this._pickerMoment;
  }
  set pickerMoment(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._selected = this.getValidDate(value);
  }
  get selecteds() {
    return this._selecteds;
  }
  set selecteds(values) {
    this._selecteds = values.map((v) => {
      v = this.dateTimeAdapter.deserialize(v);
      return this.getValidDate(v);
    });
  }
  get periodButtonText() {
    return this.isMonthView ? this.dateTimeAdapter.format(this.pickerMoment, this.dateTimeFormats.monthYearLabel) : this.dateTimeAdapter.getYearName(this.pickerMoment);
  }
  get periodButtonLabel() {
    return this.isMonthView ? this.pickerIntl.switchToMultiYearViewLabel : this.pickerIntl.switchToMonthViewLabel;
  }
  get prevButtonLabel() {
    if (this._currentView === DateView.MONTH) {
      return this.pickerIntl.prevMonthLabel;
    } else if (this._currentView === DateView.YEAR) {
      return this.pickerIntl.prevYearLabel;
    } else {
      return null;
    }
  }
  get nextButtonLabel() {
    if (this._currentView === DateView.MONTH) {
      return this.pickerIntl.nextMonthLabel;
    } else if (this._currentView === DateView.YEAR) {
      return this.pickerIntl.nextYearLabel;
    } else {
      return null;
    }
  }
  get currentView() {
    return this._currentView;
  }
  set currentView(view) {
    this._currentView = view;
    this.moveFocusOnNextTick = true;
  }
  get isInSingleMode() {
    return this.selectMode === "single";
  }
  get isInRangeMode() {
    return this.selectMode === "range" || this.selectMode === "rangeFrom" || this.selectMode === "rangeTo";
  }
  get showControlArrows() {
    return this._currentView !== DateView.MULTI_YEARS;
  }
  get isMonthView() {
    return this._currentView === DateView.MONTH;
  }
  /**
   * Bind class 'owl-dt-calendar' to host
   * */
  get owlDTCalendarClass() {
    return true;
  }
  constructor(elmRef, pickerIntl, ngZone, cdRef, dateTimeAdapter, dateTimeFormats) {
    this.elmRef = elmRef;
    this.pickerIntl = pickerIntl;
    this.ngZone = ngZone;
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this.DateView = DateView;
    this._selecteds = [];
    this.startView = DateView.MONTH;
    this.yearOnly = false;
    this.showCalendarWeeks = false;
    this.multiyearOnly = false;
    this.pickerMomentChange = new EventEmitter();
    this.dateClicked = new EventEmitter();
    this.selectedChange = new EventEmitter();
    this.userSelection = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.intlChangesSub = Subscription.EMPTY;
    this.moveFocusOnNextTick = false;
    this.dateFilterForViews = (date) => {
      return !!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateTimeAdapter.compare(date, this.minDate) >= 0) && (!this.maxDate || this.dateTimeAdapter.compare(date, this.maxDate) <= 0);
    };
    this.intlChangesSub = this.pickerIntl.changes.subscribe(() => {
      this.cdRef.markForCheck();
    });
  }
  ngOnInit() {
  }
  ngAfterContentInit() {
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this.moveFocusOnNextTick) {
      this.moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this.intlChangesSub.unsubscribe();
  }
  /**
   * Toggle between month view and year view
   */
  toggleViews() {
    let nextView = null;
    if (this._currentView === DateView.MONTH) {
      nextView = DateView.MULTI_YEARS;
    } else {
      if (this.multiyearOnly) {
        nextView = DateView.MULTI_YEARS;
      } else if (this.yearOnly) {
        nextView = this._currentView === DateView.YEAR ? DateView.MULTI_YEARS : DateView.YEAR;
      } else {
        nextView = DateView.MONTH;
      }
    }
    this.currentView = nextView;
  }
  /**
   * Handles user clicks on the previous button.
   * */
  previousClicked() {
    this.pickerMoment = this.isMonthView ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, -1) : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, -1);
    this.pickerMomentChange.emit(this.pickerMoment);
  }
  /**
   * Handles user clicks on the next button.
   * */
  nextClicked() {
    this.pickerMoment = this.isMonthView ? this.dateTimeAdapter.addCalendarMonths(this.pickerMoment, 1) : this.dateTimeAdapter.addCalendarYears(this.pickerMoment, 1);
    this.pickerMomentChange.emit(this.pickerMoment);
  }
  dateSelected(date) {
    if (!this.dateFilterForViews(date)) {
      return;
    }
    this.dateClicked.emit(date);
    this.selectedChange.emit(date);
  }
  /**
   * Change the pickerMoment value and switch to a specific view
   */
  goToDateInView(date, view) {
    this.handlePickerMomentChange(date);
    if (!this.yearOnly && !this.multiyearOnly || this.multiyearOnly && view !== DateView.MONTH && view !== DateView.YEAR || this.yearOnly && view !== DateView.MONTH) {
      this.currentView = view;
    } else {
      this.dateSelected(date);
    }
    return;
  }
  /**
   * Change the pickerMoment value
   */
  handlePickerMomentChange(date) {
    this.pickerMoment = this.dateTimeAdapter.clampDate(date, this.minDate, this.maxDate);
    this.pickerMomentChange.emit(this.pickerMoment);
    return;
  }
  userSelected() {
    this.userSelection.emit();
  }
  /**
   * Whether the previous period button is enabled.
   */
  prevButtonEnabled() {
    return !this.minDate || !this.isSameView(this.pickerMoment, this.minDate);
  }
  /**
   * Whether the next period button is enabled.
   */
  nextButtonEnabled() {
    return !this.maxDate || !this.isSameView(this.pickerMoment, this.maxDate);
  }
  /**
   * Focus to the host element
   * */
  focusActiveCell() {
    this.ngZone.runOutsideAngular(() => {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.elmRef.nativeElement.querySelector(".owl-dt-calendar-cell-active").focus();
      });
    });
  }
  selectYearInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  selectMonthInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /**
   * Whether the two dates represent the same view in the current view mode (month or year).
   */
  isSameView(date1, date2) {
    if (this._currentView === DateView.MONTH) {
      return !!(date1 && date2 && this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2) && this.dateTimeAdapter.getMonth(date1) === this.dateTimeAdapter.getMonth(date2));
    } else if (this._currentView === DateView.YEAR) {
      return !!(date1 && date2 && this.dateTimeAdapter.getYear(date1) === this.dateTimeAdapter.getYear(date2));
    } else {
      return false;
    }
  }
  /**
   * Get a valid date object
   */
  getValidDate(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  }
  static {
    this.ɵfac = function OwlCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlCalendarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(OwlDateTimeIntl), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlCalendarComponent,
      selectors: [["owl-date-time-calendar"]],
      hostVars: 2,
      hostBindings: function OwlCalendarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("owl-dt-calendar", ctx.owlDTCalendarClass);
        }
      },
      inputs: {
        minDate: "minDate",
        maxDate: "maxDate",
        pickerMoment: "pickerMoment",
        selected: "selected",
        selecteds: "selecteds",
        dateFilter: "dateFilter",
        firstDayOfWeek: "firstDayOfWeek",
        selectMode: "selectMode",
        startView: "startView",
        yearOnly: "yearOnly",
        showCalendarWeeks: "showCalendarWeeks",
        multiyearOnly: "multiyearOnly",
        hideOtherMonths: "hideOtherMonths"
      },
      outputs: {
        pickerMomentChange: "pickerMomentChange",
        dateClicked: "dateClicked",
        selectedChange: "selectedChange",
        userSelection: "userSelection",
        yearSelected: "yearSelected",
        monthSelected: "monthSelected"
      },
      exportAs: ["owlDateTimeCalendar"],
      standalone: false,
      decls: 21,
      vars: 16,
      consts: [[1, "owl-dt-calendar-control"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "click", "disabled"], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], [1, "owl-dt-calendar-control-content"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-control-period-button", 3, "click"], [1, "owl-dt-control-button-arrow"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "50%", "height", "50%", "viewBox", "0 0 292.362 292.362", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 292.362 292.362"], ["d", "M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424\n                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428\n                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 250.738 250.738", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 250.738 250.738"], ["d", "M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0\n                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545\n                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681\n                    C197.237,120.447,195.534,115.448,191.75,111.689z", 2, "fill-rule", "evenodd", "clip-rule", "evenodd"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "owl-dt-calendar-main", 3, "ngSwitch"], [3, "pickerMoment", "firstDayOfWeek", "selected", "selecteds", "selectMode", "minDate", "showCalendarWeeks", "maxDate", "dateFilter", "hideOtherMonths", "pickerMomentChange", "selectedChange", "userSelection", 4, "ngSwitchCase"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "monthSelected", "change", 4, "ngSwitchCase"], [3, "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "keyboardEnter", "pickerMomentChange", "yearSelected", "change", 4, "ngSwitchCase"], [3, "pickerMomentChange", "selectedChange", "userSelection", "pickerMoment", "firstDayOfWeek", "selected", "selecteds", "selectMode", "minDate", "showCalendarWeeks", "maxDate", "dateFilter", "hideOtherMonths"], [3, "keyboardEnter", "pickerMomentChange", "monthSelected", "change", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter"], [3, "keyboardEnter", "pickerMomentChange", "yearSelected", "change", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter"]],
      template: function OwlCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "button", 1);
          ɵɵlistener("click", function OwlCalendarComponent_Template_button_click_1_listener() {
            return ctx.previousClicked();
          });
          ɵɵelementStart(2, "span", 2);
          ɵɵnamespaceSVG();
          ɵɵelementStart(3, "svg", 3);
          ɵɵelement(4, "path", 4);
          ɵɵelementEnd()()();
          ɵɵnamespaceHTML();
          ɵɵelementStart(5, "div", 5)(6, "button", 6);
          ɵɵlistener("click", function OwlCalendarComponent_Template_button_click_6_listener() {
            return ctx.toggleViews();
          });
          ɵɵelementStart(7, "span", 2);
          ɵɵtext(8);
          ɵɵelementStart(9, "span", 7);
          ɵɵnamespaceSVG();
          ɵɵelementStart(10, "svg", 8)(11, "g");
          ɵɵelement(12, "path", 9);
          ɵɵelementEnd()()()()()();
          ɵɵnamespaceHTML();
          ɵɵelementStart(13, "button", 1);
          ɵɵlistener("click", function OwlCalendarComponent_Template_button_click_13_listener() {
            return ctx.nextClicked();
          });
          ɵɵelementStart(14, "span", 2);
          ɵɵnamespaceSVG();
          ɵɵelementStart(15, "svg", 10);
          ɵɵelement(16, "path", 11);
          ɵɵelementEnd()()()();
          ɵɵnamespaceHTML();
          ɵɵelementStart(17, "div", 12);
          ɵɵtemplate(18, OwlCalendarComponent_owl_date_time_month_view_18_Template, 1, 10, "owl-date-time-month-view", 13)(19, OwlCalendarComponent_owl_date_time_year_view_19_Template, 1, 7, "owl-date-time-year-view", 14)(20, OwlCalendarComponent_owl_date_time_multi_year_view_20_Template, 1, 7, "owl-date-time-multi-year-view", 15);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵstyleProp("visibility", ctx.showControlArrows ? "visible" : "hidden");
          ɵɵproperty("disabled", !ctx.prevButtonEnabled());
          ɵɵattribute("aria-label", ctx.prevButtonLabel);
          ɵɵadvance(5);
          ɵɵattribute("aria-label", ctx.periodButtonLabel);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.periodButtonText, " ");
          ɵɵadvance();
          ɵɵstyleProp("transform", "rotate(" + (ctx.isMonthView ? 0 : 180) + "deg)");
          ɵɵadvance(4);
          ɵɵstyleProp("visibility", ctx.showControlArrows ? "visible" : "hidden");
          ɵɵproperty("disabled", !ctx.nextButtonEnabled());
          ɵɵattribute("aria-label", ctx.nextButtonLabel);
          ɵɵadvance(4);
          ɵɵproperty("ngSwitch", ctx.currentView);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.DateView.MONTH);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.DateView.YEAR);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", ctx.DateView.MULTI_YEARS);
        }
      },
      dependencies: [NgSwitch, NgSwitchCase, CdkMonitorFocus, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlCalendarComponent, [{
    type: Component,
    args: [{
      selector: "owl-date-time-calendar",
      exportAs: "owlDateTimeCalendar",
      standalone: false,
      host: {
        "[class.owl-dt-calendar]": "owlDTCalendarClass"
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="owl-dt-calendar-control">
    <!-- focus when keyboard tab (http://kizu.ru/en/blog/keyboard-only-focus/#x) -->
    <button class="owl-dt-control owl-dt-control-button owl-dt-control-arrow-button"
            type="button" tabindex="0"
            [style.visibility]="showControlArrows? 'visible': 'hidden'"
            [disabled]="!prevButtonEnabled()"
            [attr.aria-label]="prevButtonLabel"
            (click)="previousClicked()">
        <span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">
            <!-- <editor-fold desc="SVG Arrow Left"> -->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 version="1.1" x="0px" y="0px" viewBox="0 0 250.738 250.738"
                 style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve"
                 width="100%" height="100%">
                <path style="fill-rule: evenodd; clip-rule: evenodd;" d="M96.633,125.369l95.053-94.533c7.101-7.055,7.101-18.492,0-25.546   c-7.1-7.054-18.613-7.054-25.714,0L58.989,111.689c-3.784,3.759-5.487,8.759-5.238,13.68c-0.249,4.922,1.454,9.921,5.238,13.681   l106.983,106.398c7.101,7.055,18.613,7.055,25.714,0c7.101-7.054,7.101-18.491,0-25.544L96.633,125.369z"/>
            </svg>
            <!-- </editor-fold> -->
        </span>
    </button>
    <div class="owl-dt-calendar-control-content">
        <button class="owl-dt-control owl-dt-control-button owl-dt-control-period-button"
                type="button" tabindex="0"
                [attr.aria-label]="periodButtonLabel"
                (click)="toggleViews()">
            <span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">
                {{periodButtonText}}

                <span class="owl-dt-control-button-arrow"
                      [style.transform]="'rotate(' + (isMonthView? 0 : 180) +'deg)'">
                    <!-- <editor-fold desc="SVG Arrow"> -->
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="50%" height="50%" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;"
                         xml:space="preserve">
                        <g>
                            <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
                        </g>
                    </svg>
                    <!-- </editor-fold> -->
                </span>
            </span>
        </button>
    </div>
    <button class="owl-dt-control owl-dt-control-button owl-dt-control-arrow-button"
            type="button" tabindex="0"
            [style.visibility]="showControlArrows? 'visible': 'hidden'"
            [disabled]="!nextButtonEnabled()"
            [attr.aria-label]="nextButtonLabel"
            (click)="nextClicked()">
        <span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">
            <!-- <editor-fold desc="SVG Arrow Right"> -->
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 250.738 250.738" style="enable-background:new 0 0 250.738 250.738;" xml:space="preserve">
                <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M191.75,111.689L84.766,5.291c-7.1-7.055-18.613-7.055-25.713,0
                    c-7.101,7.054-7.101,18.49,0,25.544l95.053,94.534l-95.053,94.533c-7.101,7.054-7.101,18.491,0,25.545
                    c7.1,7.054,18.613,7.054,25.713,0L191.75,139.05c3.784-3.759,5.487-8.759,5.238-13.681
                    C197.237,120.447,195.534,115.448,191.75,111.689z"/>
            </svg>
            <!-- </editor-fold> -->
        </span>
    </button>
</div>
<div class="owl-dt-calendar-main" cdkMonitorSubtreeFocus [ngSwitch]="currentView" tabindex="-1">
    <owl-date-time-month-view
            *ngSwitchCase="DateView.MONTH"
            [pickerMoment]="pickerMoment"
            [firstDayOfWeek]="firstDayOfWeek"
            [selected]="selected"
            [selecteds]="selecteds"
            [selectMode]="selectMode"
            [minDate]="minDate"
            [showCalendarWeeks]="showCalendarWeeks"
            [maxDate]="maxDate"
            [dateFilter]="dateFilter"
            [hideOtherMonths]="hideOtherMonths"
            (pickerMomentChange)="handlePickerMomentChange($event)"
            (selectedChange)="dateSelected($event)"
            (userSelection)="userSelected()"></owl-date-time-month-view>

    <owl-date-time-year-view
            *ngSwitchCase="DateView.YEAR"
            [pickerMoment]="pickerMoment"
            [selected]="selected"
            [selecteds]="selecteds"
            [selectMode]="selectMode"
            [minDate]="minDate"
            [maxDate]="maxDate"
            [dateFilter]="dateFilter"
            (keyboardEnter)="focusActiveCell()"
            (pickerMomentChange)="handlePickerMomentChange($event)"
            (monthSelected)="selectMonthInYearView($event)"
            (change)="goToDateInView($event, DateView.MONTH)"></owl-date-time-year-view>

    <owl-date-time-multi-year-view
            *ngSwitchCase="DateView.MULTI_YEARS"
            [pickerMoment]="pickerMoment"
            [selected]="selected"
            [selecteds]="selecteds"
            [selectMode]="selectMode"
            [minDate]="minDate"
            [maxDate]="maxDate"
            [dateFilter]="dateFilter"
            (keyboardEnter)="focusActiveCell()"
            (pickerMomentChange)="handlePickerMomentChange($event)"
            (yearSelected)="selectYearInMultiYearView($event)"
            (change)="goToDateInView($event, DateView.YEAR)"></owl-date-time-multi-year-view>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: OwlDateTimeIntl
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_FORMATS]
    }]
  }], {
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    pickerMoment: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    selecteds: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    selectMode: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    yearOnly: [{
      type: Input
    }],
    showCalendarWeeks: [{
      type: Input
    }],
    multiyearOnly: [{
      type: Input
    }],
    hideOtherMonths: [{
      type: Input
    }],
    pickerMomentChange: [{
      type: Output
    }],
    dateClicked: [{
      type: Output
    }],
    selectedChange: [{
      type: Output
    }],
    userSelection: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }]
  });
})();
var OwlTimerBoxComponent = class _OwlTimerBoxComponent {
  get displayValue() {
    if (this.hasFocus) {
      return this.valueInput.nativeElement.value;
    }
    const value = this.boxValue || this.value;
    if (value === null || isNaN(value)) {
      return "";
    }
    return value < 10 ? "0" + value.toString() : value.toString();
  }
  get owlDTTimerBoxClass() {
    return true;
  }
  constructor() {
    this.showDivider = false;
    this.step = 1;
    this.valueChange = new EventEmitter();
    this.inputChange = new EventEmitter();
    this.inputStream = new Subject();
    this.inputStreamSub = Subscription.EMPTY;
    this.hasFocus = false;
    this.onValueInputMouseWheelBind = this.onValueInputMouseWheel.bind(this);
  }
  ngOnInit() {
    this.inputStreamSub = this.inputStream.pipe(debounceTime(750)).subscribe((val) => {
      if (val) {
        const inputValue = coerceNumberProperty(val, 0);
        this.updateValueViaInput(inputValue);
      }
    });
    this.bindValueInputMouseWheel();
  }
  ngOnDestroy() {
    this.unbindValueInputMouseWheel();
    this.inputStreamSub.unsubscribe();
  }
  upBtnClicked() {
    this.updateValue(this.value + this.step);
  }
  downBtnClicked() {
    this.updateValue(this.value - this.step);
  }
  handleInputChange(val) {
    this.inputStream.next(val);
  }
  focusIn() {
    this.hasFocus = true;
  }
  focusOut(value) {
    this.hasFocus = false;
    if (value) {
      const inputValue = coerceNumberProperty(value, 0);
      this.updateValueViaInput(inputValue);
    }
  }
  updateValue(value) {
    this.valueChange.emit(value);
  }
  updateValueViaInput(value) {
    if (value > this.max || value < this.min) {
      return;
    }
    this.inputChange.emit(value);
  }
  onValueInputMouseWheel(event2) {
    event2 = event2 || window.event;
    const delta = event2.wheelDelta || -event2.deltaY || -event2.detail;
    if (delta > 0) {
      if (!this.upBtnDisabled) {
        this.upBtnClicked();
      }
    } else if (delta < 0) {
      if (!this.downBtnDisabled) {
        this.downBtnClicked();
      }
    }
    event2.preventDefault ? event2.preventDefault() : event2.returnValue = false;
  }
  bindValueInputMouseWheel() {
    this.valueInput.nativeElement.addEventListener("onwheel" in document ? "wheel" : "mousewheel", this.onValueInputMouseWheelBind);
  }
  unbindValueInputMouseWheel() {
    this.valueInput.nativeElement.removeEventListener("onwheel" in document ? "wheel" : "mousewheel", this.onValueInputMouseWheelBind);
  }
  static {
    this.ɵfac = function OwlTimerBoxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlTimerBoxComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlTimerBoxComponent,
      selectors: [["owl-date-time-timer-box"]],
      viewQuery: function OwlTimerBoxComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.valueInput = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function OwlTimerBoxComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("owl-dt-timer-box", ctx.owlDTTimerBoxClass);
        }
      },
      inputs: {
        showDivider: "showDivider",
        upBtnAriaLabel: "upBtnAriaLabel",
        upBtnDisabled: "upBtnDisabled",
        downBtnAriaLabel: "downBtnAriaLabel",
        downBtnDisabled: "downBtnDisabled",
        boxValue: "boxValue",
        value: "value",
        min: "min",
        max: "max",
        step: "step",
        inputLabel: "inputLabel"
      },
      outputs: {
        valueChange: "valueChange",
        inputChange: "inputChange"
      },
      exportAs: ["owlDateTimeTimerBox"],
      standalone: false,
      decls: 14,
      vars: 7,
      consts: [["valueInput", ""], ["class", "owl-dt-timer-divider", "aria-hidden", "true", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "click", "disabled"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 451.847 451.846", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 451.847 451.846"], ["d", "M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"], [1, "owl-dt-timer-content"], ["maxlength", "2", 1, "owl-dt-timer-input", 3, "keydown.arrowup", "keydown.arrowdown", "input", "focusin", "focusout", "value"], [1, "owl-hidden-accessible"], ["d", "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"], ["aria-hidden", "true", 1, "owl-dt-timer-divider"]],
      template: function OwlTimerBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, OwlTimerBoxComponent_div_0_Template, 1, 0, "div", 1);
          ɵɵelementStart(1, "button", 2);
          ɵɵlistener("click", function OwlTimerBoxComponent_Template_button_click_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.upBtnClicked());
          });
          ɵɵelementStart(2, "span", 3);
          ɵɵnamespaceSVG();
          ɵɵelementStart(3, "svg", 4);
          ɵɵelement(4, "path", 5);
          ɵɵelementEnd()()();
          ɵɵnamespaceHTML();
          ɵɵelementStart(5, "label", 6)(6, "input", 7, 0);
          ɵɵlistener("keydown.arrowup", function OwlTimerBoxComponent_Template_input_keydown_arrowup_6_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(!ctx.upBtnDisabled && ctx.upBtnClicked());
          })("keydown.arrowdown", function OwlTimerBoxComponent_Template_input_keydown_arrowdown_6_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(!ctx.downBtnDisabled && ctx.downBtnClicked());
          })("input", function OwlTimerBoxComponent_Template_input_input_6_listener() {
            ɵɵrestoreView(_r1);
            const valueInput_r2 = ɵɵreference(7);
            return ɵɵresetView(ctx.handleInputChange(valueInput_r2.value));
          })("focusin", function OwlTimerBoxComponent_Template_input_focusin_6_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.focusIn());
          })("focusout", function OwlTimerBoxComponent_Template_input_focusout_6_listener() {
            ɵɵrestoreView(_r1);
            const valueInput_r2 = ɵɵreference(7);
            return ɵɵresetView(ctx.focusOut(valueInput_r2.value));
          });
          ɵɵelementEnd();
          ɵɵelementStart(8, "span", 8);
          ɵɵtext(9);
          ɵɵelementEnd()();
          ɵɵelementStart(10, "button", 2);
          ɵɵlistener("click", function OwlTimerBoxComponent_Template_button_click_10_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.downBtnClicked());
          });
          ɵɵelementStart(11, "span", 3);
          ɵɵnamespaceSVG();
          ɵɵelementStart(12, "svg", 4);
          ɵɵelement(13, "path", 9);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.showDivider);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.upBtnDisabled);
          ɵɵattribute("aria-label", ctx.upBtnAriaLabel);
          ɵɵadvance(5);
          ɵɵproperty("value", ctx.displayValue);
          ɵɵadvance(3);
          ɵɵtextInterpolate(ctx.inputLabel);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.downBtnDisabled);
          ɵɵattribute("aria-label", ctx.downBtnAriaLabel);
        }
      },
      dependencies: [NgIf],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlTimerBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "owlDateTimeTimerBox",
      selector: "owl-date-time-timer-box",
      standalone: false,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.owl-dt-timer-box]": "owlDTTimerBoxClass"
      },
      template: '<div *ngIf="showDivider" class="owl-dt-timer-divider" aria-hidden="true"></div>\n<button class="owl-dt-control-button owl-dt-control-arrow-button"\n        type="button" tabindex="-1"\n        [disabled]="upBtnDisabled"\n        [attr.aria-label]="upBtnAriaLabel"\n        (click)="upBtnClicked()">\n    <span class="owl-dt-control-button-content" tabindex="-1">\n        <!-- <editor-fold desc="SVG Arrow Up"> -->\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                 version="1.1" x="0px" y="0px" viewBox="0 0 451.847 451.846"\n                 style="enable-background:new 0 0 451.847 451.846;" xml:space="preserve"\n                 width="100%" height="100%">\n                    <path d="M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"/>\n                </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n<label class="owl-dt-timer-content">\n    <input class="owl-dt-timer-input" maxlength="2"\n           [value]="displayValue"\n           (keydown.arrowup)="!upBtnDisabled && upBtnClicked()"\n           (keydown.arrowdown)="!downBtnDisabled && downBtnClicked()"\n           (input)="handleInputChange(valueInput.value)"\n           (focusin)="focusIn()"\n           (focusout)="focusOut(valueInput.value)"\n           #valueInput>\n    <span class="owl-hidden-accessible">{{inputLabel}}</span>\n</label>\n<button class="owl-dt-control-button owl-dt-control-arrow-button"\n        type="button" tabindex="-1"\n        [disabled]="downBtnDisabled"\n        [attr.aria-label]="downBtnAriaLabel"\n        (click)="downBtnClicked()">\n    <span class="owl-dt-control-button-content" tabindex="-1">\n        <!-- <editor-fold desc="SVG Arrow Down"> -->\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n                 version="1.1" x="0px" y="0px" viewBox="0 0 451.847 451.846"\n                 style="enable-background:new 0 0 451.847 451.846;" xml:space="preserve"\n                 width="100%" height="100%">\n                    <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>\n                </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n'
    }]
  }], () => [], {
    showDivider: [{
      type: Input
    }],
    upBtnAriaLabel: [{
      type: Input
    }],
    upBtnDisabled: [{
      type: Input
    }],
    downBtnAriaLabel: [{
      type: Input
    }],
    downBtnDisabled: [{
      type: Input
    }],
    boxValue: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    inputLabel: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    inputChange: [{
      type: Output
    }],
    valueInput: [{
      type: ViewChild,
      args: ["valueInput", {
        static: true
      }]
    }]
  });
})();
var OwlTimerComponent = class _OwlTimerComponent {
  get pickerMoment() {
    return this._pickerMoment;
  }
  set pickerMoment(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._pickerMoment = this.getValidDate(value) || this.dateTimeAdapter.now();
  }
  get minDateTime() {
    return this._minDateTime;
  }
  set minDateTime(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._minDateTime = this.getValidDate(value);
  }
  get maxDateTime() {
    return this._maxDateTime;
  }
  set maxDateTime(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this._maxDateTime = this.getValidDate(value);
  }
  get hourValue() {
    return this.dateTimeAdapter.getHours(this.pickerMoment);
  }
  /**
   * The value would be displayed in hourBox.
   * We need this because the value displayed in hourBox it not
   * the same as the hourValue when the timer is in hour12Timer mode.
   * */
  get hourBoxValue() {
    let hours = this.hourValue;
    if (!this.hour12Timer) {
      return hours;
    } else {
      if (hours === 0) {
        hours = 12;
        this.isPM = false;
      } else if (hours > 0 && hours < 12) {
        this.isPM = false;
      } else if (hours === 12) {
        this.isPM = true;
      } else if (hours > 12 && hours < 24) {
        hours = hours - 12;
        this.isPM = true;
      }
      return hours;
    }
  }
  get minuteValue() {
    return this.dateTimeAdapter.getMinutes(this.pickerMoment);
  }
  get secondValue() {
    return this.dateTimeAdapter.getSeconds(this.pickerMoment);
  }
  get upHourButtonLabel() {
    return this.pickerIntl.upHourLabel;
  }
  get downHourButtonLabel() {
    return this.pickerIntl.downHourLabel;
  }
  get upMinuteButtonLabel() {
    return this.pickerIntl.upMinuteLabel;
  }
  get downMinuteButtonLabel() {
    return this.pickerIntl.downMinuteLabel;
  }
  get upSecondButtonLabel() {
    return this.pickerIntl.upSecondLabel;
  }
  get downSecondButtonLabel() {
    return this.pickerIntl.downSecondLabel;
  }
  get hour12ButtonLabel() {
    return this.isPM ? this.pickerIntl.hour12PMLabel : this.pickerIntl.hour12AMLabel;
  }
  get owlDTTimerClass() {
    return true;
  }
  get owlDTTimeTabIndex() {
    return -1;
  }
  constructor(ngZone, elmRef, pickerIntl, cdRef, dateTimeAdapter) {
    this.ngZone = ngZone;
    this.elmRef = elmRef;
    this.pickerIntl = pickerIntl;
    this.cdRef = cdRef;
    this.dateTimeAdapter = dateTimeAdapter;
    this.isPM = false;
    this.stepHour = 1;
    this.stepMinute = 1;
    this.stepSecond = 1;
    this.selectedChange = new EventEmitter();
  }
  ngOnInit() {
  }
  /**
   * Focus to the host element
   * */
  focus() {
    this.ngZone.runOutsideAngular(() => {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.elmRef.nativeElement.focus();
      });
    });
  }
  /**
   * Set the hour value via typing into timer box input
   * We need this to handle the hour value when the timer is in hour12 mode
   * */
  setHourValueViaInput(hours) {
    if (this.hour12Timer && this.isPM && hours >= 1 && hours <= 11) {
      hours = hours + 12;
    } else if (this.hour12Timer && !this.isPM && hours === 12) {
      hours = 0;
    }
    this.setHourValue(hours);
  }
  setHourValue(hours) {
    const m = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
    this.selectedChange.emit(m);
    this.cdRef.markForCheck();
  }
  setMinuteValue(minutes) {
    const m = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
    this.selectedChange.emit(m);
    this.cdRef.markForCheck();
  }
  setSecondValue(seconds) {
    const m = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
    this.selectedChange.emit(m);
    this.cdRef.markForCheck();
  }
  setMeridiem(event2) {
    this.isPM = !this.isPM;
    let hours = this.hourValue;
    if (this.isPM) {
      hours = hours + 12;
    } else {
      hours = hours - 12;
    }
    if (hours >= 0 && hours <= 23) {
      this.setHourValue(hours);
    }
    this.cdRef.markForCheck();
    event2.preventDefault();
  }
  /**
   * Check if the up hour button is enabled
   */
  upHourEnabled() {
    return !this.maxDateTime || this.compareHours(this.stepHour, this.maxDateTime) < 1;
  }
  /**
   * Check if the down hour button is enabled
   */
  downHourEnabled() {
    return !this.minDateTime || this.compareHours(-this.stepHour, this.minDateTime) > -1;
  }
  /**
   * Check if the up minute button is enabled
   */
  upMinuteEnabled() {
    return !this.maxDateTime || this.compareMinutes(this.stepMinute, this.maxDateTime) < 1;
  }
  /**
   * Check if the down minute button is enabled
   */
  downMinuteEnabled() {
    return !this.minDateTime || this.compareMinutes(-this.stepMinute, this.minDateTime) > -1;
  }
  /**
   * Check if the up second button is enabled
   */
  upSecondEnabled() {
    return !this.maxDateTime || this.compareSeconds(this.stepSecond, this.maxDateTime) < 1;
  }
  /**
   * Check if the down second button is enabled
   */
  downSecondEnabled() {
    return !this.minDateTime || this.compareSeconds(-this.stepSecond, this.minDateTime) > -1;
  }
  /**
   * PickerMoment's hour value +/- certain amount and compare it to the give date
   * 1 is after the comparedDate
   * -1 is before the comparedDate
   * 0 is equal the comparedDate
   * */
  compareHours(amount, comparedDate) {
    const hours = this.dateTimeAdapter.getHours(this.pickerMoment) + amount;
    const result = this.dateTimeAdapter.setHours(this.pickerMoment, hours);
    return this.dateTimeAdapter.compare(result, comparedDate);
  }
  /**
   * PickerMoment's minute value +/- certain amount and compare it to the give date
   * 1 is after the comparedDate
   * -1 is before the comparedDate
   * 0 is equal the comparedDate
   * */
  compareMinutes(amount, comparedDate) {
    const minutes = this.dateTimeAdapter.getMinutes(this.pickerMoment) + amount;
    const result = this.dateTimeAdapter.setMinutes(this.pickerMoment, minutes);
    return this.dateTimeAdapter.compare(result, comparedDate);
  }
  /**
   * PickerMoment's second value +/- certain amount and compare it to the give date
   * 1 is after the comparedDate
   * -1 is before the comparedDate
   * 0 is equal the comparedDate
   * */
  compareSeconds(amount, comparedDate) {
    const seconds = this.dateTimeAdapter.getSeconds(this.pickerMoment) + amount;
    const result = this.dateTimeAdapter.setSeconds(this.pickerMoment, seconds);
    return this.dateTimeAdapter.compare(result, comparedDate);
  }
  /**
   * Get a valid date object
   */
  getValidDate(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  }
  static {
    this.ɵfac = function OwlTimerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlTimerComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(OwlDateTimeIntl), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateTimeAdapter, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlTimerComponent,
      selectors: [["owl-date-time-timer"]],
      hostVars: 3,
      hostBindings: function OwlTimerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("tabindex", ctx.owlDTTimeTabIndex);
          ɵɵclassProp("owl-dt-timer", ctx.owlDTTimerClass);
        }
      },
      inputs: {
        pickerMoment: "pickerMoment",
        minDateTime: "minDateTime",
        maxDateTime: "maxDateTime",
        showSecondsTimer: "showSecondsTimer",
        hour12Timer: "hour12Timer",
        stepHour: "stepHour",
        stepMinute: "stepMinute",
        stepSecond: "stepSecond"
      },
      outputs: {
        selectedChange: "selectedChange"
      },
      exportAs: ["owlDateTimeTimer"],
      standalone: false,
      decls: 4,
      vars: 22,
      consts: [[3, "inputChange", "valueChange", "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "boxValue", "value", "min", "max", "step", "inputLabel"], [3, "inputChange", "valueChange", "showDivider", "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "value", "min", "max", "step", "inputLabel"], [3, "showDivider", "upBtnAriaLabel", "downBtnAriaLabel", "upBtnDisabled", "downBtnDisabled", "value", "min", "max", "step", "inputLabel", "inputChange", "valueChange", 4, "ngIf"], ["class", "owl-dt-timer-hour12", 4, "ngIf"], [1, "owl-dt-timer-hour12"], ["type", "button", "tabindex", "0", 1, "owl-dt-control-button", "owl-dt-timer-hour12-box", 3, "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"]],
      template: function OwlTimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "owl-date-time-timer-box", 0);
          ɵɵlistener("inputChange", function OwlTimerComponent_Template_owl_date_time_timer_box_inputChange_0_listener($event) {
            return ctx.setHourValueViaInput($event);
          })("valueChange", function OwlTimerComponent_Template_owl_date_time_timer_box_valueChange_0_listener($event) {
            return ctx.setHourValue($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(1, "owl-date-time-timer-box", 1);
          ɵɵlistener("inputChange", function OwlTimerComponent_Template_owl_date_time_timer_box_inputChange_1_listener($event) {
            return ctx.setMinuteValue($event);
          })("valueChange", function OwlTimerComponent_Template_owl_date_time_timer_box_valueChange_1_listener($event) {
            return ctx.setMinuteValue($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(2, OwlTimerComponent_owl_date_time_timer_box_2_Template, 1, 10, "owl-date-time-timer-box", 2)(3, OwlTimerComponent_div_3_Template, 4, 1, "div", 3);
        }
        if (rf & 2) {
          ɵɵproperty("upBtnAriaLabel", ctx.upHourButtonLabel)("downBtnAriaLabel", ctx.downHourButtonLabel)("upBtnDisabled", !ctx.upHourEnabled())("downBtnDisabled", !ctx.downHourEnabled())("boxValue", ctx.hourBoxValue)("value", ctx.hourValue)("min", 0)("max", 23)("step", ctx.stepHour)("inputLabel", "Hour");
          ɵɵadvance();
          ɵɵproperty("showDivider", true)("upBtnAriaLabel", ctx.upMinuteButtonLabel)("downBtnAriaLabel", ctx.downMinuteButtonLabel)("upBtnDisabled", !ctx.upMinuteEnabled())("downBtnDisabled", !ctx.downMinuteEnabled())("value", ctx.minuteValue)("min", 0)("max", 59)("step", ctx.stepMinute)("inputLabel", "Minute");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showSecondsTimer);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hour12Timer);
        }
      },
      dependencies: [NgIf, OwlTimerBoxComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlTimerComponent, [{
    type: Component,
    args: [{
      exportAs: "owlDateTimeTimer",
      selector: "owl-date-time-timer",
      preserveWhitespaces: false,
      standalone: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.owl-dt-timer]": "owlDTTimerClass",
        "[attr.tabindex]": "owlDTTimeTabIndex"
      },
      template: `<owl-date-time-timer-box
        [upBtnAriaLabel]="upHourButtonLabel"
        [downBtnAriaLabel]="downHourButtonLabel"
        [upBtnDisabled]="!upHourEnabled()"
        [downBtnDisabled]="!downHourEnabled()"
        [boxValue]="hourBoxValue"
        [value]="hourValue" [min]="0" [max]="23"
        [step]="stepHour" [inputLabel]="'Hour'"
        (inputChange)="setHourValueViaInput($event)"
        (valueChange)="setHourValue($event)"></owl-date-time-timer-box>
<owl-date-time-timer-box
        [showDivider]="true"
        [upBtnAriaLabel]="upMinuteButtonLabel"
        [downBtnAriaLabel]="downMinuteButtonLabel"
        [upBtnDisabled]="!upMinuteEnabled()"
        [downBtnDisabled]="!downMinuteEnabled()"
        [value]="minuteValue" [min]="0" [max]="59"
        [step]="stepMinute" [inputLabel]="'Minute'"
        (inputChange)="setMinuteValue($event)"
        (valueChange)="setMinuteValue($event)"></owl-date-time-timer-box>
<owl-date-time-timer-box
        *ngIf="showSecondsTimer"
        [showDivider]="true"
        [upBtnAriaLabel]="upSecondButtonLabel"
        [downBtnAriaLabel]="downSecondButtonLabel"
        [upBtnDisabled]="!upSecondEnabled()"
        [downBtnDisabled]="!downSecondEnabled()"
        [value]="secondValue" [min]="0" [max]="59"
        [step]="stepSecond" [inputLabel]="'Second'"
        (inputChange)="setSecondValue($event)"
        (valueChange)="setSecondValue($event)"></owl-date-time-timer-box>

<div *ngIf="hour12Timer" class="owl-dt-timer-hour12">
    <button class="owl-dt-control-button owl-dt-timer-hour12-box"
            type="button" tabindex="0"
            (click)="setMeridiem($event)">
        <span class="owl-dt-control-button-content" tabindex="-1">
            {{hour12ButtonLabel}}
        </span>
    </button>
</div>
`
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: OwlDateTimeIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }], {
    pickerMoment: [{
      type: Input
    }],
    minDateTime: [{
      type: Input
    }],
    maxDateTime: [{
      type: Input
    }],
    showSecondsTimer: [{
      type: Input
    }],
    hour12Timer: [{
      type: Input
    }],
    stepHour: [{
      type: Input
    }],
    stepMinute: [{
      type: Input
    }],
    stepSecond: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }]
  });
})();
var owlDateTimePickerAnimations = {
  transformPicker: trigger("transformPicker", [state("void", style({
    opacity: 0,
    transform: "scale(1, 0)"
  })), state("enter", style({
    opacity: 1,
    transform: "scale(1, 1)"
  })), transition("void => enter", group([query("@fadeInPicker", animateChild(), {
    optional: true
  }), animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)")])), transition("enter => void", animate("100ms linear", style({
    opacity: 0
  })))]),
  fadeInPicker: trigger("fadeInPicker", [state("enter", style({
    opacity: 1
  })), state("void", style({
    opacity: 0
  })), transition("void => enter", animate("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))])
};
var OwlDateTimeContainerComponent = class _OwlDateTimeContainerComponent {
  get hidePickerStream() {
    return this.hidePicker$.asObservable();
  }
  get confirmSelectedStream() {
    return this.confirmSelected$.asObservable();
  }
  get beforePickerOpenedStream() {
    return this.beforePickerOpened$.asObservable();
  }
  get pickerOpenedStream() {
    return this.pickerOpened$.asObservable();
  }
  get pickerMoment() {
    return this._clamPickerMoment;
  }
  set pickerMoment(value) {
    if (value) {
      this._clamPickerMoment = this.dateTimeAdapter.clampDate(value, this.picker.minDateTime, this.picker.maxDateTime);
    }
    this.cdRef.markForCheck();
  }
  get pickerType() {
    return this.picker.pickerType;
  }
  get cancelLabel() {
    return this.pickerIntl.cancelBtnLabel;
  }
  get setLabel() {
    return this.pickerIntl.setBtnLabel;
  }
  /**
   * The range 'from' label
   * */
  get fromLabel() {
    return this.pickerIntl.rangeFromLabel;
  }
  /**
   * The range 'to' label
   * */
  get toLabel() {
    return this.pickerIntl.rangeToLabel;
  }
  /**
   * The range 'from' formatted value
   * */
  get fromFormattedValue() {
    const value = this.picker.selecteds[0];
    return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : "";
  }
  /**
   * The range 'to' formatted value
   * */
  get toFormattedValue() {
    const value = this.picker.selecteds[1];
    return value ? this.dateTimeAdapter.format(value, this.picker.formatString) : "";
  }
  /**
   * Cases in which the control buttons show in the picker
   * 1) picker mode is 'dialog'
   * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
   * */
  get showControlButtons() {
    return this.picker.pickerMode === "dialog" || this.picker.pickerType !== "calendar" && this.picker.pickerMode !== "inline";
  }
  get containerElm() {
    return this.elmRef.nativeElement;
  }
  get owlDTContainerClass() {
    return true;
  }
  get owlDTPopupContainerClass() {
    return this.picker.pickerMode === "popup";
  }
  get owlDTDialogContainerClass() {
    return this.picker.pickerMode === "dialog";
  }
  get owlDTInlineContainerClass() {
    return this.picker.pickerMode === "inline";
  }
  get owlDTContainerDisabledClass() {
    return this.picker.disabled;
  }
  get owlDTContainerId() {
    return this.picker.id;
  }
  get owlDTContainerAnimation() {
    return this.picker.pickerMode === "inline" ? "" : "enter";
  }
  constructor(cdRef, elmRef, pickerIntl, dateTimeAdapter) {
    this.cdRef = cdRef;
    this.elmRef = elmRef;
    this.pickerIntl = pickerIntl;
    this.dateTimeAdapter = dateTimeAdapter;
    this.activeSelectedIndex = 0;
    this.hidePicker$ = new Subject();
    this.confirmSelected$ = new Subject();
    this.beforePickerOpened$ = new Subject();
    this.pickerOpened$ = new Subject();
  }
  ngOnInit() {
    if (this.picker.selectMode === "range") {
      if (this.picker.selecteds[0]) {
        this.retainStartTime = this.dateTimeAdapter.clone(this.picker.selecteds[0]);
      }
      if (this.picker.selecteds[1]) {
        this.retainEndTime = this.dateTimeAdapter.clone(this.picker.selecteds[1]);
      }
    }
  }
  ngAfterContentInit() {
    this.initPicker();
  }
  ngAfterViewInit() {
    this.focusPicker();
  }
  handleContainerAnimationStart(event2) {
    const toState = event2.toState;
    if (toState === "enter") {
      this.beforePickerOpened$.next(null);
    }
  }
  handleContainerAnimationDone(event2) {
    const toState = event2.toState;
    if (toState === "enter") {
      this.pickerOpened$.next(null);
    }
  }
  dateSelected(date) {
    let result;
    if (this.picker.isInSingleMode) {
      result = this.dateSelectedInSingleMode(date);
      if (result) {
        this.pickerMoment = result;
        this.picker.select(result);
      } else {
        if (this.pickerType === "calendar") {
          this.hidePicker$.next(null);
        }
      }
      return;
    }
    if (this.picker.isInRangeMode) {
      result = this.dateSelectedInRangeMode(date);
      if (result) {
        this.pickerMoment = result[this.activeSelectedIndex];
        this.picker.select(result);
      }
    }
  }
  timeSelected(time) {
    this.pickerMoment = this.dateTimeAdapter.clone(time);
    if (!this.picker.dateTimeChecker(this.pickerMoment)) {
      return;
    }
    if (this.picker.isInSingleMode) {
      this.picker.select(this.pickerMoment);
      return;
    }
    if (this.picker.isInRangeMode) {
      const selecteds = [...this.picker.selecteds];
      if (this.activeSelectedIndex === 0 && selecteds[1] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[1]) === 1 || this.activeSelectedIndex === 1 && selecteds[0] && this.dateTimeAdapter.compare(this.pickerMoment, selecteds[0]) === -1) {
        selecteds[0] = this.pickerMoment;
        selecteds[1] = this.pickerMoment;
      } else {
        selecteds[this.activeSelectedIndex] = this.pickerMoment;
      }
      if (selecteds[0]) {
        this.retainStartTime = this.dateTimeAdapter.clone(selecteds[0]);
      }
      if (selecteds[1]) {
        this.retainEndTime = this.dateTimeAdapter.clone(selecteds[1]);
      }
      this.picker.select(selecteds);
    }
  }
  /**
   * Handle click on cancel button
   */
  onCancelClicked(event2) {
    this.hidePicker$.next(null);
    event2.preventDefault();
    return;
  }
  /**
   * Handle click on set button
   */
  onSetClicked(event2) {
    if (!this.picker.dateTimeChecker(this.pickerMoment)) {
      this.hidePicker$.next(null);
      event2.preventDefault();
      return;
    }
    this.confirmSelected$.next(event2);
    event2.preventDefault();
    return;
  }
  /**
   * Handle click on inform radio group
   */
  handleClickOnInfoGroup(event2, index) {
    this.setActiveSelectedIndex(index);
    event2.preventDefault();
    event2.stopPropagation();
  }
  /**
   * Handle click on inform radio group
   */
  handleKeydownOnInfoGroup(event2, next, index) {
    switch (event2.keyCode) {
      case DOWN_ARROW:
      case RIGHT_ARROW:
      case UP_ARROW:
      case LEFT_ARROW:
        next.focus();
        this.setActiveSelectedIndex(index === 0 ? 1 : 0);
        event2.preventDefault();
        event2.stopPropagation();
        break;
      case SPACE:
        this.setActiveSelectedIndex(index);
        event2.preventDefault();
        event2.stopPropagation();
        break;
      default:
        return;
    }
  }
  /**
   * Set the value of activeSelectedIndex
   */
  setActiveSelectedIndex(index) {
    if (this.picker.selectMode === "range" && this.activeSelectedIndex !== index) {
      this.activeSelectedIndex = index;
      const selected = this.picker.selecteds[this.activeSelectedIndex];
      if (this.picker.selecteds && selected) {
        this.pickerMoment = this.dateTimeAdapter.clone(selected);
      }
    }
    return;
  }
  initPicker() {
    this.pickerMoment = this.picker.startAt || this.dateTimeAdapter.now();
    this.activeSelectedIndex = this.picker.selectMode === "rangeTo" ? 1 : 0;
  }
  /**
   * Select calendar date in single mode,
   * it returns null when date is not selected.
   */
  dateSelectedInSingleMode(date) {
    if (this.dateTimeAdapter.isSameDay(date, this.picker.selected)) {
      return null;
    }
    return this.updateAndCheckCalendarDate(date);
  }
  /**
   * Select dates in range Mode
   */
  dateSelectedInRangeMode(date) {
    let from = this.picker.selecteds[0];
    let to = this.picker.selecteds[1];
    const result = this.updateAndCheckCalendarDate(date);
    if (!result) {
      return null;
    }
    if (this.picker.selectMode === "range") {
      if (this.picker.selecteds && this.picker.selecteds.length && !to && from && this.dateTimeAdapter.differenceInCalendarDays(result, from) >= 0) {
        if (this.picker.endAt && !this.retainEndTime) {
          to = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(result), this.dateTimeAdapter.getMonth(result), this.dateTimeAdapter.getDate(result), this.dateTimeAdapter.getHours(this.picker.endAt), this.dateTimeAdapter.getMinutes(this.picker.endAt), this.dateTimeAdapter.getSeconds(this.picker.endAt));
        } else if (this.retainEndTime) {
          to = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(result), this.dateTimeAdapter.getMonth(result), this.dateTimeAdapter.getDate(result), this.dateTimeAdapter.getHours(this.retainEndTime), this.dateTimeAdapter.getMinutes(this.retainEndTime), this.dateTimeAdapter.getSeconds(this.retainEndTime));
        } else {
          to = result;
        }
        this.activeSelectedIndex = 1;
      } else {
        if (this.picker.startAt && !this.retainStartTime) {
          from = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(result), this.dateTimeAdapter.getMonth(result), this.dateTimeAdapter.getDate(result), this.dateTimeAdapter.getHours(this.picker.startAt), this.dateTimeAdapter.getMinutes(this.picker.startAt), this.dateTimeAdapter.getSeconds(this.picker.startAt));
        } else if (this.retainStartTime) {
          from = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(result), this.dateTimeAdapter.getMonth(result), this.dateTimeAdapter.getDate(result), this.dateTimeAdapter.getHours(this.retainStartTime), this.dateTimeAdapter.getMinutes(this.retainStartTime), this.dateTimeAdapter.getSeconds(this.retainStartTime));
        } else {
          from = result;
        }
        to = null;
        this.activeSelectedIndex = 0;
      }
    } else if (this.picker.selectMode === "rangeFrom") {
      from = result;
      if (to && this.dateTimeAdapter.compare(from, to) > 0) {
        to = null;
      }
    } else if (this.picker.selectMode === "rangeTo") {
      to = result;
      if (from && this.dateTimeAdapter.compare(from, to) > 0) {
        from = null;
      }
    }
    return [from, to];
  }
  /**
   * Update the given calendar date's time and check if it is valid
   * Because the calendar date has 00:00:00 as default time, if the picker type is 'both',
   * we need to update the given calendar date's time before selecting it.
   * if it is valid, return the updated dateTime
   * if it is not valid, return null
   */
  updateAndCheckCalendarDate(date) {
    let result;
    if (this.picker.pickerType === "both") {
      result = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(date), this.dateTimeAdapter.getMonth(date), this.dateTimeAdapter.getDate(date), this.dateTimeAdapter.getHours(this.pickerMoment), this.dateTimeAdapter.getMinutes(this.pickerMoment), this.dateTimeAdapter.getSeconds(this.pickerMoment));
      result = this.dateTimeAdapter.clampDate(result, this.picker.minDateTime, this.picker.maxDateTime);
    } else {
      result = this.dateTimeAdapter.clone(date);
    }
    return this.picker.dateTimeChecker(result) ? result : null;
  }
  /**
   * Focus to the picker
   * */
  focusPicker() {
    if (this.picker.pickerMode === "inline") {
      return;
    }
    if (this.calendar) {
      this.calendar.focusActiveCell();
    } else if (this.timer) {
      this.timer.focus();
    }
  }
  static {
    this.ɵfac = function OwlDateTimeContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTimeContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(OwlDateTimeIntl), ɵɵdirectiveInject(DateTimeAdapter, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlDateTimeContainerComponent,
      selectors: [["owl-date-time-container"]],
      viewQuery: function OwlDateTimeContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(OwlCalendarComponent, 5);
          ɵɵviewQuery(OwlTimerComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calendar = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.timer = _t.first);
        }
      },
      hostVars: 12,
      hostBindings: function OwlDateTimeContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵsyntheticHostListener("@transformPicker.start", function OwlDateTimeContainerComponent_animation_transformPicker_start_HostBindingHandler($event) {
            return ctx.handleContainerAnimationStart($event);
          })("@transformPicker.done", function OwlDateTimeContainerComponent_animation_transformPicker_done_HostBindingHandler($event) {
            return ctx.handleContainerAnimationDone($event);
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@transformPicker", ctx.owlDTContainerAnimation);
          ɵɵattribute("id", ctx.owlDTContainerId);
          ɵɵclassProp("owl-dt-container", ctx.owlDTContainerClass)("owl-dt-popup-container", ctx.owlDTPopupContainerClass)("owl-dt-dialog-container", ctx.owlDTDialogContainerClass)("owl-dt-inline-container", ctx.owlDTInlineContainerClass)("owl-dt-container-disabled", ctx.owlDTContainerDisabledClass);
        }
      },
      exportAs: ["owlDateTimeContainer"],
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [["from", ""], ["to", ""], [1, "owl-dt-container-inner", 3, "cdkTrapFocus"], ["class", "owl-dt-container-row", 3, "firstDayOfWeek", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "startView", "yearOnly", "showCalendarWeeks", "multiyearOnly", "hideOtherMonths", "pickerMomentChange", "yearSelected", "monthSelected", "dateClicked", "selectedChange", 4, "ngIf"], ["class", "owl-dt-container-row", 3, "pickerMoment", "minDateTime", "maxDateTime", "showSecondsTimer", "hour12Timer", "stepHour", "stepMinute", "stepSecond", "selectedChange", 4, "ngIf"], ["role", "radiogroup", "class", "owl-dt-container-info owl-dt-container-row", 4, "ngIf"], ["class", "owl-dt-container-buttons owl-dt-container-row", 4, "ngIf"], [1, "owl-dt-container-row", 3, "pickerMomentChange", "yearSelected", "monthSelected", "dateClicked", "selectedChange", "firstDayOfWeek", "pickerMoment", "selected", "selecteds", "selectMode", "minDate", "maxDate", "dateFilter", "startView", "yearOnly", "showCalendarWeeks", "multiyearOnly", "hideOtherMonths"], [1, "owl-dt-container-row", 3, "selectedChange", "pickerMoment", "minDateTime", "maxDateTime", "showSecondsTimer", "hour12Timer", "stepHour", "stepMinute", "stepSecond"], ["role", "radiogroup", 1, "owl-dt-container-info", "owl-dt-container-row"], ["role", "radio", 1, "owl-dt-control", "owl-dt-container-range", "owl-dt-container-from", 3, "click", "keydown", "tabindex", "ngClass"], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-container-range-content"], [1, "owl-dt-container-info-label"], [1, "owl-dt-container-info-value"], ["role", "radio", 1, "owl-dt-control", "owl-dt-container-range", "owl-dt-container-to", 3, "click", "keydown", "tabindex", "ngClass"], [1, "owl-dt-container-buttons", "owl-dt-container-row"], ["type", "button", "tabindex", "0", 1, "owl-dt-control", "owl-dt-control-button", "owl-dt-container-control-button", 3, "click"], ["tabindex", "-1", 1, "owl-dt-control-content", "owl-dt-control-button-content"]],
      template: function OwlDateTimeContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2);
          ɵɵtemplate(1, OwlDateTimeContainerComponent_owl_date_time_calendar_1_Template, 1, 13, "owl-date-time-calendar", 3)(2, OwlDateTimeContainerComponent_owl_date_time_timer_2_Template, 1, 8, "owl-date-time-timer", 4)(3, OwlDateTimeContainerComponent_div_3_Template, 15, 14, "div", 5)(4, OwlDateTimeContainerComponent_div_4_Template, 7, 2, "div", 6);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("cdkTrapFocus", ctx.picker.pickerMode !== "inline")("@fadeInPicker", ctx.picker.pickerMode === "inline" ? "" : "enter");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.pickerType === "both" || ctx.pickerType === "calendar");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.pickerType === "both" || ctx.pickerType === "timer");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.picker.isInRangeMode);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showControlButtons);
        }
      },
      dependencies: [NgClass, NgIf, CdkTrapFocus, OwlTimerComponent, OwlCalendarComponent],
      encapsulation: 2,
      data: {
        animation: [owlDateTimePickerAnimations.transformPicker, owlDateTimePickerAnimations.fadeInPicker]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTimeContainerComponent, [{
    type: Component,
    args: [{
      exportAs: "owlDateTimeContainer",
      selector: "owl-date-time-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      standalone: false,
      animations: [owlDateTimePickerAnimations.transformPicker, owlDateTimePickerAnimations.fadeInPicker],
      host: {
        "(@transformPicker.start)": "handleContainerAnimationStart($event)",
        "(@transformPicker.done)": "handleContainerAnimationDone($event)",
        "[class.owl-dt-container]": "owlDTContainerClass",
        "[class.owl-dt-popup-container]": "owlDTPopupContainerClass",
        "[class.owl-dt-dialog-container]": "owlDTDialogContainerClass",
        "[class.owl-dt-inline-container]": "owlDTInlineContainerClass",
        "[class.owl-dt-container-disabled]": "owlDTContainerDisabledClass",
        "[attr.id]": "owlDTContainerId",
        "[@transformPicker]": "owlDTContainerAnimation"
      },
      template: `<div [cdkTrapFocus]="picker.pickerMode !== 'inline'"
     [@fadeInPicker]="picker.pickerMode === 'inline'? '' : 'enter'"
     class="owl-dt-container-inner">

    <owl-date-time-calendar
            *ngIf="pickerType === 'both' || pickerType === 'calendar'"
            class="owl-dt-container-row"
            [firstDayOfWeek]="picker.firstDayOfWeek"
            [(pickerMoment)]="pickerMoment"
            [selected]="picker.selected"
            [selecteds]="picker.selecteds"
            [selectMode]="picker.selectMode"
            [minDate]="picker.minDateTime"
            [maxDate]="picker.maxDateTime"
            [dateFilter]="picker.dateTimeFilter"
            [startView]="picker.startView"
            [yearOnly]="picker.yearOnly"
            [showCalendarWeeks]="picker.showCalendarWeeks"
            [multiyearOnly]="picker.multiyearOnly"
            [hideOtherMonths]="picker.hideOtherMonths"
            (yearSelected)="picker.selectYear($event)"
            (monthSelected)="picker.selectMonth($event)"
            (dateClicked)="picker.selectDate($event)"
            (selectedChange)="dateSelected($event)"></owl-date-time-calendar>

    <owl-date-time-timer
            *ngIf="pickerType === 'both' || pickerType === 'timer'"
            class="owl-dt-container-row"
            [pickerMoment]="pickerMoment"
            [minDateTime]="picker.minDateTime"
            [maxDateTime]="picker.maxDateTime"
            [showSecondsTimer]="picker.showSecondsTimer"
            [hour12Timer]="picker.hour12Timer"
            [stepHour]="picker.stepHour"
            [stepMinute]="picker.stepMinute"
            [stepSecond]="picker.stepSecond"
            (selectedChange)="timeSelected($event)"></owl-date-time-timer>

    <div *ngIf="picker.isInRangeMode"
         role="radiogroup"
         class="owl-dt-container-info owl-dt-container-row">
        <div role="radio" [tabindex]="activeSelectedIndex === 0 ? 0 : -1"
             [attr.aria-checked]="activeSelectedIndex === 0"
             class="owl-dt-control owl-dt-container-range owl-dt-container-from"
             [ngClass]="{'owl-dt-container-info-active': activeSelectedIndex === 0}"
             (click)="handleClickOnInfoGroup($event, 0)"
             (keydown)="handleKeydownOnInfoGroup($event, to, 0)" #from>
            <span class="owl-dt-control-content owl-dt-container-range-content" tabindex="-1">
                <span class="owl-dt-container-info-label">{{fromLabel}}:</span>
                <span class="owl-dt-container-info-value">{{fromFormattedValue}}</span>
            </span>
        </div>
        <div role="radio" [tabindex]="activeSelectedIndex === 1 ? 0 : -1"
             [attr.aria-checked]="activeSelectedIndex === 1"
             class="owl-dt-control owl-dt-container-range owl-dt-container-to"
             [ngClass]="{'owl-dt-container-info-active': activeSelectedIndex === 1}"
             (click)="handleClickOnInfoGroup($event, 1)"
             (keydown)="handleKeydownOnInfoGroup($event, from, 1)" #to>
            <span class="owl-dt-control-content owl-dt-container-range-content" tabindex="-1">
                <span class="owl-dt-container-info-label">{{toLabel}}:</span>
                <span class="owl-dt-container-info-value">{{toFormattedValue}}</span>
            </span>
        </div>
    </div>

    <div *ngIf="showControlButtons" class="owl-dt-container-buttons owl-dt-container-row">
        <button class="owl-dt-control owl-dt-control-button owl-dt-container-control-button"
                type="button" tabindex="0"
                (click)="onCancelClicked($event)">
            <span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">
                {{cancelLabel}}
            </span>
        </button>
        <button class="owl-dt-control owl-dt-control-button owl-dt-container-control-button"
                type="button" tabindex="0"
                (click)="onSetClicked($event)">
            <span class="owl-dt-control-content owl-dt-control-button-content" tabindex="-1">
                {{setLabel}}
            </span>
        </button>
    </div>
</div>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: OwlDateTimeIntl
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }], {
    calendar: [{
      type: ViewChild,
      args: [OwlCalendarComponent]
    }],
    timer: [{
      type: ViewChild,
      args: [OwlTimerComponent]
    }]
  });
})();
var uniqueId = 0;
var OwlDialogConfig = class {
  constructor() {
    this.ariaDescribedBy = null;
    this.autoFocus = true;
    this.hasBackdrop = true;
    this.data = null;
    this.disableClose = false;
    this.role = "dialog";
    this.paneClass = "";
    this.event = null;
    this.backdropClass = "";
    this.closeOnNavigation = true;
    this.width = "";
    this.height = "";
    this.maxWidth = "85vw";
    this.scrollStrategy = new NoopScrollStrategy();
    this.id = `owl-dialog-${uniqueId++}`;
  }
};
var OwlDialogRef = class {
  constructor(overlayRef, container, id, location) {
    this.overlayRef = overlayRef;
    this.container = container;
    this.id = id;
    this._beforeClose$ = new Subject();
    this._beforeOpen$ = new Subject();
    this._afterOpen$ = new Subject();
    this._afterClosed$ = new Subject();
    this.locationChanged = Subscription.EMPTY;
    this.disableClose = true;
    this.disableClose = this.container.config.disableClose;
    this.container.animationStateChanged.pipe(filter((event2) => event2.phaseName === "start" && event2.toState === "enter"), take(1)).subscribe(() => {
      this._beforeOpen$.next(null);
      this._beforeOpen$.complete();
    });
    this.container.animationStateChanged.pipe(filter((event2) => event2.phaseName === "done" && event2.toState === "enter"), take(1)).subscribe(() => {
      this._afterOpen$.next(null);
      this._afterOpen$.complete();
    });
    this.container.animationStateChanged.pipe(filter((event2) => event2.phaseName === "done" && event2.toState === "exit"), take(1)).subscribe(() => {
      this.overlayRef.dispose();
      this.locationChanged.unsubscribe();
      this._afterClosed$.next(this.result);
      this._afterClosed$.complete();
      this.componentInstance = null;
    });
    this.overlayRef.keydownEvents().pipe(filter((event2) => event2.keyCode === ESCAPE && !this.disableClose)).subscribe(() => this.close());
    if (location) {
      this.locationChanged = location.subscribe(() => {
        if (this.container.config.closeOnNavigation) {
          this.close();
        }
      });
    }
  }
  close(dialogResult) {
    this.result = dialogResult;
    this.container.animationStateChanged.pipe(filter((event2) => event2.phaseName === "start"), take(1)).subscribe(() => {
      this._beforeClose$.next(dialogResult);
      this._beforeClose$.complete();
      this.overlayRef.detachBackdrop();
    });
    this.container.startExitAnimation();
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this.overlayRef.backdropClick();
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this.overlayRef.keydownEvents();
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    const strategy = this.getPositionStrategy();
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "auto", height = "auto") {
    this.getPositionStrategy().width(width).height(height);
    this.overlayRef.updatePosition();
    return this;
  }
  isAnimating() {
    return this.container.isAnimating;
  }
  beforeOpen() {
    return this._beforeOpen$.asObservable();
  }
  afterOpen() {
    return this._afterOpen$.asObservable();
  }
  beforeClose() {
    return this._beforeClose$.asObservable();
  }
  afterClosed() {
    return this._afterClosed$.asObservable();
  }
  /** Fetches the position strategy object from the overlay ref. */
  getPositionStrategy() {
    return this.overlayRef.getConfig().positionStrategy;
  }
};
var zoomFadeIn = {
  opacity: 0,
  transform: "translateX({{ x }}) translateY({{ y }}) scale({{scale}})"
};
var zoomFadeInFrom = {
  opacity: 0,
  transform: "translateX({{ x }}) translateY({{ y }}) scale({{scale}})",
  transformOrigin: "{{ ox }} {{ oy }}"
};
var OwlDialogContainerComponent = class _OwlDialogContainerComponent extends BasePortalOutlet {
  get config() {
    return this._config;
  }
  get owlDialogContainerClass() {
    return true;
  }
  get owlDialogContainerTabIndex() {
    return -1;
  }
  get owlDialogContainerId() {
    return this._config.id;
  }
  get owlDialogContainerRole() {
    return this._config.role || null;
  }
  get owlDialogContainerAriaLabelledby() {
    return this.ariaLabelledBy;
  }
  get owlDialogContainerAriaDescribedby() {
    return this._config.ariaDescribedBy || null;
  }
  get owlDialogContainerAnimation() {
    return {
      value: this.state,
      params: this.params
    };
  }
  constructor(changeDetector, elementRef, focusTrapFactory, document2) {
    super();
    this.changeDetector = changeDetector;
    this.elementRef = elementRef;
    this.focusTrapFactory = focusTrapFactory;
    this.document = document2;
    this.portalOutlet = null;
    this.ariaLabelledBy = null;
    this.animationStateChanged = new EventEmitter();
    this.isAnimating = false;
    this.state = "enter";
    this.params = {
      x: "0px",
      y: "0px",
      ox: "50%",
      oy: "50%",
      scale: 0
    };
    this.elementFocusedBeforeDialogWasOpened = null;
  }
  ngOnInit() {
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   */
  attachComponentPortal(portal) {
    if (this.portalOutlet.hasAttached()) {
      throw Error("Attempting to attach dialog content after content is already attached");
    }
    this.savePreviouslyFocusedElement();
    return this.portalOutlet.attachComponentPortal(portal);
  }
  attachTemplatePortal(portal) {
    throw new Error("Method not implemented.");
  }
  setConfig(config) {
    this._config = config;
    if (config.event) {
      this.calculateZoomOrigin(event);
    }
  }
  onAnimationStart(event2) {
    this.isAnimating = true;
    this.animationStateChanged.emit(event2);
  }
  onAnimationDone(event2) {
    if (event2.toState === "enter") {
      this.trapFocus();
    } else if (event2.toState === "exit") {
      this.restoreFocus();
    }
    this.animationStateChanged.emit(event2);
    this.isAnimating = false;
  }
  startExitAnimation() {
    this.state = "exit";
    this.changeDetector.markForCheck();
  }
  /**
   * Calculate origin used in the `zoomFadeInFrom()`
   * for animation purpose
   */
  calculateZoomOrigin(event2) {
    if (!event2) {
      return;
    }
    const clientX = event2.clientX;
    const clientY = event2.clientY;
    const wh = window.innerWidth / 2;
    const hh = window.innerHeight / 2;
    const x = clientX - wh;
    const y = clientY - hh;
    const ox = clientX / window.innerWidth;
    const oy = clientY / window.innerHeight;
    this.params.x = `${x}px`;
    this.params.y = `${y}px`;
    this.params.ox = `${ox * 100}%`;
    this.params.oy = `${oy * 100}%`;
    this.params.scale = 0;
    return;
  }
  /**
   * Save the focused element before dialog was open
   */
  savePreviouslyFocusedElement() {
    if (this.document) {
      this.elementFocusedBeforeDialogWasOpened = this.document.activeElement;
      Promise.resolve().then(() => this.elementRef.nativeElement.focus());
    }
  }
  trapFocus() {
    if (!this.focusTrap) {
      this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
    }
    if (this._config.autoFocus) {
      this.focusTrap.focusInitialElementWhenReady();
    }
  }
  restoreFocus() {
    const toFocus = this.elementFocusedBeforeDialogWasOpened;
    if (toFocus && typeof toFocus.focus === "function") {
      toFocus.focus();
    }
    if (this.focusTrap) {
      this.focusTrap.destroy();
    }
  }
  static {
    this.ɵfac = function OwlDialogContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDialogContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlDialogContainerComponent,
      selectors: [["owl-dialog-container"]],
      viewQuery: function OwlDialogContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(CdkPortalOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
        }
      },
      hostVars: 8,
      hostBindings: function OwlDialogContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵsyntheticHostListener("@slideModal.start", function OwlDialogContainerComponent_animation_slideModal_start_HostBindingHandler($event) {
            return ctx.onAnimationStart($event);
          })("@slideModal.done", function OwlDialogContainerComponent_animation_slideModal_done_HostBindingHandler($event) {
            return ctx.onAnimationDone($event);
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@slideModal", ctx.owlDialogContainerAnimation);
          ɵɵattribute("tabindex", ctx.owlDialogContainerTabIndex)("id", ctx.owlDialogContainerId)("role", ctx.owlDialogContainerRole)("aria-labelledby", ctx.owlDialogContainerAriaLabelledby)("aria-describedby", ctx.owlDialogContainerAriaDescribedby);
          ɵɵclassProp("owl-dialog-container", ctx.owlDialogContainerClass);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 0,
      consts: [[3, "cdkPortalOutlet"]],
      template: function OwlDialogContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OwlDialogContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      dependencies: [CdkPortalOutlet],
      encapsulation: 2,
      data: {
        animation: [trigger("slideModal", [transition("void => enter", [style(zoomFadeInFrom), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)", style("*")), animate("150ms", keyframes([style({
          transform: "scale(1)",
          offset: 0
        }), style({
          transform: "scale(1.05)",
          offset: 0.3
        }), style({
          transform: "scale(.95)",
          offset: 0.8
        }), style({
          transform: "scale(1)",
          offset: 1
        })])), animateChild()], {
          params: {
            x: "0px",
            y: "0px",
            ox: "50%",
            oy: "50%",
            scale: 1
          }
        }), transition("enter => exit", [animateChild(), animate(200, style(zoomFadeIn))], {
          params: {
            x: "0px",
            y: "0px",
            ox: "50%",
            oy: "50%"
          }
        })])]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDialogContainerComponent, [{
    type: Component,
    args: [{
      selector: "owl-dialog-container",
      standalone: false,
      animations: [trigger("slideModal", [transition("void => enter", [style(zoomFadeInFrom), animate("300ms cubic-bezier(0.35, 0, 0.25, 1)", style("*")), animate("150ms", keyframes([style({
        transform: "scale(1)",
        offset: 0
      }), style({
        transform: "scale(1.05)",
        offset: 0.3
      }), style({
        transform: "scale(.95)",
        offset: 0.8
      }), style({
        transform: "scale(1)",
        offset: 1
      })])), animateChild()], {
        params: {
          x: "0px",
          y: "0px",
          ox: "50%",
          oy: "50%",
          scale: 1
        }
      }), transition("enter => exit", [animateChild(), animate(200, style(zoomFadeIn))], {
        params: {
          x: "0px",
          y: "0px",
          ox: "50%",
          oy: "50%"
        }
      })])],
      host: {
        "(@slideModal.start)": "onAnimationStart($event)",
        "(@slideModal.done)": "onAnimationDone($event)",
        "[class.owl-dialog-container]": "owlDialogContainerClass",
        "[attr.tabindex]": "owlDialogContainerTabIndex",
        "[attr.id]": "owlDialogContainerId",
        "[attr.role]": "owlDialogContainerRole",
        "[attr.aria-labelledby]": "owlDialogContainerAriaLabelledby",
        "[attr.aria-describedby]": "owlDialogContainerAriaDescribedby",
        "[@slideModal]": "owlDialogContainerAnimation"
      },
      template: "<ng-template [cdkPortalOutlet]></ng-template>\n"
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
function extendObject(dest, ...sources) {
  if (dest == null) {
    throw TypeError("Cannot convert undefined or null to object");
  }
  for (const source of sources) {
    if (source != null) {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }
    }
  }
  return dest;
}
var OWL_DIALOG_DATA = new InjectionToken("OwlDialogData");
var OWL_DIALOG_SCROLL_STRATEGY = new InjectionToken("owl-dialog-scroll-strategy");
function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  const fn = () => overlay.scrollStrategies.block();
  return fn;
}
var OWL_DIALOG_SCROLL_STRATEGY_PROVIDER = {
  provide: OWL_DIALOG_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OWL_DIALOG_DEFAULT_OPTIONS = new InjectionToken("owl-dialog-default-options");
var OwlDialogService = class _OwlDialogService {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this.parentDialog ? this.parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get beforeOpen() {
    return this.parentDialog ? this.parentDialog.beforeOpen : this._beforeOpenAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpen() {
    return this.parentDialog ? this.parentDialog.afterOpen : this._afterOpenAtThisLevel;
  }
  get _afterAllClosed() {
    const parent = this.parentDialog;
    return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
  }
  constructor(overlay, injector, location, scrollStrategy, defaultOptions, parentDialog, overlayContainer) {
    this.overlay = overlay;
    this.injector = injector;
    this.location = location;
    this.defaultOptions = defaultOptions;
    this.parentDialog = parentDialog;
    this.overlayContainer = overlayContainer;
    this.ariaHiddenElements = /* @__PURE__ */ new Map();
    this._openDialogsAtThisLevel = [];
    this._beforeOpenAtThisLevel = new Subject();
    this._afterOpenAtThisLevel = new Subject();
    this._afterAllClosedAtThisLevel = new Subject();
    this.afterAllClosed = defer(() => this._openDialogsAtThisLevel.length ? this._afterAllClosed : this._afterAllClosed.pipe(startWith(void 0)));
    this.scrollStrategy = scrollStrategy;
    if (!parentDialog && location) {
      location.subscribe(() => this.closeAll());
    }
  }
  open(componentOrTemplateRef, config) {
    config = applyConfigDefaults(config, this.defaultOptions);
    if (config.id && this.getDialogById(config.id)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayRef = this.createOverlay(config);
    const dialogContainer = this.attachDialogContainer(overlayRef, config);
    const dialogRef = this.attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
    if (!this.openDialogs.length) {
      this.hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.afterClosed().subscribe(() => this.removeOpenDialog(dialogRef));
    this.beforeOpen.next(dialogRef);
    this.afterOpen.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    let i = this.openDialogs.length;
    while (i--) {
      this.openDialogs[i].close();
    }
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
    const dialogRef = new OwlDialogRef(overlayRef, dialogContainer, config.id, this.location);
    if (config.hasBackdrop) {
      overlayRef.backdropClick().subscribe(() => {
        if (!dialogRef.disableClose) {
          dialogRef.close();
        }
      });
    }
    if (componentOrTemplateRef instanceof TemplateRef) {
    } else {
      const injector = this.createInjector(config, dialogRef, dialogContainer);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, void 0, injector));
      dialogRef.componentInstance = contentRef.instance;
    }
    dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
    return dialogRef;
  }
  createInjector(config, dialogRef, dialogContainer) {
    const userInjector = config?.viewContainerRef?.injector;
    const providers = [{
      provide: OwlDialogRef,
      useValue: dialogRef
    }, {
      provide: OwlDialogContainerComponent,
      useValue: dialogContainer
    }, {
      provide: OWL_DIALOG_DATA,
      useValue: config?.data
    }];
    return Injector.create({
      providers,
      parent: userInjector || this.injector
    });
  }
  createOverlay(config) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }
  attachDialogContainer(overlayRef, config) {
    const containerPortal = new ComponentPortal(OwlDialogContainerComponent, config.viewContainerRef);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.setConfig(config);
    return containerRef.instance;
  }
  getOverlayConfig(dialogConfig) {
    const state2 = new OverlayConfig({
      positionStrategy: this.overlay.position().global(),
      scrollStrategy: dialogConfig.scrollStrategy || this.scrollStrategy(),
      panelClass: dialogConfig.paneClass,
      hasBackdrop: dialogConfig.hasBackdrop,
      minWidth: dialogConfig.minWidth,
      minHeight: dialogConfig.minHeight,
      maxWidth: dialogConfig.maxWidth,
      maxHeight: dialogConfig.maxHeight
    });
    if (dialogConfig.backdropClass) {
      state2.backdropClass = dialogConfig.backdropClass;
    }
    return state2;
  }
  removeOpenDialog(dialogRef) {
    const index = this._openDialogsAtThisLevel.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this.ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this.ariaHiddenElements.clear();
        this._afterAllClosed.next();
      }
    }
  }
  /**
   * Hides all of the content that isn't an overlay from assistive technology.
   */
  hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this.overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this.ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  static {
    this.ɵfac = function OwlDialogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDialogService)(ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(Location, 8), ɵɵinject(OWL_DIALOG_SCROLL_STRATEGY), ɵɵinject(OWL_DIALOG_DEFAULT_OPTIONS, 8), ɵɵinject(_OwlDialogService, 12), ɵɵinject(OverlayContainer));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OwlDialogService,
      factory: _OwlDialogService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDialogService, [{
    type: Injectable
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: Location,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [OWL_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: OwlDialogService,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }], null);
})();
function applyConfigDefaults(config, defaultOptions) {
  return extendObject(new OwlDialogConfig(), config, defaultOptions);
}
var OWL_DTPICKER_SCROLL_STRATEGY = new InjectionToken("owl-dtpicker-scroll-strategy");
function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  const fn = () => overlay.scrollStrategies.block();
  return fn;
}
var OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER = {
  provide: OWL_DTPICKER_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OwlDateTimeComponent = class _OwlDateTimeComponent extends OwlDateTime {
  get startAt() {
    if (this._startAt) {
      return this._startAt;
    }
    if (this._dtInput) {
      if (this._dtInput.selectMode === "single") {
        return this._dtInput.value || null;
      } else if (this._dtInput.selectMode === "range" || this._dtInput.selectMode === "rangeFrom") {
        return this._dtInput.values[0] || null;
      } else if (this._dtInput.selectMode === "rangeTo") {
        return this._dtInput.values[1] || null;
      }
    } else {
      return null;
    }
  }
  set startAt(date) {
    this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
  }
  get endAt() {
    if (this._endAt) {
      return this._endAt;
    }
    if (this._dtInput) {
      if (this._dtInput.selectMode === "single") {
        return this._dtInput.value || null;
      } else if (this._dtInput.selectMode === "range" || this._dtInput.selectMode === "rangeFrom") {
        return this._dtInput.values[1] || null;
      }
    } else {
      return null;
    }
  }
  set endAt(date) {
    this._endAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
  }
  get pickerType() {
    return this._pickerType;
  }
  set pickerType(val) {
    if (val !== this._pickerType) {
      this._pickerType = val;
      if (this._dtInput) {
        this._dtInput.formatNativeInputValue();
      }
    }
  }
  get pickerMode() {
    return this._pickerMode;
  }
  set pickerMode(mode) {
    if (mode === "popup") {
      this._pickerMode = mode;
    } else {
      this._pickerMode = "dialog";
    }
  }
  get disabled() {
    return this._disabled === void 0 && this._dtInput ? this._dtInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    value = coerceBooleanProperty(value);
    if (value !== this._disabled) {
      this._disabled = value;
      this.disabledChange.next(value);
    }
  }
  get opened() {
    return this._opened;
  }
  set opened(val) {
    val ? this.open() : this.close();
  }
  get dtInput() {
    return this._dtInput;
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    this.changeDetector.markForCheck();
  }
  get selecteds() {
    return this._selecteds;
  }
  set selecteds(values) {
    this._selecteds = values;
    this.changeDetector.markForCheck();
  }
  /** The minimum selectable date. */
  get minDateTime() {
    return this._dtInput && this._dtInput.min;
  }
  /** The maximum selectable date. */
  get maxDateTime() {
    return this._dtInput && this._dtInput.max;
  }
  get dateTimeFilter() {
    return this._dtInput && this._dtInput.dateTimeFilter;
  }
  get selectMode() {
    return this._dtInput.selectMode;
  }
  get isInSingleMode() {
    return this._dtInput.isInSingleMode;
  }
  get isInRangeMode() {
    return this._dtInput.isInRangeMode;
  }
  constructor(overlay, viewContainerRef, dialogService, ngZone, changeDetector, dateTimeAdapter, defaultScrollStrategy, dateTimeFormats, document2) {
    super(dateTimeAdapter, dateTimeFormats);
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.dialogService = dialogService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this.document = document2;
    this.backdropClass = [];
    this.panelClass = [];
    this._pickerType = "both";
    this._pickerMode = "popup";
    this._opened = false;
    this.afterPickerClosed = new EventEmitter();
    this.beforePickerOpen = new EventEmitter();
    this.afterPickerOpen = new EventEmitter();
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.dateSelected = new EventEmitter();
    this.confirmSelectedChange = new EventEmitter();
    this.disabledChange = new EventEmitter();
    this.dtInputSub = Subscription.EMPTY;
    this.hidePickerStreamSub = Subscription.EMPTY;
    this.confirmSelectedStreamSub = Subscription.EMPTY;
    this.pickerOpenedStreamSub = Subscription.EMPTY;
    this.pickerBeforeOpenedStreamSub = Subscription.EMPTY;
    this.focusedElementBeforeOpen = null;
    this._selecteds = [];
    this.defaultScrollStrategy = defaultScrollStrategy;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.close();
    this.dtInputSub.unsubscribe();
    this.disabledChange.complete();
    if (this.popupRef) {
      this.popupRef.dispose();
    }
  }
  registerInput(input) {
    if (this._dtInput) {
      throw Error("A Owl DateTimePicker can only be associated with a single input.");
    }
    this._dtInput = input;
    this.dtInputSub = this._dtInput.valueChange.subscribe((value) => {
      if (Array.isArray(value)) {
        this.selecteds = value;
      } else {
        this.selected = value;
      }
    });
  }
  open() {
    if (this._opened || this.disabled) {
      return;
    }
    if (!this._dtInput) {
      throw Error("Attempted to open an DateTimePicker with no associated input.");
    }
    if (this.document) {
      this.focusedElementBeforeOpen = this.document.activeElement;
    }
    if (this.isInSingleMode) {
      this.selected = this._dtInput.value;
    } else if (this.isInRangeMode) {
      this.selecteds = this._dtInput.values;
    }
    if (this.selected && this.pickerType !== "calendar" && this._startAt) {
      this.selected = this.dateTimeAdapter.createDate(this.dateTimeAdapter.getYear(this.selected), this.dateTimeAdapter.getMonth(this.selected), this.dateTimeAdapter.getDate(this.selected), this.dateTimeAdapter.getHours(this._startAt), this.dateTimeAdapter.getMinutes(this._startAt), this.dateTimeAdapter.getSeconds(this._startAt));
    }
    this.pickerMode === "dialog" ? this.openAsDialog() : this.openAsPopup();
    this.pickerContainer.picker = this;
    this.hidePickerStreamSub = this.pickerContainer.hidePickerStream.subscribe(() => {
      this.close();
    });
    this.confirmSelectedStreamSub = this.pickerContainer.confirmSelectedStream.subscribe((event2) => {
      this.confirmSelect(event2);
    });
  }
  /**
   * Selects the given date
   */
  select(date) {
    if (Array.isArray(date)) {
      this.selecteds = [...date];
    } else {
      this.selected = date;
    }
    if (this.pickerMode !== "dialog" && this.pickerType === "calendar" && (this.selectMode === "single" && this.selected || this.selectMode === "rangeFrom" && this.selecteds[0] || this.selectMode === "rangeTo" && this.selecteds[1] || this.selectMode === "range" && this.selecteds[0] && this.selecteds[1])) {
      this.confirmSelect();
    }
  }
  /**
   * Emits the selected year in multi-year view
   * */
  selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /**
   * Emits selected month in year view
   * */
  selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /**
   * Emits the selected date
   * */
  selectDate(normalizedDate) {
    this.dateSelected.emit(normalizedDate);
  }
  /**
   * Hide the picker
   */
  close() {
    if (!this._opened) {
      return;
    }
    if (this.popupRef && this.popupRef.hasAttached()) {
      this.popupRef.detach();
    }
    if (this.pickerContainerPortal && this.pickerContainerPortal.isAttached) {
      this.pickerContainerPortal.detach();
    }
    if (this.hidePickerStreamSub) {
      this.hidePickerStreamSub.unsubscribe();
      this.hidePickerStreamSub = null;
    }
    if (this.confirmSelectedStreamSub) {
      this.confirmSelectedStreamSub.unsubscribe();
      this.confirmSelectedStreamSub = null;
    }
    if (this.pickerBeforeOpenedStreamSub) {
      this.pickerBeforeOpenedStreamSub.unsubscribe();
      this.pickerBeforeOpenedStreamSub = null;
    }
    if (this.pickerOpenedStreamSub) {
      this.pickerOpenedStreamSub.unsubscribe();
      this.pickerOpenedStreamSub = null;
    }
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        const selected = this.selected || this.selecteds;
        this.afterPickerClosed.emit(selected);
        this.focusedElementBeforeOpen = null;
      }
    };
    if (this.focusedElementBeforeOpen && typeof this.focusedElementBeforeOpen.focus === "function") {
      this.focusedElementBeforeOpen.focus();
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /**
   * Confirm the selected value
   */
  confirmSelect(event2) {
    if (this.isInSingleMode) {
      const selected = this.selected || this.startAt || this.dateTimeAdapter.now();
      this.confirmSelectedChange.emit(selected);
    } else if (this.isInRangeMode) {
      this.confirmSelectedChange.emit(this.selecteds);
    }
    this.close();
    return;
  }
  /**
   * Open the picker as a dialog
   */
  openAsDialog() {
    this.dialogRef = this.dialogService.open(OwlDateTimeContainerComponent, {
      autoFocus: false,
      backdropClass: ["cdk-overlay-dark-backdrop", ...coerceArray(this.backdropClass)],
      paneClass: ["owl-dt-dialog", ...coerceArray(this.panelClass)],
      viewContainerRef: this.viewContainerRef,
      scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy()
    });
    this.pickerContainer = this.dialogRef.componentInstance;
    this.dialogRef.beforeOpen().subscribe(() => {
      this.beforePickerOpen.emit(null);
    });
    this.dialogRef.afterOpen().subscribe(() => {
      this.afterPickerOpen.emit(null);
      this._opened = true;
    });
    this.dialogRef.afterClosed().subscribe(() => this.close());
  }
  /**
   * Open the picker as popup
   */
  openAsPopup() {
    if (!this.pickerContainerPortal) {
      this.pickerContainerPortal = new ComponentPortal(OwlDateTimeContainerComponent, this.viewContainerRef);
    }
    if (!this.popupRef) {
      this.createPopup();
    }
    if (!this.popupRef.hasAttached()) {
      const componentRef = this.popupRef.attach(this.pickerContainerPortal);
      this.pickerContainer = componentRef.instance;
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this.popupRef.updatePosition();
      });
      this.pickerBeforeOpenedStreamSub = this.pickerContainer.beforePickerOpenedStream.pipe(take(1)).subscribe(() => {
        this.beforePickerOpen.emit(null);
      });
      this.pickerOpenedStreamSub = this.pickerContainer.pickerOpenedStream.pipe(take(1)).subscribe(() => {
        this.afterPickerOpen.emit(null);
        this._opened = true;
      });
    }
  }
  createPopup() {
    const overlayConfig = new OverlayConfig({
      positionStrategy: this.createPopupPositionStrategy(),
      hasBackdrop: true,
      backdropClass: ["cdk-overlay-transparent-backdrop", ...coerceArray(this.backdropClass)],
      scrollStrategy: this.scrollStrategy || this.defaultScrollStrategy(),
      panelClass: ["owl-dt-popup", ...coerceArray(this.panelClass)]
    });
    this.popupRef = this.overlay.create(overlayConfig);
    merge(this.popupRef.backdropClick(), this.popupRef.detachments(), this.popupRef.keydownEvents().pipe(filter((event2) => event2.keyCode === ESCAPE || this._dtInput && event2.altKey && event2.keyCode === UP_ARROW))).subscribe(() => this.close());
  }
  /**
   * Create the popup PositionStrategy.
   * */
  createPopupPositionStrategy() {
    return this.overlay.position().flexibleConnectedTo(this._dtInput.elementRef).withTransformOriginOn(".owl-dt-container").withFlexibleDimensions(false).withPush(false).withPositions([{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom"
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "top",
      offsetY: -176
    }, {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "top",
      offsetY: -352
    }]);
  }
  static {
    this.ɵfac = function OwlDateTimeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTimeComponent)(ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(OwlDialogService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OWL_DTPICKER_SCROLL_STRATEGY), ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8), ɵɵdirectiveInject(DOCUMENT, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlDateTimeComponent,
      selectors: [["owl-date-time"]],
      inputs: {
        backdropClass: "backdropClass",
        panelClass: "panelClass",
        startAt: "startAt",
        endAt: "endAt",
        pickerType: "pickerType",
        pickerMode: "pickerMode",
        disabled: "disabled",
        opened: "opened",
        scrollStrategy: "scrollStrategy"
      },
      outputs: {
        afterPickerClosed: "afterPickerClosed",
        beforePickerOpen: "beforePickerOpen",
        afterPickerOpen: "afterPickerOpen",
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        dateSelected: "dateSelected"
      },
      exportAs: ["owlDateTime"],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 0,
      vars: 0,
      template: function OwlDateTimeComponent_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTimeComponent, [{
    type: Component,
    args: [{
      selector: "owl-date-time",
      exportAs: "owlDateTime",
      standalone: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      template: ""
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: OwlDialogService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [OWL_DTPICKER_SCROLL_STRATEGY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_FORMATS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    backdropClass: [{
      type: Input
    }],
    panelClass: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    endAt: [{
      type: Input
    }],
    pickerType: [{
      type: Input
    }],
    pickerMode: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    scrollStrategy: [{
      type: Input
    }],
    afterPickerClosed: [{
      type: Output
    }],
    beforePickerOpen: [{
      type: Output
    }],
    afterPickerOpen: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    dateSelected: [{
      type: Output
    }]
  });
})();
var OWL_DATETIME_VALUE_ACCESSOR$1 = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OwlDateTimeInputDirective),
  multi: true
};
var OWL_DATETIME_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => OwlDateTimeInputDirective),
  multi: true
};
var OwlDateTimeInputDirective = class _OwlDateTimeInputDirective {
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value === "" || value;
    this.validatorOnChange();
  }
  /**
   * The date time picker that this input is associated with.
   * */
  set owlDateTime(value) {
    this.registerDateTimePicker(value);
  }
  /**
   * A function to filter date time
   */
  set owlDateTimeFilter(filter2) {
    this._dateTimeFilter = filter2;
    this.validatorOnChange();
  }
  get dateTimeFilter() {
    return this._dateTimeFilter;
  }
  get disabled() {
    return !!this._disabled;
  }
  set disabled(value) {
    const newValue = coerceBooleanProperty(value);
    const element = this.elmRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.disabledChange.emit(newValue);
    }
    if (newValue && element.blur) {
      element.blur();
    }
  }
  get min() {
    return this._min;
  }
  set min(value) {
    this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
    this.validatorOnChange();
  }
  get max() {
    return this._max;
  }
  set max(value) {
    this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
    this.validatorOnChange();
  }
  get selectMode() {
    return this._selectMode;
  }
  set selectMode(mode) {
    if (mode !== "single" && mode !== "range" && mode !== "rangeFrom" && mode !== "rangeTo") {
      throw Error("OwlDateTime Error: invalid selectMode value!");
    }
    this._selectMode = mode;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    value = this.dateTimeAdapter.deserialize(value);
    this.lastValueValid = !value || this.dateTimeAdapter.isValid(value);
    value = this.getValidDate(value);
    const oldDate = this._value;
    this._value = value;
    this.formatNativeInputValue();
    if (!this.dateTimeAdapter.isEqual(oldDate, value)) {
      this.valueChange.emit(value);
    }
  }
  get values() {
    return this._values;
  }
  set values(values) {
    if (values && values.length > 0) {
      this._values = values.map((v) => {
        v = this.dateTimeAdapter.deserialize(v);
        return this.getValidDate(v);
      });
      this.lastValueValid = (!this._values[0] || this.dateTimeAdapter.isValid(this._values[0])) && (!this._values[1] || this.dateTimeAdapter.isValid(this._values[1]));
    } else {
      this._values = [];
      this.lastValueValid = true;
    }
    this.formatNativeInputValue();
    this.valueChange.emit(this._values);
  }
  get elementRef() {
    return this.elmRef;
  }
  get isInSingleMode() {
    return this._selectMode === "single";
  }
  get isInRangeMode() {
    return this._selectMode === "range" || this._selectMode === "rangeFrom" || this._selectMode === "rangeTo";
  }
  get owlDateTimeInputAriaHaspopup() {
    return true;
  }
  get owlDateTimeInputAriaOwns() {
    return this.dtPicker.opened && this.dtPicker.id || null;
  }
  get minIso8601() {
    return this.min ? this.dateTimeAdapter.toIso8601(this.min) : null;
  }
  get maxIso8601() {
    return this.max ? this.dateTimeAdapter.toIso8601(this.max) : null;
  }
  get owlDateTimeInputDisabled() {
    return this.disabled;
  }
  constructor(elmRef, renderer, dateTimeAdapter, dateTimeFormats) {
    this.elmRef = elmRef;
    this.renderer = renderer;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this._selectMode = "single";
    this.rangeSeparator = "-";
    this._values = [];
    this.dateTimeChange = new EventEmitter();
    this.dateTimeInput = new EventEmitter();
    this.dtPickerSub = Subscription.EMPTY;
    this.localeSub = Subscription.EMPTY;
    this.lastValueValid = true;
    this.onModelChange = () => {
    };
    this.onModelTouched = () => {
    };
    this.validatorOnChange = () => {
    };
    this.parseValidator = () => {
      return this.lastValueValid ? null : {
        owlDateTimeParse: {
          text: this.elmRef.nativeElement.value
        }
      };
    };
    this.minValidator = (control) => {
      if (this.isInSingleMode) {
        const controlValue = this.getValidDate(this.dateTimeAdapter.deserialize(control.value));
        return !this.min || !controlValue || this.dateTimeAdapter.compare(this.min, controlValue) <= 0 ? null : {
          owlDateTimeMin: {
            min: this.min,
            actual: controlValue
          }
        };
      } else if (this.isInRangeMode && control.value) {
        const controlValueFrom = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[0]));
        const controlValueTo = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[1]));
        return !this.min || !controlValueFrom || !controlValueTo || this.dateTimeAdapter.compare(this.min, controlValueFrom) <= 0 ? null : {
          owlDateTimeMin: {
            min: this.min,
            actual: [controlValueFrom, controlValueTo]
          }
        };
      }
    };
    this.maxValidator = (control) => {
      if (this.isInSingleMode) {
        const controlValue = this.getValidDate(this.dateTimeAdapter.deserialize(control.value));
        return !this.max || !controlValue || this.dateTimeAdapter.compare(this.max, controlValue) >= 0 ? null : {
          owlDateTimeMax: {
            max: this.max,
            actual: controlValue
          }
        };
      } else if (this.isInRangeMode && control.value) {
        const controlValueFrom = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[0]));
        const controlValueTo = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[1]));
        return !this.max || !controlValueFrom || !controlValueTo || this.dateTimeAdapter.compare(this.max, controlValueTo) >= 0 ? null : {
          owlDateTimeMax: {
            max: this.max,
            actual: [controlValueFrom, controlValueTo]
          }
        };
      }
    };
    this.filterValidator = (control) => {
      const controlValue = this.getValidDate(this.dateTimeAdapter.deserialize(control.value));
      return !this._dateTimeFilter || !controlValue || this._dateTimeFilter(controlValue) ? null : {
        owlDateTimeFilter: true
      };
    };
    this.rangeValidator = (control) => {
      if (this.isInSingleMode || !control.value) {
        return null;
      }
      const controlValueFrom = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[0]));
      const controlValueTo = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[1]));
      return !controlValueFrom || !controlValueTo || this.dateTimeAdapter.compare(controlValueFrom, controlValueTo) <= 0 ? null : {
        owlDateTimeRange: true
      };
    };
    this.requiredRangeValidator = (control) => {
      if (this.isInSingleMode || !control.value || !this.required) {
        return null;
      }
      const controlValueFrom = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[0]));
      const controlValueTo = this.getValidDate(this.dateTimeAdapter.deserialize(control.value[1]));
      return !controlValueFrom || !controlValueTo ? {
        owlRequiredDateTimeRange: [controlValueFrom, controlValueTo]
      } : null;
    };
    this.validator = Validators.compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator, this.rangeValidator, this.requiredRangeValidator]);
    this.valueChange = new EventEmitter();
    this.disabledChange = new EventEmitter();
    if (!this.dateTimeAdapter) {
      throw Error(`OwlDateTimePicker: No provider found for DateTimePicker. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.`);
    }
    if (!this.dateTimeFormats) {
      throw Error(`OwlDateTimePicker: No provider found for OWL_DATE_TIME_FORMATS. You must import one of the following modules at your application root: OwlNativeDateTimeModule, OwlMomentDateTimeModule, or provide a custom implementation.`);
    }
    this.localeSub = this.dateTimeAdapter.localeChanges.subscribe(() => {
      this.value = this.value;
    });
  }
  ngOnInit() {
    if (!this.dtPicker) {
      throw Error(`OwlDateTimePicker: the picker input doesn't have any associated owl-date-time component`);
    }
  }
  ngAfterContentInit() {
    this.dtPickerSub = this.dtPicker.confirmSelectedChange.subscribe((selecteds) => {
      if (Array.isArray(selecteds)) {
        this.values = selecteds;
      } else {
        this.value = selecteds;
      }
      this.onModelChange(selecteds);
      this.onModelTouched();
      this.dateTimeChange.emit({
        source: this,
        value: selecteds,
        input: this.elmRef.nativeElement
      });
      this.dateTimeInput.emit({
        source: this,
        value: selecteds,
        input: this.elmRef.nativeElement
      });
    });
  }
  ngOnDestroy() {
    this.dtPickerSub.unsubscribe();
    this.localeSub.unsubscribe();
    this.valueChange.complete();
    this.disabledChange.complete();
  }
  writeValue(value) {
    if (this.isInSingleMode) {
      this.value = value;
    } else {
      this.values = value;
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(c) {
    return this.validator ? this.validator(c) : null;
  }
  registerOnValidatorChange(fn) {
    this.validatorOnChange = fn;
  }
  /**
   * Open the picker when user hold alt + DOWN_ARROW
   * */
  handleKeydownOnHost(event2) {
    if (event2.altKey && event2.keyCode === DOWN_ARROW) {
      this.dtPicker.open();
      event2.preventDefault();
    }
  }
  handleBlurOnHost(event2) {
    this.onModelTouched();
  }
  handleInputOnHost(event2) {
    const value = event2.target.value;
    if (this._selectMode === "single") {
      this.changeInputInSingleMode(value);
    } else if (this._selectMode === "range") {
      this.changeInputInRangeMode(value);
    } else {
      this.changeInputInRangeFromToMode(value);
    }
  }
  handleChangeOnHost(event2) {
    let v;
    if (this.isInSingleMode) {
      v = this.value;
    } else if (this.isInRangeMode) {
      v = this.values;
    }
    this.dateTimeChange.emit({
      source: this,
      value: v,
      input: this.elmRef.nativeElement
    });
  }
  /**
   * Set the native input property 'value'
   */
  formatNativeInputValue() {
    if (this.isInSingleMode) {
      this.renderer.setProperty(this.elmRef.nativeElement, "value", this._value ? this.dateTimeAdapter.format(this._value, this.dtPicker.formatString) : "");
    } else if (this.isInRangeMode) {
      if (this._values && this.values.length > 0) {
        const from = this._values[0];
        const to = this._values[1];
        const fromFormatted = from ? this.dateTimeAdapter.format(from, this.dtPicker.formatString) : "";
        const toFormatted = to ? this.dateTimeAdapter.format(to, this.dtPicker.formatString) : "";
        if (!fromFormatted && !toFormatted) {
          this.renderer.setProperty(this.elmRef.nativeElement, "value", null);
        } else {
          if (this._selectMode === "range") {
            this.renderer.setProperty(this.elmRef.nativeElement, "value", fromFormatted + " " + this.rangeSeparator + " " + toFormatted);
          } else if (this._selectMode === "rangeFrom") {
            this.renderer.setProperty(this.elmRef.nativeElement, "value", fromFormatted);
          } else if (this._selectMode === "rangeTo") {
            this.renderer.setProperty(this.elmRef.nativeElement, "value", toFormatted);
          }
        }
      } else {
        this.renderer.setProperty(this.elmRef.nativeElement, "value", "");
      }
    }
    return;
  }
  /**
   * Register the relationship between this input and its picker component
   */
  registerDateTimePicker(picker) {
    if (picker) {
      this.dtPicker = picker;
      this.dtPicker.registerInput(this);
    }
  }
  /**
   * Convert a given obj to a valid date object
   */
  getValidDate(obj) {
    return this.dateTimeAdapter.isDateInstance(obj) && this.dateTimeAdapter.isValid(obj) ? obj : null;
  }
  /**
   * Convert a time string to a date-time string
   * When pickerType is 'timer', the value in the picker's input is a time string.
   * The dateTimeAdapter parse fn could not parse a time string to a Date Object.
   * Therefore we need this fn to convert a time string to a date-time string.
   */
  convertTimeStringToDateTimeString(timeString, dateTime) {
    if (timeString) {
      const v = dateTime || this.dateTimeAdapter.now();
      const dateString = this.dateTimeAdapter.format(v, this.dateTimeFormats.datePickerInput);
      return dateString + " " + timeString;
    } else {
      return null;
    }
  }
  /**
   * Handle input change in single mode
   */
  changeInputInSingleMode(inputValue) {
    let value = inputValue;
    if (this.dtPicker.pickerType === "timer") {
      value = this.convertTimeStringToDateTimeString(value, this.value);
    }
    let result = this.dateTimeAdapter.parse(value, this.dateTimeFormats.parseInput);
    this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
    result = this.getValidDate(result);
    if (!this.isSameValue(result, this._value) || result === null) {
      this._value = result;
      this.valueChange.emit(result);
      this.onModelChange(result);
      this.dateTimeInput.emit({
        source: this,
        value: result,
        input: this.elmRef.nativeElement
      });
    }
  }
  /**
   * Handle input change in rangeFrom or rangeTo mode
   */
  changeInputInRangeFromToMode(inputValue) {
    const originalValue = this._selectMode === "rangeFrom" ? this._values[0] : this._values[1];
    if (this.dtPicker.pickerType === "timer") {
      inputValue = this.convertTimeStringToDateTimeString(inputValue, originalValue);
    }
    let result = this.dateTimeAdapter.parse(inputValue, this.dateTimeFormats.parseInput);
    this.lastValueValid = !result || this.dateTimeAdapter.isValid(result);
    result = this.getValidDate(result);
    if (this._selectMode === "rangeFrom" && this.isSameValue(result, this._values[0]) && result || this._selectMode === "rangeTo" && this.isSameValue(result, this._values[1]) && result) {
      return;
    }
    this._values = this._selectMode === "rangeFrom" ? [result, this._values[1]] : [this._values[0], result];
    this.valueChange.emit(this._values);
    this.onModelChange(this._values);
    this.dateTimeInput.emit({
      source: this,
      value: this._values,
      input: this.elmRef.nativeElement
    });
  }
  /**
   * Handle input change in range mode
   */
  changeInputInRangeMode(inputValue) {
    const selecteds = inputValue.split(this.rangeSeparator);
    let fromString = selecteds[0];
    let toString = selecteds[1];
    if (this.dtPicker.pickerType === "timer") {
      fromString = this.convertTimeStringToDateTimeString(fromString, this.values[0]);
      toString = this.convertTimeStringToDateTimeString(toString, this.values[1]);
    }
    let from = this.dateTimeAdapter.parse(fromString, this.dateTimeFormats.parseInput);
    let to = this.dateTimeAdapter.parse(toString, this.dateTimeFormats.parseInput);
    this.lastValueValid = (!from || this.dateTimeAdapter.isValid(from)) && (!to || this.dateTimeAdapter.isValid(to));
    from = this.getValidDate(from);
    to = this.getValidDate(to);
    if (!this.isSameValue(from, this._values[0]) || !this.isSameValue(to, this._values[1]) || from === null && to === null) {
      this._values = [from, to];
      this.valueChange.emit(this._values);
      this.onModelChange(this._values);
      this.dateTimeInput.emit({
        source: this,
        value: this._values,
        input: this.elmRef.nativeElement
      });
    }
  }
  /**
   * Check if the two value is the same
   */
  isSameValue(first, second) {
    if (first && second) {
      return this.dateTimeAdapter.compare(first, second) === 0;
    }
    return first === second;
  }
  static {
    this.ɵfac = function OwlDateTimeInputDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTimeInputDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _OwlDateTimeInputDirective,
      selectors: [["input", "owlDateTime", ""]],
      hostVars: 5,
      hostBindings: function OwlDateTimeInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function OwlDateTimeInputDirective_keydown_HostBindingHandler($event) {
            return ctx.handleKeydownOnHost($event);
          })("blur", function OwlDateTimeInputDirective_blur_HostBindingHandler($event) {
            return ctx.handleBlurOnHost($event);
          })("input", function OwlDateTimeInputDirective_input_HostBindingHandler($event) {
            return ctx.handleInputOnHost($event);
          })("change", function OwlDateTimeInputDirective_change_HostBindingHandler($event) {
            return ctx.handleChangeOnHost($event);
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.owlDateTimeInputDisabled);
          ɵɵattribute("aria-haspopup", ctx.owlDateTimeInputAriaHaspopup)("aria-owns", ctx.owlDateTimeInputAriaOwns)("min", ctx.minIso8601)("max", ctx.maxIso8601);
        }
      },
      inputs: {
        required: "required",
        owlDateTime: "owlDateTime",
        owlDateTimeFilter: "owlDateTimeFilter",
        _disabled: "_disabled",
        min: "min",
        max: "max",
        selectMode: "selectMode",
        rangeSeparator: "rangeSeparator",
        value: "value",
        values: "values"
      },
      outputs: {
        dateTimeChange: "dateTimeChange",
        dateTimeInput: "dateTimeInput"
      },
      exportAs: ["owlDateTimeInput"],
      standalone: false,
      features: [ɵɵProvidersFeature([OWL_DATETIME_VALUE_ACCESSOR$1, OWL_DATETIME_VALIDATORS])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTimeInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[owlDateTime]",
      exportAs: "owlDateTimeInput",
      standalone: false,
      host: {
        "(keydown)": "handleKeydownOnHost($event)",
        "(blur)": "handleBlurOnHost($event)",
        "(input)": "handleInputOnHost($event)",
        "(change)": "handleChangeOnHost($event)",
        "[attr.aria-haspopup]": "owlDateTimeInputAriaHaspopup",
        "[attr.aria-owns]": "owlDateTimeInputAriaOwns",
        "[attr.min]": "minIso8601",
        "[attr.max]": "maxIso8601",
        "[disabled]": "owlDateTimeInputDisabled"
      },
      providers: [OWL_DATETIME_VALUE_ACCESSOR$1, OWL_DATETIME_VALIDATORS]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_FORMATS]
    }]
  }], {
    required: [{
      type: Input
    }],
    owlDateTime: [{
      type: Input
    }],
    owlDateTimeFilter: [{
      type: Input
    }],
    _disabled: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    selectMode: [{
      type: Input
    }],
    rangeSeparator: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    values: [{
      type: Input
    }],
    dateTimeChange: [{
      type: Output
    }],
    dateTimeInput: [{
      type: Output
    }]
  });
})();
var NumberFixedLenPipe = class _NumberFixedLenPipe {
  transform(num, len) {
    const number = Math.floor(num);
    const length = Math.floor(len);
    if (num === null || isNaN(number) || isNaN(length)) {
      return num;
    }
    let numString = number.toString();
    while (numString.length < length) {
      numString = "0" + numString;
    }
    return numString;
  }
  static {
    this.ɵfac = function NumberFixedLenPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NumberFixedLenPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "numberFixedLen",
      type: _NumberFixedLenPipe,
      pure: true,
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberFixedLenPipe, [{
    type: Pipe,
    args: [{
      name: "numberFixedLen",
      standalone: false
    }]
  }], null, null);
})();
var OWL_DATETIME_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OwlDateTimeInlineComponent),
  multi: true
};
var OwlDateTimeInlineComponent = class _OwlDateTimeInlineComponent extends OwlDateTime {
  get pickerType() {
    return this._pickerType;
  }
  set pickerType(val) {
    if (val !== this._pickerType) {
      this._pickerType = val;
    }
  }
  get disabled() {
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  get selectMode() {
    return this._selectMode;
  }
  set selectMode(mode) {
    if (mode !== "single" && mode !== "range" && mode !== "rangeFrom" && mode !== "rangeTo") {
      throw Error("OwlDateTime Error: invalid selectMode value!");
    }
    this._selectMode = mode;
  }
  get startAt() {
    if (this._startAt) {
      return this._startAt;
    }
    if (this.selectMode === "single") {
      return this.value || null;
    } else if (this.selectMode === "range" || this.selectMode === "rangeFrom") {
      return this.values[0] || null;
    } else if (this.selectMode === "rangeTo") {
      return this.values[1] || null;
    } else {
      return null;
    }
  }
  set startAt(date) {
    this._startAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
  }
  get endAt() {
    if (this._endAt) {
      return this._endAt;
    }
    if (this.selectMode === "single") {
      return this.value || null;
    } else if (this.selectMode === "range" || this.selectMode === "rangeFrom") {
      return this.values[1] || null;
    } else {
      return null;
    }
  }
  set endAt(date) {
    this._endAt = this.getValidDate(this.dateTimeAdapter.deserialize(date));
  }
  get dateTimeFilter() {
    return this._dateTimeFilter;
  }
  set dateTimeFilter(filter2) {
    this._dateTimeFilter = filter2;
  }
  get minDateTime() {
    return this._min || null;
  }
  set minDateTime(value) {
    this._min = this.getValidDate(this.dateTimeAdapter.deserialize(value));
    this.changeDetector.markForCheck();
  }
  get maxDateTime() {
    return this._max || null;
  }
  set maxDateTime(value) {
    this._max = this.getValidDate(this.dateTimeAdapter.deserialize(value));
    this.changeDetector.markForCheck();
  }
  get value() {
    return this._value;
  }
  set value(value) {
    value = this.dateTimeAdapter.deserialize(value);
    value = this.getValidDate(value);
    this._value = value;
    this.selected = value;
  }
  get values() {
    return this._values;
  }
  set values(values) {
    if (values && values.length > 0) {
      values = values.map((v) => {
        v = this.dateTimeAdapter.deserialize(v);
        v = this.getValidDate(v);
        return v ? this.dateTimeAdapter.clone(v) : null;
      });
      this._values = [...values];
      this.selecteds = [...values];
    } else {
      this._values = [];
      this.selecteds = [];
    }
  }
  get selected() {
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    this.changeDetector.markForCheck();
  }
  get selecteds() {
    return this._selecteds;
  }
  set selecteds(values) {
    this._selecteds = values;
    this.changeDetector.markForCheck();
  }
  get opened() {
    return true;
  }
  get pickerMode() {
    return "inline";
  }
  get isInSingleMode() {
    return this._selectMode === "single";
  }
  get isInRangeMode() {
    return this._selectMode === "range" || this._selectMode === "rangeFrom" || this._selectMode === "rangeTo";
  }
  get owlDTInlineClass() {
    return true;
  }
  constructor(changeDetector, dateTimeAdapter, dateTimeFormats) {
    super(dateTimeAdapter, dateTimeFormats);
    this.changeDetector = changeDetector;
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeFormats = dateTimeFormats;
    this._pickerType = "both";
    this._disabled = false;
    this._selectMode = "single";
    this._values = [];
    this.yearSelected = new EventEmitter();
    this.monthSelected = new EventEmitter();
    this.dateSelected = new EventEmitter();
    this._selecteds = [];
    this.onModelChange = () => {
    };
    this.onModelTouched = () => {
    };
  }
  ngOnInit() {
    this.container.picker = this;
  }
  writeValue(value) {
    if (this.isInSingleMode) {
      this.value = value;
      this.container.pickerMoment = value;
    } else {
      this.values = value;
      this.container.pickerMoment = this._values[this.container.activeSelectedIndex];
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  select(date) {
    if (this.disabled) {
      return;
    }
    if (Array.isArray(date)) {
      this.values = [...date];
    } else {
      this.value = date;
    }
    this.onModelChange(date);
    this.onModelTouched();
  }
  /**
   * Emits the selected year in multi-year view
   * */
  selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /**
   * Emits selected month in year view
   * */
  selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /**
   * Emits the selected date
   * */
  selectDate(normalizedDate) {
    this.dateSelected.emit(normalizedDate);
  }
  static {
    this.ɵfac = function OwlDateTimeInlineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTimeInlineComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateTimeAdapter, 8), ɵɵdirectiveInject(OWL_DATE_TIME_FORMATS, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OwlDateTimeInlineComponent,
      selectors: [["owl-date-time-inline"]],
      viewQuery: function OwlDateTimeInlineComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(OwlDateTimeContainerComponent, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function OwlDateTimeInlineComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("owl-dt-inline", ctx.owlDTInlineClass);
        }
      },
      inputs: {
        pickerType: "pickerType",
        disabled: "disabled",
        selectMode: "selectMode",
        startAt: "startAt",
        endAt: "endAt",
        dateTimeFilter: [0, "owlDateTimeFilter", "dateTimeFilter"],
        minDateTime: [0, "min", "minDateTime"],
        maxDateTime: [0, "max", "maxDateTime"],
        value: "value",
        values: "values"
      },
      outputs: {
        yearSelected: "yearSelected",
        monthSelected: "monthSelected",
        dateSelected: "dateSelected"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([OWL_DATETIME_VALUE_ACCESSOR]), ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 0,
      template: function OwlDateTimeInlineComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "owl-date-time-container");
        }
      },
      dependencies: [OwlDateTimeContainerComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTimeInlineComponent, [{
    type: Component,
    args: [{
      selector: "owl-date-time-inline",
      host: {
        "[class.owl-dt-inline]": "owlDTInlineClass"
      },
      standalone: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      providers: [OWL_DATETIME_VALUE_ACCESSOR],
      template: "<owl-date-time-container></owl-date-time-container>"
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: DateTimeAdapter,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_FORMATS]
    }]
  }], {
    container: [{
      type: ViewChild,
      args: [OwlDateTimeContainerComponent, {
        static: true
      }]
    }],
    pickerType: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    selectMode: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    endAt: [{
      type: Input
    }],
    dateTimeFilter: [{
      type: Input,
      args: ["owlDateTimeFilter"]
    }],
    minDateTime: [{
      type: Input,
      args: ["min"]
    }],
    maxDateTime: [{
      type: Input,
      args: ["max"]
    }],
    value: [{
      type: Input
    }],
    values: [{
      type: Input
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    dateSelected: [{
      type: Output
    }]
  });
})();
var OwlDialogModule = class _OwlDialogModule {
  static {
    this.ɵfac = function OwlDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OwlDialogModule,
      declarations: [OwlDialogContainerComponent],
      imports: [CommonModule, A11yModule, OverlayModule, PortalModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [OWL_DIALOG_SCROLL_STRATEGY_PROVIDER, OwlDialogService],
      imports: [CommonModule, A11yModule, OverlayModule, PortalModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, A11yModule, OverlayModule, PortalModule],
      exports: [],
      declarations: [OwlDialogContainerComponent],
      providers: [OWL_DIALOG_SCROLL_STRATEGY_PROVIDER, OwlDialogService]
    }]
  }], null, null);
})();
var OwlDateTimeModule = class _OwlDateTimeModule {
  static {
    this.ɵfac = function OwlDateTimeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlDateTimeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OwlDateTimeModule,
      declarations: [OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeContainerComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent, OwlTimerComponent, OwlTimerBoxComponent, OwlCalendarComponent, OwlCalendarBodyComponent, NumberFixedLenPipe, OwlDateTimeInlineComponent],
      imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule],
      exports: [OwlCalendarComponent, OwlTimerComponent, OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeInlineComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [OwlDateTimeIntl, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER, ...optionsProviders],
      imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlDateTimeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule],
      exports: [OwlCalendarComponent, OwlTimerComponent, OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeInlineComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent],
      declarations: [OwlDateTimeTriggerDirective, OwlDateTimeInputDirective, OwlDateTimeComponent, OwlDateTimeContainerComponent, OwlMultiYearViewComponent, OwlYearViewComponent, OwlMonthViewComponent, OwlTimerComponent, OwlTimerBoxComponent, OwlCalendarComponent, OwlCalendarBodyComponent, NumberFixedLenPipe, OwlDateTimeInlineComponent],
      providers: [OwlDateTimeIntl, OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER, ...optionsProviders]
    }]
  }], null, null);
})();
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
function createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
  if (month < 0 || month > 11) {
    throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
  }
  if (date < 1) {
    throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
  }
  if (hours < 0 || hours > 23) {
    throw Error(`Invalid hours "${hours}". Hours has to be between 0 and 23.`);
  }
  if (minutes < 0 || minutes > 59) {
    throw Error(`Invalid minutes "${minutes}". Minutes has to between 0 and 59.`);
  }
  if (seconds < 0 || seconds > 59) {
    throw Error(`Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`);
  }
  const result = createDateWithOverflow(year, month, date, hours, minutes, seconds);
  if (result.getMonth() !== month) {
    throw Error(`Invalid date "${date}" for month with index "${month}".`);
  }
  return result;
}
function getNumDaysInMonth(date) {
  const lastDateOfMonth = createDateWithOverflow(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDateOfMonth.getDate();
}
function createDateWithOverflow(year, month, date, hours = 0, minutes = 0, seconds = 0) {
  const result = new Date(year, month, date, hours, minutes, seconds);
  if (year >= 0 && year < 100) {
    result.setFullYear(result.getFullYear() - 1900);
  }
  return result;
}
var SUPPORTS_INTL_API = typeof Intl !== "undefined";
var DEFAULT_MONTH_NAMES = {
  long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]
};
var DEFAULT_DAY_OF_WEEK_NAMES = {
  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  narrow: ["S", "M", "T", "W", "T", "F", "S"]
};
var DEFAULT_DATE_NAMES = range(31, (i) => String(i + 1));
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:[+\-]\d{2}:\d{2}))?)?$/;
var NativeDateTimeAdapter = class _NativeDateTimeAdapter extends DateTimeAdapter {
  constructor(owlDateTimeLocale, platform) {
    super();
    this.owlDateTimeLocale = owlDateTimeLocale;
    this.firstMonthOfTheYear = 0;
    this.firstDayOfTheWeek = 0;
    super.setLocale(owlDateTimeLocale);
    this.useUtcForDisplay = !platform.TRIDENT;
    this._clampDate = platform.TRIDENT || platform.EDGE;
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDay(date) {
    return date.getDay();
  }
  getDate(date) {
    return date.getDate();
  }
  getHours(date) {
    return date.getHours();
  }
  getMinutes(date) {
    return date.getMinutes();
  }
  getSeconds(date) {
    return date.getSeconds();
  }
  getTime(date) {
    return date.getTime();
  }
  getNumDaysInMonth(date) {
    return getNumDaysInMonth(date);
  }
  differenceInCalendarDays(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      const dateLeftStartOfDay = this.createDate(this.getYear(dateLeft), this.getMonth(dateLeft), this.getDate(dateLeft));
      const dateRightStartOfDay = this.createDate(this.getYear(dateRight), this.getMonth(dateRight), this.getDate(dateRight));
      const timeStampLeft = this.getTime(dateLeftStartOfDay) - dateLeftStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
      const timeStampRight = this.getTime(dateRightStartOfDay) - dateRightStartOfDay.getTimezoneOffset() * this.milliseondsInMinute;
      return Math.round((timeStampLeft - timeStampRight) / this.millisecondsInDay);
    } else {
      return null;
    }
  }
  getYearName(date) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.getLocale(), {
        year: "numeric",
        timeZone: "utc"
      });
      return this.stripDirectionalityCharacters(this._format(dtf, date));
    }
    return String(this.getYear(date));
  }
  getMonthNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.getLocale(), {
        month: style2,
        timeZone: "utc"
      });
      return range(12, (i) => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1))));
    }
    return DEFAULT_MONTH_NAMES[style2];
  }
  getDayOfWeekNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.getLocale(), {
        weekday: style2,
        timeZone: "utc"
      });
      return range(7, (i) => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DAY_OF_WEEK_NAMES[style2];
  }
  getDateNames() {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.getLocale(), {
        day: "numeric",
        timeZone: "utc"
      });
      return range(31, (i) => this.stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DATE_NAMES;
  }
  toIso8601(date) {
    return date.toISOString();
  }
  isEqual(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      return dateLeft.getTime() === dateRight.getTime();
    } else {
      return false;
    }
  }
  isSameDay(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      const dateLeftStartOfDay = this.clone(dateLeft);
      const dateRightStartOfDay = this.clone(dateRight);
      dateLeftStartOfDay.setHours(0, 0, 0, 0);
      dateRightStartOfDay.setHours(0, 0, 0, 0);
      return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
    } else {
      return false;
    }
  }
  isValid(date) {
    return date && !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  addCalendarYears(date, amount) {
    return this.addCalendarMonths(date, amount * 12);
  }
  addCalendarMonths(date, amount) {
    const result = this.clone(date);
    amount = Number(amount);
    const desiredMonth = result.getMonth() + amount;
    const dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
    dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    const daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth);
    result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()));
    return result;
  }
  addCalendarDays(date, amount) {
    const result = this.clone(date);
    amount = Number(amount);
    result.setDate(result.getDate() + amount);
    return result;
  }
  setHours(date, amount) {
    const result = this.clone(date);
    result.setHours(amount);
    return result;
  }
  setMinutes(date, amount) {
    const result = this.clone(date);
    result.setMinutes(amount);
    return result;
  }
  setSeconds(date, amount) {
    const result = this.clone(date);
    result.setSeconds(amount);
    return result;
  }
  createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
    return createDate(year, month, date, hours, minutes, seconds);
  }
  clone(date) {
    return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHours(date), this.getMinutes(date), this.getSeconds(date));
  }
  now() {
    return /* @__PURE__ */ new Date();
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("JSNativeDate: Cannot format invalid date.");
    }
    if (SUPPORTS_INTL_API) {
      if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
        date = this.clone(date);
        date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
      }
      displayFormat = __spreadProps(__spreadValues({}, displayFormat), {
        timeZone: "utc"
      });
      const dtf = new Intl.DateTimeFormat(this.getLocale(), displayFormat);
      return this.stripDirectionalityCharacters(this._format(dtf, date));
    }
    return this.stripDirectionalityCharacters(date.toDateString());
  }
  parse(value, parseFormat) {
    if (typeof value === "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        const date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  /**
   * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
   * other browsers do not. We remove them to make output consistent and because they interfere with
   * date parsing.
   */
  stripDirectionalityCharacters(str) {
    return str.replace(/[\u200e\u200f]/g, "");
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   */
  _format(dtf, date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    return dtf.format(d);
  }
  static {
    this.ɵfac = function NativeDateTimeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDateTimeAdapter)(ɵɵinject(OWL_DATE_TIME_LOCALE, 8), ɵɵinject(Platform));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NativeDateTimeAdapter,
      factory: _NativeDateTimeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateTimeAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_LOCALE]
    }]
  }, {
    type: Platform
  }], null);
})();
var OWL_NATIVE_DATE_TIME_FORMATS = {
  parseInput: null,
  fullPickerInput: {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  },
  datePickerInput: {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  },
  timePickerInput: {
    hour: "numeric",
    minute: "numeric"
  },
  monthYearLabel: {
    year: "numeric",
    month: "short"
  },
  dateA11yLabel: {
    year: "numeric",
    month: "long",
    day: "numeric"
  },
  monthYearA11yLabel: {
    year: "numeric",
    month: "long"
  }
};
var NativeDateTimeModule = class _NativeDateTimeModule {
  static {
    this.ɵfac = function NativeDateTimeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDateTimeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NativeDateTimeModule,
      imports: [PlatformModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: DateTimeAdapter,
        useClass: NativeDateTimeAdapter
      }],
      imports: [PlatformModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateTimeModule, [{
    type: NgModule,
    args: [{
      imports: [PlatformModule],
      providers: [{
        provide: DateTimeAdapter,
        useClass: NativeDateTimeAdapter
      }]
    }]
  }], null, null);
})();
var OwlNativeDateTimeModule = class _OwlNativeDateTimeModule {
  static {
    this.ɵfac = function OwlNativeDateTimeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OwlNativeDateTimeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OwlNativeDateTimeModule,
      imports: [NativeDateTimeModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: OWL_DATE_TIME_FORMATS,
        useValue: OWL_NATIVE_DATE_TIME_FORMATS
      }],
      imports: [NativeDateTimeModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlNativeDateTimeModule, [{
    type: NgModule,
    args: [{
      imports: [NativeDateTimeModule],
      providers: [{
        provide: OWL_DATE_TIME_FORMATS,
        useValue: OWL_NATIVE_DATE_TIME_FORMATS
      }]
    }]
  }], null, null);
})();
var UnixTimestampDateTimeAdapter = class _UnixTimestampDateTimeAdapter extends DateTimeAdapter {
  constructor(owlDateTimeLocale, platform) {
    super();
    this.owlDateTimeLocale = owlDateTimeLocale;
    this.firstMonthOfTheYear = 0;
    this.firstDayOfTheWeek = 0;
    super.setLocale(owlDateTimeLocale);
    this.useUtcForDisplay = !platform.TRIDENT;
    this._clampDate = platform.TRIDENT || platform.EDGE;
  }
  static {
    this.search_ltr_rtl_pattern = "/[‎‏]/g";
  }
  static stripDirectionalityCharacters(str) {
    return str.replace(_UnixTimestampDateTimeAdapter.search_ltr_rtl_pattern, "");
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   */
  static _format(dtf, date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    return dtf.format(d);
  }
  addCalendarDays(date, amount) {
    const result = new Date(date);
    amount = Number(amount);
    result.setDate(result.getDate() + amount);
    return result.getTime();
  }
  addCalendarMonths(date, amount) {
    const result = new Date(date);
    amount = Number(amount);
    const desiredMonth = result.getMonth() + amount;
    const dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
    dateWithDesiredMonth.setFullYear(result.getFullYear(), desiredMonth, 1);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    const daysInMonth = this.getNumDaysInMonth(dateWithDesiredMonth.getTime());
    result.setMonth(desiredMonth, Math.min(daysInMonth, result.getDate()));
    return result.getTime();
  }
  addCalendarYears(date, amount) {
    return this.addCalendarMonths(date, amount * 12);
  }
  clone(date) {
    return date;
  }
  createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
    return createDate(year, month, date, hours, minutes, seconds).getTime();
  }
  differenceInCalendarDays(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      const dateLeftStartOfDay = this.createDate(this.getYear(dateLeft), this.getMonth(dateLeft), this.getDate(dateLeft));
      const dateRightStartOfDay = this.createDate(this.getYear(dateRight), this.getMonth(dateRight), this.getDate(dateRight));
      const timeStampLeft = this.getTime(dateLeftStartOfDay) - new Date(dateLeftStartOfDay).getTimezoneOffset() * this.milliseondsInMinute;
      const timeStampRight = this.getTime(dateRightStartOfDay) - new Date(dateRightStartOfDay).getTimezoneOffset() * this.milliseondsInMinute;
      return Math.round((timeStampLeft - timeStampRight) / this.millisecondsInDay);
    } else {
      return null;
    }
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("JSNativeDate: Cannot format invalid date.");
    }
    const jsDate = new Date(date);
    if (SUPPORTS_INTL_API) {
      if (this._clampDate && (jsDate.getFullYear() < 1 || jsDate.getFullYear() > 9999)) {
        jsDate.setFullYear(Math.max(1, Math.min(9999, jsDate.getFullYear())));
      }
      displayFormat = __spreadProps(__spreadValues({}, displayFormat), {
        timeZone: "utc"
      });
      const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
      return _UnixTimestampDateTimeAdapter.stripDirectionalityCharacters(_UnixTimestampDateTimeAdapter._format(dtf, jsDate));
    }
    return _UnixTimestampDateTimeAdapter.stripDirectionalityCharacters(jsDate.toDateString());
  }
  getDate(date) {
    return new Date(date).getDate();
  }
  getDateNames() {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        day: "numeric",
        timeZone: "utc"
      });
      return range(31, (i) => _UnixTimestampDateTimeAdapter.stripDirectionalityCharacters(_UnixTimestampDateTimeAdapter._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DATE_NAMES;
  }
  getDay(date) {
    return new Date(date).getDay();
  }
  getDayOfWeekNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        weekday: style2,
        timeZone: "utc"
      });
      return range(7, (i) => _UnixTimestampDateTimeAdapter.stripDirectionalityCharacters(_UnixTimestampDateTimeAdapter._format(dtf, new Date(2017, 0, i + 1))));
    }
    return DEFAULT_DAY_OF_WEEK_NAMES[style2];
  }
  getHours(date) {
    return new Date(date).getHours();
  }
  getMinutes(date) {
    return new Date(date).getMinutes();
  }
  getMonth(date) {
    return new Date(date).getMonth();
  }
  getMonthNames(style2) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        month: style2,
        timeZone: "utc"
      });
      return range(12, (i) => _UnixTimestampDateTimeAdapter.stripDirectionalityCharacters(_UnixTimestampDateTimeAdapter._format(dtf, new Date(2017, i, 1))));
    }
    return DEFAULT_MONTH_NAMES[style2];
  }
  getNumDaysInMonth(date) {
    return getNumDaysInMonth(new Date(date));
  }
  getSeconds(date) {
    return new Date(date).getSeconds();
  }
  getTime(date) {
    return date;
  }
  getYear(date) {
    return new Date(date).getFullYear();
  }
  getYearName(date) {
    if (SUPPORTS_INTL_API) {
      const dtf = new Intl.DateTimeFormat(this.locale, {
        year: "numeric",
        timeZone: "utc"
      });
      return _UnixTimestampDateTimeAdapter.stripDirectionalityCharacters(_UnixTimestampDateTimeAdapter._format(dtf, new Date(date)));
    }
    return String(this.getYear(date));
  }
  invalid() {
    return NaN;
  }
  isDateInstance(obj) {
    return typeof obj === "number";
  }
  isEqual(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      return dateLeft === dateRight;
    } else {
      return false;
    }
  }
  isSameDay(dateLeft, dateRight) {
    if (this.isValid(dateLeft) && this.isValid(dateRight)) {
      const dateLeftStartOfDay = new Date(dateLeft);
      const dateRightStartOfDay = new Date(dateRight);
      dateLeftStartOfDay.setHours(0, 0, 0, 0);
      dateRightStartOfDay.setHours(0, 0, 0, 0);
      return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
    } else {
      return false;
    }
  }
  isValid(date) {
    return (date || date === 0) && !isNaN(date);
  }
  now() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  parse(value, parseFormat) {
    if (typeof value === "number") {
      return value;
    }
    return value ? new Date(Date.parse(value)).getTime() : null;
  }
  setHours(date, amount) {
    const result = new Date(date);
    result.setHours(amount);
    return result.getTime();
  }
  setMinutes(date, amount) {
    const result = new Date(date);
    result.setMinutes(amount);
    return result.getTime();
  }
  setSeconds(date, amount) {
    const result = new Date(date);
    result.setSeconds(amount);
    return result.getTime();
  }
  toIso8601(date) {
    return new Date(date).toISOString();
  }
  static {
    this.ɵfac = function UnixTimestampDateTimeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnixTimestampDateTimeAdapter)(ɵɵinject(OWL_DATE_TIME_LOCALE, 8), ɵɵinject(Platform));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnixTimestampDateTimeAdapter,
      factory: _UnixTimestampDateTimeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnixTimestampDateTimeAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OWL_DATE_TIME_LOCALE]
    }]
  }, {
    type: Platform
  }], null);
})();
var OWL_UNIX_TIMESTAMP_DATE_TIME_FORMATS = {
  parseInput: null,
  fullPickerInput: {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  },
  datePickerInput: {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  },
  timePickerInput: {
    hour: "numeric",
    minute: "numeric"
  },
  monthYearLabel: {
    year: "numeric",
    month: "short"
  },
  dateA11yLabel: {
    year: "numeric",
    month: "long",
    day: "numeric"
  },
  monthYearA11yLabel: {
    year: "numeric",
    month: "long"
  }
};
export {
  CalendarCell,
  DateTimeAdapter,
  DateView,
  DefaultOptions,
  NativeDateTimeAdapter,
  OWL_DATETIME_VALIDATORS,
  OWL_DATETIME_VALUE_ACCESSOR$1 as OWL_DATETIME_VALUE_ACCESSOR,
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE,
  OWL_DATE_TIME_LOCALE_PROVIDER,
  OWL_UNIX_TIMESTAMP_DATE_TIME_FORMATS,
  OptionsTokens,
  OwlCalendarBodyComponent,
  OwlCalendarComponent,
  OwlDateTimeComponent,
  OwlDateTimeInlineComponent,
  OwlDateTimeInputDirective,
  OwlDateTimeIntl,
  OwlDateTimeModule,
  OwlDateTimeTriggerDirective,
  OwlMonthViewComponent,
  OwlMultiYearViewComponent,
  OwlNativeDateTimeModule,
  OwlTimerComponent,
  OwlYearViewComponent,
  UnixTimestampDateTimeAdapter,
  defaultOptionsFactory,
  multiYearOptionsFactory,
  optionsProviders
};
//# sourceMappingURL=@danielmoncada_angular-datetime-picker.js.map
