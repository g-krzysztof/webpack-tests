import { message, messageDOM } from './tools/message';
import './components/footer'
import info from './data/title.txt';
import './sass/index.scss';
import addImage from './tools/image';
import Creator from './tools/creator';

message(info);
messageDOM(info);
addImage('h1');
const e1 = new Creator();
e1.addBgc('#567876');
const e2 = new Creator();
e2.addBgc('green');
const e3 = new Creator();
e3.addBgc();
e3.showColor();

let promise = new Promise(function (resolve, reject) { resolve("ok") });
