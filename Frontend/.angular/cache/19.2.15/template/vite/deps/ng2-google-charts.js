import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  LOCALE_ID,
  NgModule,
  Optional,
  Output,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵinject,
  ɵɵinvalidFactory
} from "./chunk-BRPYXLTX.js";
import "./chunk-7J22WABE.js";
import "./chunk-5PA5UEDQ.js";
import "./chunk-ETBEKOXV.js";
import {
  __awaiter
} from "./chunk-55JZBEKM.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng2-google-charts/fesm2015/ng2-google-charts.js
var GoogleChartsDataTable = class {
  constructor(opt) {
    this.opt = opt;
    this.dataTableChanged = new EventEmitter();
    if (opt) {
      this._setDataTable(opt.dataTable, opt.firstRowIsData);
    }
  }
  send() {
    if (this.query === void 0) {
      return;
    }
    this.query.send((queryResponse) => {
      this.setDataTable(queryResponse.getDataTable());
      if (this.opt.queryCallback) {
        this.opt.queryCallback(queryResponse);
      }
    });
  }
  init(opt) {
    if (opt) {
      this.opt = opt;
    }
    if (this.tid !== void 0) {
      window.clearInterval(this.tid);
      this.tid = void 0;
    }
    if (this.opt.dataSourceUrl) {
      this.query = new google.visualization.Query(this.opt.dataSourceUrl);
      if (this.opt.query) {
        this.query.setQuery(this.opt.query);
      }
      if (this.opt.timeout !== void 0) {
        this.query.setTimeout(this.opt.timeout);
      }
      if (this.opt.refreshInterval) {
        this.tid = window.setInterval(() => {
          this.send();
        }, this.opt.refreshInterval * 1e3);
      }
      this.send();
    } else {
      this.setDataTable(this.opt.dataTable);
    }
  }
  /**
   * @returns Underlying google.visualization.DataTable
   */
  getDataTable() {
    return this.dataTable;
  }
  setDataTable(dt, firstRowIsData) {
    if (firstRowIsData === void 0) {
      firstRowIsData = this.opt.firstRowIsData;
    }
    this._setDataTable(dt, firstRowIsData);
    this.dataTableChanged.emit(this.dataTable);
  }
  _setDataTable(dt, firstRowIsData) {
    if (Array.isArray(dt)) {
      dt = google.visualization.arrayToDataTable(dt, firstRowIsData);
    }
    this.dataTable = dt;
    this.reformat();
  }
  /**
   * Applies formatters to data columns, if defined
   */
  reformat() {
    const dt = this.dataTable;
    if (dt === void 0) {
      return;
    }
    if (this.opt.formatters === void 0) {
      return;
    }
    for (const formatterConfig of this.opt.formatters) {
      let formatter;
      if (formatterConfig.type === "PatternFormat") {
        const fmtOptions = formatterConfig.options;
        formatter = new google.visualization.PatternFormat(fmtOptions.pattern);
        formatter.format(dt, formatterConfig.columns, fmtOptions.dstColumnIndex);
        continue;
      }
      const formatterConstructor = google.visualization[formatterConfig.type];
      const formatterOptions = formatterConfig.options;
      formatter = new formatterConstructor(formatterOptions);
      if (formatterConfig.type === "ColorFormat" && formatterOptions) {
        const fmtOptions = formatterOptions;
        if (fmtOptions.ranges) {
          for (const range of fmtOptions.ranges) {
            if (typeof range.fromBgColor !== "undefined" && typeof range.toBgColor !== "undefined") {
              formatter.addGradientRange(range.from, range.to, range.color, range.fromBgColor, range.toBgColor);
            } else {
              formatter.addRange(range.from, range.to, range.color, range.bgcolor);
            }
          }
        }
      }
      for (const col of formatterConfig.columns) {
        formatter.format(dt, col);
      }
    }
  }
};
GoogleChartsDataTable.ɵfac = function GoogleChartsDataTable_Factory(__ngFactoryType__) {
  ɵɵinvalidFactory();
};
GoogleChartsDataTable.ɵdir = ɵɵdefineDirective({
  type: GoogleChartsDataTable,
  outputs: {
    dataTableChanged: "dataTableChanged"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleChartsDataTable, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }];
  }, {
    dataTableChanged: [{
      type: Output
    }]
  });
})();
var ChartHTMLTooltip = class _ChartHTMLTooltip {
  constructor(el) {
    this.el = el;
  }
  setPosition(x, y) {
    this.el.nativeElement.style.left = x + _ChartHTMLTooltip.PIXELS;
    this.el.nativeElement.style.top = y + _ChartHTMLTooltip.PIXELS;
  }
  getDOMElement() {
    return this.el;
  }
};
ChartHTMLTooltip.PIXELS = "px";
var GoogleChartsLoaderService = class {
  constructor(localeId, googleChartsSettings) {
    this.googleChartsSettings = googleChartsSettings;
    this.loadedPackages = [];
    this.loaded = false;
    const defaultSettings = {
      googleChartsVersion: "50",
      language: localeId
    };
    this.googleChartsSettings = Object.assign(Object.assign({}, defaultSettings), this.googleChartsSettings);
    this.googleScriptLoadingNotifier = new EventEmitter();
    this.googleChartLoadingNotifier = new EventEmitter();
    this.googleScriptIsLoading = false;
    this.googleChartIsLoading = false;
    this.loadGoogleChartsScriptPromise = new Promise((resolve, reject) => {
      if (typeof google !== "undefined" && google.charts) {
        resolve();
      } else if (!this.googleScriptIsLoading) {
        this.googleScriptIsLoading = true;
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          this.googleScriptIsLoading = false;
          this.googleScriptLoadingNotifier.emit(true);
          resolve();
        };
        script.onerror = () => {
          this.googleScriptIsLoading = false;
          this.googleScriptLoadingNotifier.emit(false);
          reject();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
      } else {
        this.googleScriptLoadingNotifier.subscribe((loaded) => {
          if (loaded) {
            resolve();
          } else {
            reject();
          }
        });
      }
    });
  }
  load(settings) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.loadGoogleChartsScriptPromise;
      yield new Promise((resolve) => {
        if (this.googleChartIsLoading) {
          this.googleChartLoadingNotifier.subscribe(() => {
            this.doLoad(resolve, settings);
          });
          return;
        }
        this.doLoad(resolve, settings);
      });
    });
  }
  doLoad(resolve, settings) {
    settings = Object.assign(Object.assign({}, this.googleChartsSettings), settings);
    if (!settings.packages && this.loaded) {
      resolve();
      return;
    }
    if (settings.packages) {
      let pkgs = settings.packages.filter((p) => this.loadedPackages.indexOf(p) < 0);
      if (pkgs.length == 0 && this.loaded) {
        resolve();
        return;
      }
      settings.packages = pkgs;
    }
    const _settings = settings;
    _settings.callback = () => {
      this.googleChartIsLoading = false;
      if (_settings.packages !== void 0) {
        this.loadedPackages = this.loadedPackages.concat(_settings.packages);
      }
      this.loaded = true;
      this.googleChartLoadingNotifier.emit();
      resolve();
    };
    this.googleChartIsLoading = true;
    google.charts.load(settings.googleChartsVersion, _settings);
  }
};
GoogleChartsLoaderService.ɵfac = function GoogleChartsLoaderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GoogleChartsLoaderService)(ɵɵinject(LOCALE_ID), ɵɵinject("googleChartsSettings", 8));
};
GoogleChartsLoaderService.ɵprov = ɵɵdefineInjectable({
  token: GoogleChartsLoaderService,
  factory: GoogleChartsLoaderService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleChartsLoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: ["googleChartsSettings"]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var GoogleChartType;
(function(GoogleChartType2) {
  GoogleChartType2["AnnotationChart"] = "AnnotationChart";
  GoogleChartType2["AreaChart"] = "AreaChart";
  GoogleChartType2["BarChart"] = "BarChart";
  GoogleChartType2["BubbleChart"] = "BubbleChart";
  GoogleChartType2["Calendar"] = "Calendar";
  GoogleChartType2["CandlestickChart"] = "CandlestickChart";
  GoogleChartType2["ColumnChart"] = "ColumnChart";
  GoogleChartType2["ComboChart"] = "ComboChart";
  GoogleChartType2["Gantt"] = "Gantt";
  GoogleChartType2["Gauge"] = "Gauge";
  GoogleChartType2["GeoChart"] = "GeoChart";
  GoogleChartType2["Histogram"] = "Histogram";
  GoogleChartType2["LineChart"] = "LineChart";
  GoogleChartType2["Map"] = "Map";
  GoogleChartType2["OrgChart"] = "OrgChart";
  GoogleChartType2["PieChart"] = "PieChart";
  GoogleChartType2["Sankey"] = "Sankey";
  GoogleChartType2["ScatterChart"] = "ScatterChart";
  GoogleChartType2["SteppedAreaChart"] = "SteppedAreaChart";
  GoogleChartType2["Table"] = "Table";
  GoogleChartType2["Timeline"] = "Timeline";
  GoogleChartType2["TreeMap"] = "TreeMap";
  GoogleChartType2["VegaChart"] = "VegaChart";
  GoogleChartType2["WordTree"] = "WordTree";
})(GoogleChartType || (GoogleChartType = {}));
var GoogleChartComponent = class {
  constructor(el, loaderService) {
    this.el = el;
    this.loaderService = loaderService;
    this.selectListener = () => {
      const event = {
        message: "select",
        row: null,
        column: null,
        selectedRowValues: [],
        selectedRowFormattedValues: [],
        columnLabel: ""
      };
      const s = this.wrapper.visualization.getSelection();
      const gs = s[s.length - 1];
      if (!gs) {
        event.message = "deselect";
        return event;
      }
      const selection = gs;
      if (gs.row != null) {
        event.row = selection.row;
        const selectedRowValues = [];
        const selectedRowFormattedValues = [];
        const dataTable = this.wrapper.getDataTable();
        const numberOfColumns = dataTable.getNumberOfColumns();
        for (let i = 0; i < numberOfColumns; i++) {
          selectedRowValues.push(dataTable.getValue(selection.row, i));
          selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
        }
        event.selectedRowValues = selectedRowValues;
        event.selectedRowFormattedValues = selectedRowFormattedValues;
      }
      if (selection.column != null) {
        event.column = selection.column;
        event.columnLabel = this.getColumnLabelAtPosition(selection);
      }
      if (gs.name) {
        event.columnLabel = gs.name;
      }
      return event;
    };
    this.chartSelect = new EventEmitter();
    this.chartSelectOneTime = new EventEmitter();
    this.chartReady = new EventEmitter();
    this.chartReadyOneTime = new EventEmitter();
    this.chartError = new EventEmitter();
    this.chartErrorOneTime = new EventEmitter();
    this.mouseOver = new EventEmitter();
    this.mouseOverOneTime = new EventEmitter();
    this.mouseOut = new EventEmitter();
    this.mouseOutOneTime = new EventEmitter();
    this.regionClick = new EventEmitter();
    this.regionClickOneTime = new EventEmitter();
  }
  ngOnInit() {
    this.HTMLel = this.el.nativeElement.querySelector("div");
    if (Object.isExtensible(this.data)) {
      this.data.component = this;
    }
    this.options = this.data.options;
    this.init().then(() => {
      this.draw();
    });
  }
  init() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.loaderService.load();
      this.recreateWrapper();
    });
  }
  recreateWrapper() {
    if (this.wrapper === void 0 || this.wrapper.getChartType() !== this.data.chartType) {
      this.dataTable = new GoogleChartsDataTable(this.data);
      this.dataTable.dataTableChanged.subscribe((dt) => {
        this._draw();
      });
      let temp = this.data;
      if (this.data.firstRowIsData) {
        temp = Object.assign(temp, this.data);
        temp.dataTable = this.dataTable.getDataTable();
      }
      this.wrapper = new google.visualization.ChartWrapper(temp);
      this.registerChartWrapperEvents();
      if (temp.dataTable === void 0 && temp.dataSourceUrl === void 0) {
        try {
          this.wrapper.draw(this.HTMLel);
        } catch (err) {
        }
      }
    }
  }
  _draw() {
    return __awaiter(this, void 0, void 0, function* () {
      const dt = this.dataTable.getDataTable();
      if (dt === void 0) {
        return;
      }
      this.convertOptions();
      this.recreateWrapper();
      this.wrapper.setOptions(this.options);
      this.wrapper.setDataTable(dt);
      this.wrapper.draw(this.HTMLel);
    });
  }
  getDataTable() {
    return this.dataTable;
  }
  draw(value) {
    if (value === void 0) {
      value = this.data;
    }
    this.options = value.options;
    this.dataTable.init(value);
  }
  getSelectorBySeriesType(seriesType) {
    const selectors = {
      bars: "bar#%s#%r",
      haxis: "hAxis#0#label",
      line: "point#%s#%r",
      legend: "legendentry#%s",
      area: "point#%s#%r"
    };
    const selector = selectors[seriesType];
    return selector;
  }
  /**
   * Given a column number, counts how many
   * columns have rol=="data". Those are mapped
   * one-to-one to the series array. When rol is not defined
   * a column of type number means a series column.
   * @param column to inspect
   */
  getSeriesByColumn(column) {
    let series = 0;
    const dataTable = this.wrapper.getDataTable();
    for (let i = column - 1; i >= 0; i--) {
      const role = dataTable.getColumnRole(i);
      const type = dataTable.getColumnType(i);
      if (role === "data" || type === "number") {
        series++;
      }
    }
    return series;
  }
  getBoundingBoxForItem(item) {
    let boundingBox = {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
    if (this.cli) {
      const column = item.column;
      const series = this.getSeriesByColumn(column);
      const row = item.row;
      let seriesType = this.options.seriesType;
      if (this.options.series && this.options.series[series] && this.options.series[series].type) {
        seriesType = this.options.series[series].type;
      }
      if (seriesType) {
        let selector = this.getSelectorBySeriesType(seriesType);
        if (selector) {
          selector = selector.replace("%s", series + "").replace("%c", column + "").replace("%r", row + "");
          const box = this.cli.getBoundingBox(selector);
          if (box) {
            boundingBox = box;
          }
        }
      }
    }
    return boundingBox;
  }
  getValueAtPosition(position) {
    if (position.row == null) {
      return null;
    }
    const dataTable = this.wrapper.getDataTable();
    const value = dataTable.getValue(position.row, position.column);
    return value;
  }
  getColumnTypeAtPosition(position) {
    const dataTable = this.wrapper.getDataTable();
    const type = dataTable.getColumnType(position.column) || "";
    return type;
  }
  getColumnLabelAtPosition(position) {
    const dataTable = this.wrapper.getDataTable();
    const type = dataTable.getColumnLabel(position.column) || "";
    return type;
  }
  getHTMLTooltip() {
    const tooltipER = new ElementRef(this.el.nativeElement.querySelector(".google-visualization-tooltip"));
    return new ChartHTMLTooltip(tooltipER);
  }
  parseMouseEvent(item) {
    const chartType = this.wrapper.getChartType();
    let eventColumn = item.column;
    if (eventColumn == null) {
      switch (chartType) {
        case "Timeline":
          eventColumn = this.wrapper.getDataTable().getNumberOfColumns() === 3 ? 0 : 1;
          break;
        default:
          eventColumn = 0;
      }
    }
    const eventRow = item.row;
    const myItem = {
      row: eventRow,
      column: eventColumn
    };
    const event = {
      position: item,
      boundingBox: this.getBoundingBoxForItem(myItem),
      value: this.getValueAtPosition(myItem),
      columnType: this.getColumnTypeAtPosition(myItem),
      columnLabel: this.getColumnLabelAtPosition(myItem)
    };
    return event;
  }
  registerChartEvents() {
    const chart = this.wrapper.getChart();
    this.cli = chart.getChartLayoutInterface ? chart.getChartLayoutInterface() : null;
    if (this.mouseOver.observers.length > 0) {
      google.visualization.events.addListener(chart, "onmouseover", (item) => {
        const event = this.parseMouseEvent(item);
        event.tooltip = this.getHTMLTooltip();
        this.mouseOver.emit(event);
      });
    }
    if (this.mouseOverOneTime.observers.length > 0) {
      google.visualization.events.addOneTimeListener(chart, "onmouseover", (item) => {
        const event = this.parseMouseEvent(item);
        event.tooltip = this.getHTMLTooltip();
        this.mouseOverOneTime.emit(event);
      });
    }
    if (this.mouseOut.observers.length > 0) {
      google.visualization.events.addListener(chart, "onmouseout", (item) => {
        const event = this.parseMouseEvent(item);
        this.mouseOut.emit(event);
      });
    }
    if (this.mouseOutOneTime.observers.length > 0) {
      google.visualization.events.addOneTimeListener(chart, "onmouseout", (item) => {
        const event = this.parseMouseEvent(item);
        this.mouseOutOneTime.emit(event);
      });
    }
    if (this.data.chartType === "GeoChart") {
      if (this.regionClick.observers.length > 0) {
        google.visualization.events.addListener(chart, "regionClick", (item) => {
          this.regionClick.emit(item);
        });
      }
      if (this.regionClickOneTime.observers.length > 0) {
        google.visualization.events.addOneTimeListener(chart, "regionClick", (item) => {
          this.regionClick.emit(item);
        });
      }
    }
  }
  registerChartWrapperEvents() {
    google.visualization.events.addListener(this.wrapper, "ready", () => {
      this.chartReady.emit({
        message: "Chart ready"
      });
    });
    google.visualization.events.addOneTimeListener(this.wrapper, "ready", () => {
      this.chartReadyOneTime.emit({
        message: "Chart ready (one time)"
      });
      this.registerChartEvents();
    });
    google.visualization.events.addListener(this.wrapper, "error", (error) => {
      this.chartError.emit(error);
    });
    google.visualization.events.addOneTimeListener(this.wrapper, "error", (error) => {
      this.chartErrorOneTime.emit(error);
    });
    this.addListener(this.wrapper, "select", this.selectListener, this.chartSelect);
    this.addOneTimeListener(this.wrapper, "select", this.selectListener, this.chartSelectOneTime);
  }
  addListener(source, eventType, listenerFn, evEmitter) {
    google.visualization.events.addListener(source, eventType, () => {
      evEmitter.emit(listenerFn());
    });
  }
  addOneTimeListener(source, eventType, listenerFn, evEmitter) {
    google.visualization.events.addOneTimeListener(source, eventType, () => {
      evEmitter.emit(listenerFn());
    });
  }
  convertOptions() {
    try {
      this.options = google.charts[this.data.chartType].convertOptions(this.options);
    } catch (error) {
      return;
    }
  }
};
GoogleChartComponent.ɵfac = function GoogleChartComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GoogleChartComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GoogleChartsLoaderService));
};
GoogleChartComponent.ɵcmp = ɵɵdefineComponent({
  type: GoogleChartComponent,
  selectors: [["google-chart"]],
  inputs: {
    data: "data"
  },
  outputs: {
    chartReady: "chartReady",
    chartReadyOneTime: "chartReadyOneTime",
    chartError: "chartError",
    chartErrorOneTime: "chartErrorOneTime",
    chartSelect: "chartSelect",
    chartSelectOneTime: "chartSelectOneTime",
    mouseOver: "mouseOver",
    mouseOverOneTime: "mouseOverOneTime",
    mouseOut: "mouseOut",
    mouseOutOneTime: "mouseOutOneTime",
    regionClick: "regionClick",
    regionClickOneTime: "regionClickOneTime"
  },
  standalone: false,
  decls: 1,
  vars: 0,
  template: function GoogleChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleChartComponent, [{
    type: Component,
    args: [{
      selector: "google-chart",
      template: "<div></div>"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GoogleChartsLoaderService
    }];
  }, {
    data: [{
      type: Input
    }],
    chartReady: [{
      type: Output
    }],
    chartReadyOneTime: [{
      type: Output
    }],
    chartError: [{
      type: Output
    }],
    chartErrorOneTime: [{
      type: Output
    }],
    chartSelect: [{
      type: Output
    }],
    chartSelectOneTime: [{
      type: Output
    }],
    mouseOver: [{
      type: Output
    }],
    mouseOverOneTime: [{
      type: Output
    }],
    mouseOut: [{
      type: Output
    }],
    mouseOutOneTime: [{
      type: Output
    }],
    regionClick: [{
      type: Output
    }],
    regionClickOneTime: [{
      type: Output
    }]
  });
})();
var GoogleChartsDashboardComponent = class {
  constructor(el, loaderService) {
    this.el = el;
    this.loaderService = loaderService;
    this.el = el;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.data.component = this;
    this.init().then(() => {
      if (!this.dataTable) {
        this.dataTable = new GoogleChartsDataTable(this.data);
        this.dataTable.dataTableChanged.subscribe((dt) => {
          this._draw();
        });
      }
      this.draw();
    });
  }
  init() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.loaderService.load({
        packages: ["controls"]
      });
      this.dashboard = new google.visualization.Dashboard(this.el.nativeElement.querySelector("div"));
      for (const b of this.data.bind) {
        let controls = b[0];
        let charts = b[1];
        if (!(controls instanceof Array)) {
          controls = [controls];
        }
        if (!(charts instanceof Array)) {
          charts = [charts];
        }
        for (const c of controls) {
          yield c.component.ensureInit();
        }
        for (const c of charts) {
          if (!c.component) {
            continue;
          }
          yield c.component.init();
          const data = c.component.data;
          if (data.dataTable !== void 0 || data.dataSourceUrl !== void 0) {
            throw Error("dataTable and dataSourceUrl cannot be specified when chart is drawn in a Dashboard");
          }
        }
        this.dashboard.bind(controls.map((x) => x.component.wrapper), charts.map((x) => x.component.wrapper));
      }
    });
  }
  draw(value) {
    this.dataTable.init(value);
  }
  _draw() {
    this.dashboard.draw(this.dataTable.getDataTable());
  }
};
GoogleChartsDashboardComponent.ɵfac = function GoogleChartsDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GoogleChartsDashboardComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GoogleChartsLoaderService));
};
GoogleChartsDashboardComponent.ɵcmp = ɵɵdefineComponent({
  type: GoogleChartsDashboardComponent,
  selectors: [["google-charts-dashboard"]],
  inputs: {
    data: "data"
  },
  standalone: false,
  decls: 1,
  vars: 0,
  template: function GoogleChartsDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleChartsDashboardComponent, [{
    type: Component,
    args: [{
      selector: "google-charts-dashboard",
      template: "<div></div>"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GoogleChartsLoaderService
    }];
  }, {
    data: [{
      type: Input
    }]
  });
})();
var GoogleChartsControlComponent = class {
  constructor(el, loaderService) {
    this.el = el;
    this.loaderService = loaderService;
    this.el = el;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.data.component = this;
  }
  ensureInit() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.wrapper) {
        return;
      }
      yield this.loaderService.load({
        packages: ["controls"]
      });
      let opt;
      opt = Object.create(this.data);
      opt.containerId = this.el.nativeElement.querySelector("div");
      this.wrapper = new google.visualization.ControlWrapper(opt);
    });
  }
};
GoogleChartsControlComponent.ɵfac = function GoogleChartsControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GoogleChartsControlComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(GoogleChartsLoaderService));
};
GoogleChartsControlComponent.ɵcmp = ɵɵdefineComponent({
  type: GoogleChartsControlComponent,
  selectors: [["google-charts-control"]],
  inputs: {
    data: "data"
  },
  standalone: false,
  decls: 1,
  vars: 0,
  template: function GoogleChartsControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleChartsControlComponent, [{
    type: Component,
    args: [{
      selector: "google-charts-control",
      template: "<div></div>"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: GoogleChartsLoaderService
    }];
  }, {
    data: [{
      type: Input
    }]
  });
})();
var Ng2GoogleChartsModule = class {
};
Ng2GoogleChartsModule.ɵfac = function Ng2GoogleChartsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || Ng2GoogleChartsModule)();
};
Ng2GoogleChartsModule.ɵmod = ɵɵdefineNgModule({
  type: Ng2GoogleChartsModule,
  declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
  exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
});
Ng2GoogleChartsModule.ɵinj = ɵɵdefineInjector({
  providers: [GoogleChartsLoaderService]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2GoogleChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent],
      providers: [GoogleChartsLoaderService],
      exports: [GoogleChartComponent, GoogleChartsDashboardComponent, GoogleChartsControlComponent]
    }]
  }], null, null);
})();
function isComponent(chart) {
  return chart.wrapper !== void 0;
}
var GoogleChartEditor = class {
  constructor(loaderService) {
    this.loaderService = loaderService;
  }
  createEditor() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.chartEditor !== void 0) {
        return;
      }
      yield this.loaderService.load({
        packages: ["charteditor"]
      });
      this.chartEditor = new google.visualization.ChartEditor();
      google.visualization.events.addListener(this.chartEditor, "ok", () => {
        const wrapper = this.chartEditor.getChartWrapper();
        this.comp.wrapper = wrapper;
        this.comp.data.chartType = wrapper.getChartType();
        if (this.comp.data.options !== void 0 || Object.isExtensible(this.comp.data)) {
          this.comp.data.options = wrapper.getOptions();
        }
        this.comp.wrapper.draw();
      });
    });
  }
  openDialog(chart, options) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.createEditor();
      return new Promise((resolve, reject) => {
        this.comp = isComponent(chart) ? chart : chart.component;
        google.visualization.events.addListener(this.chartEditor, "ok", () => {
          resolve(this.comp.wrapper);
        });
        google.visualization.events.addListener(this.chartEditor, "cancel", () => {
          reject();
        });
        this.chartEditor.openDialog(this.comp.wrapper, options);
      });
    });
  }
};
GoogleChartEditor.ɵfac = function GoogleChartEditor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || GoogleChartEditor)(ɵɵinject(GoogleChartsLoaderService));
};
GoogleChartEditor.ɵprov = ɵɵdefineInjectable({
  token: GoogleChartEditor,
  factory: GoogleChartEditor.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleChartEditor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: GoogleChartsLoaderService
    }];
  }, null);
})();
export {
  ChartHTMLTooltip,
  GoogleChartComponent,
  GoogleChartEditor,
  GoogleChartType,
  GoogleChartsControlComponent,
  GoogleChartsDashboardComponent,
  GoogleChartsLoaderService,
  Ng2GoogleChartsModule
};
//# sourceMappingURL=ng2-google-charts.js.map
