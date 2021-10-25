var capacitorSprig = (function (exports, core) {
    'use strict';

    exports.SurveyState = void 0;
    (function (SurveyState) {
        SurveyState[SurveyState["ShowSurvery"] = 0] = "ShowSurvery";
        SurveyState[SurveyState["NoSurvey"] = 1] = "NoSurvey";
        SurveyState[SurveyState["Disabled"] = 2] = "Disabled"; // Sprig has been disabled remotely
    })(exports.SurveyState || (exports.SurveyState = {}));

    const Sprig = core.registerPlugin('Sprig', {
    // web: () => import('./web').then(m => new m.SprigWeb()),
    });

    exports.Sprig = Sprig;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
