import ko from 'knockout';
import htmlContent from './component.html';
import XLSX from 'xlsx';

class ViewModel {
    constructor(params) {
	console.log(XLSX);
    }
}

export default {
    viewModel: ViewModel,
    template: htmlContent
};
