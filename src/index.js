import ko from 'knockout';
import appRoot from './components/app-root/component.js';
ko.components.register('app-root', appRoot);
ko.applyBindings({}, document.getElementsByTagName('main')[0]);

