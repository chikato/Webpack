import "scss/styles.scss";
import {Person} from "./core";

let a = new Person("Robert", "Mark");
document.write("<div class='col-md-12'><h1>" + a.getFullName() + "</h1></div>");
console.log(a.getFullName());