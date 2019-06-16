import _ from "lodash";
import $ from "jquery";
import mat from "./math";
import util from "./util";
import logo from "./logo.jpg";
import "./index.css";

const dom = $("<div>");
dom.html(_.join(["hello", "world"], "-1231231232131"));
$("body").append(dom);
