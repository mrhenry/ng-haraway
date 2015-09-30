import {mod} from './module';
import {injectAPI} from './inject';
import './preview';
import './chooser';

var modName = mod.name;
export default modName;

injectAPI();
