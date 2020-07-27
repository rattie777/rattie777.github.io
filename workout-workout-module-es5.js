function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workout-workout-module"], {
  /***/
  "./src/app/workout/workout-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/workout/workout-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: WorkoutRoutingModule */

  /***/
  function srcAppWorkoutWorkoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkoutRoutingModule", function () {
      return WorkoutRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _workout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./workout.component */
    "./src/app/workout/workout.component.ts");

    var routes = [{
      path: '',
      component: _workout_component__WEBPACK_IMPORTED_MODULE_2__["WorkoutComponent"]
    }];

    var WorkoutRoutingModule = function WorkoutRoutingModule() {
      _classCallCheck(this, WorkoutRoutingModule);
    };

    WorkoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WorkoutRoutingModule
    });
    WorkoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WorkoutRoutingModule_Factory(t) {
        return new (t || WorkoutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkoutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/workout/workout.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/workout/workout.component.ts ***!
    \**********************************************/

  /*! exports provided: WorkoutComponent */

  /***/
  function srcAppWorkoutWorkoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkoutComponent", function () {
      return WorkoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WorkoutComponent = /*#__PURE__*/function () {
      function WorkoutComponent() {
        _classCallCheck(this, WorkoutComponent);
      }

      _createClass(WorkoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkoutComponent;
    }();

    WorkoutComponent.ɵfac = function WorkoutComponent_Factory(t) {
      return new (t || WorkoutComponent)();
    };

    WorkoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkoutComponent,
      selectors: [["app-workout"]],
      decls: 2,
      vars: 0,
      template: function WorkoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "workout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtvdXQvd29ya291dC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-workout',
          templateUrl: './workout.component.html',
          styleUrls: ['./workout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/workout/workout.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/workout/workout.module.ts ***!
    \*******************************************/

  /*! exports provided: WorkoutModule */

  /***/
  function srcAppWorkoutWorkoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkoutModule", function () {
      return WorkoutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _workout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./workout-routing.module */
    "./src/app/workout/workout-routing.module.ts");
    /* harmony import */


    var _workout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./workout.component */
    "./src/app/workout/workout.component.ts");

    var WorkoutModule = function WorkoutModule() {
      _classCallCheck(this, WorkoutModule);
    };

    WorkoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WorkoutModule
    });
    WorkoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WorkoutModule_Factory(t) {
        return new (t || WorkoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _workout_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkoutRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkoutModule, {
        declarations: [_workout_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _workout_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkoutRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_workout_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _workout_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkoutRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=workout-workout-module-es5.js.map