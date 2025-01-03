"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItalianStatusMapping = exports.Status = void 0;
// TODO: Add Documentation
var Status;
(function (Status) {
    Status[Status["ONGOING"] = 0] = "ONGOING";
    Status[Status["FINISHED"] = 1] = "FINISHED";
    Status[Status["UNRELEASED"] = 2] = "UNRELEASED";
    Status[Status["DROPPED"] = 3] = "DROPPED";
})(Status || (exports.Status = Status = {}));
exports.ItalianStatusMapping = {
    "IN CORSO": Status.ONGOING,
    "FINITO": Status.FINISHED,
    "NON RILASCIATO": Status.UNRELEASED,
    "DROPPATO": Status.DROPPED
};
